eslint-plugin-basad
===================
![build-status](https://img.shields.io/circleci/project/github/EdenGottlieb/eslint-plugin-basad.svg)
![version](https://img.shields.io/npm/v/eslint-plugin-basad.svg)

# tldr;

The first ESLint plugin for Jewish people.

# Intro

An ESLint plugin that checks for files that don't have בס״ד (or any other string of your choice) at the top.

This is useful for enforcing religious compliance and/or spiritual devotion among your dev team. I won't be offended if you choose to use it for more mundane or silly matters such as organizational documentation standards.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint --save-dev
```

If `ESLint` is installed globally, the plugin needs to be installed globally as well.

```sh
$ npm install eslint-plugin-basad --save-dev
```

# Basic Configuration

Add the `plugins` property to your `.eslintrc` file and specify eslint-plugin-basad as a plugin.

```json
{
  "plugins": [
    "basad"
  ]
}
```

Then, turn on the plugin by adding it to the rules section.

```json
{
  "plugins": [
    "basad"
  ],
  "rules": {
    "basad/basad": 2
  }
}
```

The default configuration will check that the first line of each file is a comment containing the strings `basad` or `בס״ד` and generate an error if it doesn't.

# Custom Configuration
You can configure `eslint-plugin-basad` with several options.

1. Severity (0 - allow, 1 - warning, 2 - error)
1. Custom Matcher (`string|[string]`) - if provided, replaces default strings expected. Leave `null` to use the default `['basad', 'בס״ד']`
1. Options:

	* **allowAnywhere**: Allows matching for all of the comments in the file, not only in the first line (default: `false`)
	* **ignoreCase**: Makes the rule case-insensitive. (default: `false`)

_Note: only Severity is required._

###Examples

```
"basad/basad": 2
```

```
"basad/basad": [2, "customMatch"]
```

```
"basad/basad": [
	2,
	["customMatch1", "customMatch2"]
]
```
```
"basad/basad": [
	2,
	["customMatch1", "customMatch2"],
	{
		"ignoreCase": true,
		"allowAnywhere": true
	}
]
```
```
"basad/basad": [
	2,
	null,
	{
		"ignoreCase": true,
		"allowAnywhere": true
	}
]
```
# Contributing

Feel free to create PRs with additional features, bug fixes, general improvements, and anything else really.
Please take note that this plugin is dead simple by design - zero dependencies and minimal code.
Any complication added will need to be justified properly.



# License

eslint-plugin-basad is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
