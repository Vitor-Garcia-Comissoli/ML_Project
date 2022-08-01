from sklearn import tree
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import time

url = 'https://raw.githubusercontent.com/bmorbin/ML_Project/main/data_raw.csv'
data = pd.read_csv(url)
data = data.dropna(subset=[col for col in data.columns if col!='snow_depth']) 
data.snow_depth[data['snow_depth'].isna()] = 0 
data['date'] = pd.to_datetime(data['date'].astype(str), format = "%Y%m%d") 
data['month'] = data['date'].dt.month.astype(str) 
data['rain'] = ["1" if p > 0 else "0" for p in data['precipitation']] 
data['snow'] = ["1" if p > 0 else "0" for p in data['snow_depth']] 
data['rain_snow'] = data['rain']+data['snow'] 
data = data.set_index('date')

n_test = int(len(data)*0.2)
# 20% for test data
test_data = data[-n_test:]

n_train_val = len(data) - int(len(data)*0.2)
# 80% for train and validation
df = data[:n_train_val]

target = 'rain_snow'
input_columns = ['cloud_cover','sunshine','global_radiation','max_temp','mean_temp','min_temp','pressure','month']

X, y = df[input_columns], df[target] 

# checking if all classes are present in the training set
print(y.value_counts())

l_total_train = []
l_total_val = []

start = time.time()

b=20 # iterator bootstrap (resampling the set)
c=20 # number of complexity based on max_width
for j in range(0,b):
    X_train, X_val, y_train, y_val = train_test_split(X,y,test_size=0.4, random_state = j)
    
    l_a_train = []
    l_a_val = []
    
    for i in range(1,c):
        clf = tree.DecisionTreeClassifier(max_depth = i, criterion = "gini")
        clf = clf.fit(X_train, y_train)
        l_a_train += [sum(clf.predict(X_train) == y_train)]
        l_a_val += [sum(clf.predict(X_val) == y_val)]
    
    l_total_train += [np.array(l_a_train)]
    l_total_val += [np.array(l_a_val)]

mean_train = np.transpose(1-np.array(l_total_train)/len(y_train)).mean(1)
sd_train = np.transpose(1-np.array(l_total_train)/len(y_train)).std(1)

mean_val = np.transpose(1-np.array(l_total_val)/len(y_val)).mean(1)
sd_val = np.transpose(1-np.array(l_total_val)/len(y_val)).std(1)

# best max_depth argument to don't overfit
best_depth = list(mean_val).index(min(mean_val))+1

axis_x = list(range(1,c))

# Plotting 
plt.title('Árvore de Decisão\nErro x Complexidade')
plt.xlabel('Complexidade: Profundidade Máxima')
plt.ylabel('Erro') 
plt.plot(axis_x, mean_train, label="Treino")
plt.plot(axis_x, mean_val, label="Validação")
plt.xticks(axis_x)
plt.fill_between(axis_x, mean_train+sd_train, mean_train-sd_train, alpha=0.5)
plt.fill_between(axis_x, mean_val+sd_val, mean_val-sd_val, alpha=0.5)
plt.axvline(x=best_depth,color='gray', linestyle='dashed')
plt.legend(loc="lower left")
plt.show()

end = time.time()
# time spending to load all algorithm analysis
print("Minutos demorados:",(end-start)/60)


