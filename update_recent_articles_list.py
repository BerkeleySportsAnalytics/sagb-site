import sys
from bs4 import BeautifulSoup
import os

article_name = sys.argv[1]
filename = "articles/"+article_name+".html"

with open(filename, encoding='utf-8') as article:
    article_soup = BeautifulSoup(article, "html5lib")

title = str(article_soup.findAll("h2")[0])[4:-5]

with open("shared/recent-articles.js", "r", encoding='utf-8') as f:
  sup = f.readlines()

for i in list(range(3,12))[::-1]:
  if(i==3):
    sup[3] = """article1 = \""""+article_name+""".html";\n"""
    sup[13] = """title1 = \""""+title+"""";\n"""
  else:
    sup[i] = sup[i][:10] + sup[i-1][10:]
    sup[i+10] = sup[i+10][:8] + sup[i+9][8:]

with open("shared/recent-articles.js", "w", encoding='utf-8') as f:
  f.write("".join(sup))
