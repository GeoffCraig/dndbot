module.exports = {
	extends: [ "leankit", "leankit/es6" ],
	parser: "babel-eslint",
	plugins: [ "babel" ],
	rules: {
		"init-declarations": 0,
		"global-require": 0,
		"max-nested-callbacks": 0,
		"prefer-const": 0,
		"generator-star-spacing": 0,
		"object-curly-spacing": 0,
		"object-shorthand": 0,
		"arrow-parens": 0,
		indent: [ 2, 2 ],
		// plugin for babel eslint to fix some problems with the core rules
		"babel/generator-star-spacing": "error",
		"babel/object-curly-spacing": [ "error", "always" ],
		"babel/object-shorthand": "error",
		"babel/arrow-parens": [ "error", "as-needed" ],
		"babel/no-await-in-loop": "error" // nothing to disable
	}
};