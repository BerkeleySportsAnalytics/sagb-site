#!/usr/bin/env python
# coding: utf-8
import pandas as pd
from IPython.display import Image, HTML

# convert link to html tags 
def path_to_image_html(path):
    return '<img src="'+ path + '" width="60" >'

path = "sample1.csv" # Input CSV
data = pd.read_csv(path)

games = pd.read_csv('sample2.csv').loc[:,['name','slug']]
trans_games = games.set_index('name').T
img_dict = trans_games.to_dict('list')
images = []
for i in data['name']:
    images.append("https://d2cwpp38twqe55.cloudfront.net/req/202005142/images/players/" + img_dict.get(i)[0] + ".jpg")
data["pic"] = images
pd.set_option('display.max_colwidth', -1)

#render dataframe as html
html = HTML(data.to_html(escape=False ,formatters=dict(pic=path_to_image_html)))
a = html.data
#write html to file
with open('result.html', 'w') as f:
    f.write(a)
