import pandas as pd
url = 'https://raw.githubusercontent.com/bmorbin/ML_Project/main/data_raw.csv'
df = pd.read_csv(url)
print(df.head(5))
