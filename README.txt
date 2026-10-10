How To Set Up Git:
	1. Install Homebrew (https://brew.sh)
	2. `brew install git`
	3. You should now be able to clone this repository: `git clone https://....`

How to Set Up Website:
	1. Should be able to open up any site and view it `open index.html`

How Articles Are Organized:
	- Every article and blog post lives in `articles/`. Images live in `images/dj-pics/<article-name>/` (older blog posts use `images/blog-pics/`).
	- Each article lists its authors, date, semester, sport(s), and thumbnail in `<meta name="sagb:...">` tags at the top of the file.
	- `python3 scripts/build_articles.py` reads those tags and regenerates:
		- the byline (with links to author pages) and sport/semester tags on each article
		- `shared/articles-data.js`, which powers the DJ Archive page (dj-archive.html) and the article sidebars
		- the author pages in `authors/`
	- Author bios, roles, photos, and LinkedIn links are in `authors/authors.json`. Edit that file, then re-run the build.
		- If one person has been credited under two names, add the other spelling to their "aliases" list.
	- Never edit `shared/articles-data.js` or `authors/*.html` by hand; they are overwritten by the build.

How to Add a New Article:
	1. `python3 scripts/new_article.py article-file-name`
		1. Answer the prompts (title, authors, sports, date, semester).
	2. This creates a new html file and a folder for images: `open articles/article-file-name.html`
	3. Edit HTML file to put in the article! Name the cover image `main.jpg`, or change the `sagb:image` tag.
	4. ONLY PROCEED UNTIL YOU ARE SURE THE ARTICLE LOOKS COMPLETLY READY! YES, CHECK AGAIN!
	5. Publish it: `python3 scripts/build_articles.py`
		1. It now shows up in the DJ Archive, its author's page, and the "Related Articles" sidebars.
		2. New authors are added to `authors/authors.json` automatically. Fill in their bio there and re-run the build.
	6. OPTIONAL: change the spotlight article: `python3 scripts/update_spotlight_article.py article-file-name`
	
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
	1. `git status`. Run this to check which files need to be added. 
	2. `git add file-name` Run this to add the files that were modified (everything except debug.log).
	3. `git commit -m "comment for changes"` Run this to commit files and add comment based off changes made. 
	4. `git push origin master`. 
	1. `ssh sportsanalytics@ssh.ocf.berkeley.edu`. Enter Password.
	2. `cd public_html`
	3. `git pull origin master`
	4. NOTE: This should be changed such that the OCF website automatically pulls when someone pushes to the repository

