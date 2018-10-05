import sys
from bs4 import BeautifulSoup
import os

article_name = sys.argv[1]
filename = "articles/"+article_name+".html"
filename1 = article_name+".html"

with open(filename) as article:
    article_soup = BeautifulSoup(article, "html5lib")

with open("data-journalism.html") as dj:
  dj_soup = BeautifulSoup(dj, "html5lib")

sidebar_list = dj_soup.findAll("ul", {"class": "sidebar-list"})[0]

title = str(article_soup.findAll("h2")[0])[4:-5]

new_entry = BeautifulSoup("""<li><a href='"""+filename+"""'>"""+title+"""</a></li>""", "html.parser")


sidebar_list.findAll("li")[0].insert_before(new_entry)
sidebar_list.findAll("li")[-1].extract()

dj_soup_str = str(dj_soup)

with open("data-journalism.html","w") as dj1:
  dj1.write(dj_soup_str)

for f in os.listdir("articles"):
  fn = "articles/"+f
  with open(fn) as article:
    article_soup = BeautifulSoup(article, "html5lib")
  list_articles = article_soup.findAll("div", {"id":"sidebar"})[0].find("section").find("ul")
  new_entry = BeautifulSoup("""<li><a href='"""+filename1+"""'>"""+title+"""</a></li>""", "html.parser")
  list_articles.findAll("li")[0].insert_before(new_entry)
  list_articles.findAll("li")[-1].extract()

  with open(fn,"w") as file1:
    file1.write(str(article_soup))




