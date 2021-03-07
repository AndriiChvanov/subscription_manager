const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@pages": "src/pages",
    "@bgImages": "src/assets/images",
    "@icons": "src/assets/icons",
    "@helpers": "src/helpers",
    "@plugins": "src/plugins",
    "@services": "src/services",
    "@actions": "src/store/actions",
    "@sagas": "src/store/sagas",
    "@reducers": "src/store/reducers",
    "@constants": "src/constants",
    "@settings": "src/settings",
  })(config);

  return config;
};
