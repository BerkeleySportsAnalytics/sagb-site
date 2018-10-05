import sys
from bs4 import BeautifulSoup
import os

article_name = sys.argv[1]
filename = "articles/"+article_name+".html"
filename1 = article_name+".html"

excerpt = input("Enter Excerpt: ")

with open(filename) as article:
    article_soup = BeautifulSoup(article, "html5lib")

with open("data-journalism.html") as dj:
  dj_soup = BeautifulSoup(dj, "html5lib")

featured_list = dj_soup.findAll("section", {"class": "article-list"})[0]

print(featured_list.findAll("article"))
title = str(article_soup.findAll("h2")[0])[4:-5]

byline = str(article_soup.findAll("h4")[0])[4:-5]
author = byline[:byline.find("|")]
date = byline[byline.find("|")+2:]

new_entry = BeautifulSoup("""
  <article class="box excerpt">
    <a class="image left" href='""" +  filename + """'><img alt="" src='images/dj-pics/""" +article_name+ """/main.png'/></a>
    <div>
      <header>
        <span class="date">"""+date+"""</span>
        <h3><a href='""" +  filename + """'>"""+ title +"""</a></h3>
      </header>
      <p>"""+ excerpt +"""</p>
    </div>
  </article>""", "html.parser")


featured_list.findAll("article")[0].insert_before(new_entry)
featured_list.findAll("article")[-1].extract()

print(featured_list)

dj_soup_str = str(dj_soup)

with open("data-journalism.html","w") as dj1:
  dj1.write(dj_soup_str)

for f in os.listdir("articles"):
  fn = "articles/"+f
  with open(fn) as article:
    article_soup = BeautifulSoup(article, "html5lib")
  featured_list = article_soup.findAll("section", {"class": "article-list"})[0]
  new_entry = BeautifulSoup("""
  <article class="box excerpt">
    <a class="image left" href='""" +  filename + """'><img alt="" src='../images/dj-pics/""" +article_name+ """/main.png'/></a>
    <div>
      <header>
        <span class="date">"""+date+"""</span>
        <h3><a href='""" +  filename + """'>"""+ title +"""</a></h3>
      </header>
      <p>"""+ excerpt +"""</p>
    </div>
  </article>""", "html.parser")
  featured_list.findAll("article")[0].insert_before(new_entry)
  featured_list.findAll("article")[-1].extract()

  with open(fn,"w") as file1:
    file1.write(str(article_soup))




