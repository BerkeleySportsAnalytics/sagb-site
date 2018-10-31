import sys
from bs4 import BeautifulSoup
import os

article_name = sys.argv[1]
filename = "articles/"+article_name+".html"
filename1 = article_name+".html"

excerpt = input("Enter Excerpt: ")

if(len(excerpt) > 120):
  print("Excerpt must be less than 120 characters.")
  sys.exit(2)

with open(filename) as article:
    article_soup = BeautifulSoup(article, "html5lib")

title = str(article_soup.findAll("h2")[0])[4:-5]

byline = str(article_soup.findAll("h4")[0])[4:-5]
author = byline[:byline.find("|")]
date = byline[byline.find("|")+2:]

with open("shared/featured-articles.js", "r") as f:
  sup = f.readlines()

for i in list(range(3,5))[::-1]:
  if(i==3):
    sup[3] = """article1 = \""""+article_name+""".html";\n"""
    sup[7] = """title1 = \""""+title+"""\";\n"""
    sup[11] = """date1 = \""""+date+"""\";\n"""
    sup[15] = """excerpt1 = \""""+excerpt+"""\";\n"""

  else:
    sup[i] = sup[i][:10] + sup[i-1][10:]
    sup[i+4] = sup[i+4][:8] + sup[i+3][8:]
    sup[i+8] = sup[i+8][:7] + sup[i+7][7:]
    sup[i+12] = sup[i+12][:10] + sup[i+11][10:]

print(sup)
with open("shared/featured-articles.js", "w") as f:
  f.write("".join(sup))




