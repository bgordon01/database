test:
	./node_modules/istanbul/lib/cli.js cover ./node_modules/.bin/_mocha -- -R spec "test/server/**/*.js"

 .PHONY: test