const actions = [];

actions.push(require("./alias"));
actions.push(require("./app-icon-hashmap"));
actions.push(require("./app-icon-label"));

module.exports = {
  description: "application api GET logic",
  prompts: [
    {
      type: "input",
      name: "team",
      message: "Please input team id",
      abortOnFail: false
    }
  ],
  actions
};
