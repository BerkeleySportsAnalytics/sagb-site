How To Set Up Git:
	1. Install Homebrew (https://brew.sh)
	2. `brew install git`
	3. You should now be able to clone this repository: `git clone https://....`

How to Set Up Website:
	1. Should be able to open up any site and view it `open index.html`

How to Add a New Article:
	1. `python new_dj_article.py article-file-name`
		1. Enter Title of Article: `"The Evolution of the NBA"`
	2. This creates a new html file and a folder for images: `open articles/article-file-name.html`
	3. Edit HTML file!
	4. As of now, make sure you copy over "Recent Articles" list, "Featured Articles", and "Spotlight" Article from a previous article.
	5. ONLY PROCEED UNTIL YOU ARE SURE THE ARTICLE LOOKS COMPLETLY READY! YES, CHECK AGAIN!
	6. Add to All Articles List: `python update_article_lists.py article-file-name`
		1. If you see a `html5lib` error, you may need to `pip install html5lib`
		2. If you see a `pip` error, you may need to `sudo brew install pip`
	7. Add to Recent Articles Lists: `python update_recent_article_list.py article-file-name`
	8. OPTIONAL: add to featured articles: `python update_featured_articles.py article-file-name`
	9. OPTIONAL: change the spotlight article: `python update_spotlight_article.py article-file-name`
