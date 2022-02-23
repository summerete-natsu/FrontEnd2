# -*- coding: utf-8 -*-
#


import pandas as pd
import matplotlib.pyplot as plt
import japanize_matplotlib


df=pd.read_csv("FEH_00200524_211202203713.csv",index_col="全国・都道府県",
               encoding='shift_jis')

print(df["2019年"])
df["2019年"]=pd.to_numeric(df['2019年'].str.replace(",",""))
df['2019年'].plot.bar()
plt.show()
