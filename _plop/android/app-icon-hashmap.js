const config = require("../../config");
module.exports = {
  type: "modify",
  abortOnFail: false,
  path:
    config.projectUrl + "/app/src/main/java/com/everfit/util/AppIconUtils.kt",
  templateFile: "_plop_templates/android/app-icon-hashmap.hs",
  pattern: "// CODE_GEN_APP_ICON_HASHMAP DONT REMOVE THIS"
};
