const cssInJsClassRegex = /^rcx-css-[a-z0-9]+$/;

expect.extend({
  toHaveCssInJsClass: (received: Element | null) => {
    if (!received) {
      return {
        message: () => 'expected received element not to be null',
        pass: false,
      };
    }

    for (let i = 0; i < received.classList.length; ++i) {
      const className = received.classList.item(i);
      const matches = className ? cssInJsClassRegex.test(className) : false;

      if (matches) {
        return {
          message: () =>
            'expected received element not to have a css-in-js class',
          pass: true,
        };
      }
    }

    return {
      message: () => 'expected received element to have a css-in-js class',
      pass: false,
    };
  },
});
