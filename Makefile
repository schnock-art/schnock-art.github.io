install-gh:
#https://dev.to/scc33/deploying-to-github-pages-using-gh-pages-2d95
	npm install gh-pages --save-dev

deploy-gh:
	npm run deploy

# Mobile debugging
# https://medium.com/technoetics/testing-your-website-on-desktop-and-live-mobile-device-simultaneously-6a2663ab018
# adb reverse tcp:3000 tcp:3000