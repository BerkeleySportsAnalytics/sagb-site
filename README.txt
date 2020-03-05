How To Set Up Git:
	1. Install Homebrew (https://brew.sh)
	2. `brew install git`
	3. You should now be able to clone this repository: `git clone https://....`

How to Set Up Website:
	1. Should be able to open up any site and view it `open index.html`

How to Add a New Article:
	1. `python new_dj_article.py article-file-name`
		1. Enter Title of Article: `The Evolution of the NBA`
	2. This creates a new html file and a folder for images: `open articles/article-file-name.html`
	3. Edit HTML file to put in the article!
	4. As of now, make sure you copy over "Spotlight" Article from a previous article. "Recent Articles" and "Featured Articles" should be loaded already.
	5. ONLY PROCEED UNTIL YOU ARE SURE THE ARTICLE LOOKS COMPLETLY READY! YES, CHECK AGAIN!
	6. Add to All Articles List: `python update_article_lists.py article-file-name`
		1. Make sure the DATE, AUTHOR, and TITLE are final before you run this!
		1. If you see a `html5lib` error, you may need to `pip install html5lib`
		2. If you see a `pip` error, you may need to `sudo brew install pip`
	7. Add to Recent Articles Lists: `python update_recent_articles_list.py article-file-name`
	8. OPTIONAL: add to featured articles: `python update_featured_articles.py article-file-name`
	9. OPTIONAL: change the spotlight article: `python update_spotlight_article.py article-file-name`
	
How to Edit The Actual Article:
	1. Paragraphs are wrapped in p tags: <p>paragraph</p>
	2. Including links: <a href="link-to-go-to" target="_blank">Text to display</a>
		1. The `target="_blank"` opens the link in a new tab automatically. Delete it if you don't want that.
	3. Images are wrapped in span tags: <span class="image centered"><img alt="" src="../images/path-to-image"/></span>
		1. All images should be inside a <span> tag
		2. The first image should have a class of "image featured"
		3. Centered images should have a class of "image centered"
		4. Images that take up half the screen on desktop with text wrapping can have a class of "image half-right" or "image half-left"
		5. What does the `alt=""` do? If the image doesn't load for some reason, it'll display this text.
	4. If you want to do more complicated stuff, go for it! Make sure stuff stays consistent though.

Update the Site (OCF):
	1. `ssh sportsanalytics@ssh.ocf.berkeley.edu`. Enter Password.
	2. `cd public_html`
	3. `git pull origin master`
	4. NOTE: This should be changed such that the OCF website automatically pulls when someone pushes to the repository

