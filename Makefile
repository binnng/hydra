build:
	cat 'src/intro.js' \
		'extend/index.js' \
		'isType/index.js' \
		'artTemplate/src/template.js' \
		'artTemplate/src/config.js' \
		'artTemplate/src/cache.js' \
		'artTemplate/src/render.js' \
		'artTemplate/src/renderFile.js' \
		'artTemplate/src/get.js' \
		'artTemplate/src/utils.js' \
		'artTemplate/src/helper.js' \
		'artTemplate/src/onerror.js' \
		'artTemplate/src/compile.js' \
		'artTemplate/src/syntax.js' \
		'src/utils.js' \
		'src/dom.js' \
		'src/hydra.js' \
		'src/outro.js' \
		> hydra.js


min:
	make build
	uglifyjs hydra.js -m -o hydra.min.js