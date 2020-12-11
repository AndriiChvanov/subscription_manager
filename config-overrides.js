const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
	alias({
		"@components": "src/components",
		"@pages": "src/pages",
		"@bgImages": "src/assets/images",
		"@helpers": "src/helpers",
		"@plugins": "src/plugins",
		"@services": "src/services",
		"@actions": "src/actions",
	})(config);

	return config;
};
