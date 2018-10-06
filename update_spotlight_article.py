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

featured_list = dj_soup.findAll("section", {"class": "spotlight"})[0]

print(featured_list.findAll("article"))
title = str(article_soup.findAll("h2")[0])[4:-5]

byline = str(article_soup.findAll("h4")[0])[4:-5]
author = byline[:byline.find("|")]
date = byline[byline.find("|")+2:]

new_entry = BeautifulSoup("""
<article>
  <a class="image featured" href='"""+filename+"""'><img alt="" src='images/dj-pics/"""+article_name+"""/main.jpg'/></a>
  <header>
    <h3><a href="#">"""+title+"""</a></h3>
    <p>"""+byline+"""</p>
  </header>
  <p>"""+excerpt+"""</p>
  <footer>
    <a class="button alt icon fa-file-o" href='"""+filename+"""'>Continue Reading</a>
  </footer>
</article>
""", "html.parser")


featured_list.findAll("article")[0].insert_before(new_entry)
featured_list.findAll("article")[-1].extract()

#print(featured_list)

dj_soup_str = str(dj_soup)

with open("data-journalism.html","w") as dj1:
  dj1.write(dj_soup_str)

for f in os.listdir("articles"):
  fn = "articles/"+f
  with open(fn) as article:
    article_soup = BeautifulSoup(article, "html5lib")
  featured_list = article_soup.findAll("section", {"class": "spotlight"})[0]

  new_entry = BeautifulSoup("""
  <article>
    <a class="image featured" href='"""+filename1+"""'><img alt="" src='../images/dj-pics/"""+article_name+"""/main.jpg'/></a>
    <header>
      <h3><a href="#">"""+title+"""</a></h3>
      <p>"""+byline+"""</p>
    </header>
    <p>"""+excerpt+"""</p>
    <footer>
      <a class="button alt icon fa-file-o" href='"""+filename1+"""'>Continue Reading</a>
    </footer>
  </article>
  """, "html.parser")
  featured_list.findAll("article")[0].insert_before(new_entry)
  featured_list.findAll("article")[-1].extract()

  with open(fn,"w") as file1:
    file1.write(str(article_soup))
