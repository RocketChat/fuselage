module.exports = {
  prompt: async ({ prompter }) => {
    const { package: packageName } = await prompter.prompt({
      type: "input",
      name: "package",
      message: "What's the package name?",
    });

    const { description } = await prompter.prompt({
      type: "input",
      name: "description",
      message: "What's the package description?",
    });

    const { version } = await prompter.prompt({
      type: "input",
      name: "version",
      default: "0.0.1",
      message: "What's the package version?",
    });

    return {
      package: packageName,
      description,
      version,
    };
  },
};
