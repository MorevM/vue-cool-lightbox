module.exports = {
	root: true,
	extends: [
		'@morev/eslint-config/base',
		'@morev/eslint-config/preset/assistive',
		'@morev/eslint-config/preset/vue2',
	],
	rules: {},
	overrides: [
		{
			files: ['*.cjs', '*.mjs'],
			extends: ['@morev/eslint-config/node'],
		},
	],
};
