const config = require("../../config");
module.exports = {
  type: "modify",
  abortOnFail: false,
  path: config.projectUrl + "/app/src/main/AndroidManifest.xml",
  templateFile: "_plop_templates/android/alias.hs",
  pattern: "<!-- CODE_GEN_ALIAS DONT REMOVE THIS -->"
};
