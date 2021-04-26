declare module '*.scss' {
  declare const module: {
    use(): void;
    unuse(): void;
  };

  export = module;
}
