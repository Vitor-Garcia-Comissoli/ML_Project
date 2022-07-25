import pandas as pd
import numpy as np

url = 'https://raw.githubusercontent.com/bmorbin/ML_Project/main/data_raw.csv'
data = pd.read_csv(url)
print(data.head(5)) # Print raw data

print(data.isna().sum()) # Print count of NA for each column

data = data.dropna(subset=[col for col in data.columns if col!='snow_depth']) # Removing rows with NA, except the column snow_depth

print(data.isna().sum()) # Print count of NA again after delete some NA

from sklearn.linear_model import LinearRegression # Applying simple regression model to predict missing values from snow_depth

def reg_simple(data):
	'''
	A function to predict snow depth by mean temperature of the day
	Returns the maximum snow depth value predict
	'''    
	data_reg_train = data.dropna()
    
	X_reg_train = np.array(data_reg_train.mean_temp).reshape(-1,1)
	y_reg_train = np.array(data_reg_train.snow_depth).reshape(-1,1)

	reg = LinearRegression()
	reg.fit(X_reg_train, y_reg_train)
    
	data_NA = data[data['snow_depth'].isna()]
	y_pred = reg.predict(np.array(data_NA.mean_temp).reshape(-1,1))
	return(round(max(y_pred)[0],1))
    
print(f'Minimum snow depth predicted is {reg_simple(data)}')

data.snow_depth[data['snow_depth'].isna()] = 0 # So the conclusion is to input 0s in missing values from column snow_depth

print(data.isna().sum()) # Print count of NA again after input NA values from snow_depth

data['date'] = pd.to_datetime(data['date'].astype(str), format = "%Y%m%d") # Convert column date to pandas date type

data['month'] = data['date'].dt.month.astype(str) # Creating column month

data['rain'] = ["1" if p > 0 else "0" for p in data['precipitation']] # Creating column rain indicator

data['snow'] = ["1" if p > 0 else "0" for p in data['snow_depth']] # Creating column snow indicator

data['rain_snow'] = data['rain']+data['snow'] # Setting the target classifier

data = data.set_index('date') # Set column date to index


print(round(data[['snow','rain']].value_counts(normalize=True),3)) # Print proportion of time wich rains and snows
print(round(data.rain_snow.value_counts(normalize=True),3))

print(data.describe()) # Describe dataframe





