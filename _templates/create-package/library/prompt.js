const fs = require("fs");

module.exports = {
  prompt: async ({ prompter, args }) => {
    const { package } = await prompter.prompt({
      type: "input",
      name: "package",
      message: "What's the package name?",
    });

    const { description } = await prompter.prompt({
      type: "input",
      name: "description",
      message: "What's the package description?",
    });

    let { version } = JSON.parse(await fs.promises.readFile("lerna.json"));

    ({ version } = await prompter.prompt({
      type: "input",
      name: "version",
      default: version,
      message: "What's the package version?",
    }));

    return {
      package,
      description,
      version,
    };
  },
};
