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

    const settings = JSON.parse(
      await fs.promises.readFile(".vscode/settings.json")
    );
    settings["eslint.workingDirectories"].push({
      directory: `packages/${package}`,
      changeProcessCWD: true,
    });
    await fs.promises.writeFile(
      ".vscode/settings.json",
      JSON.stringify(settings, null, 2),
      "utf-8"
    );

    return {
      package,
      description,
      version,
    };
  },
};
