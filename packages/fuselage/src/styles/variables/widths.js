const widths = {
  full: '100%',
  screen: '100vw',
};

for (let i = 1; i <= 12; ++i) {
  for (let j = 1; j <= 12; ++j) {
    widths[`${ i }/${ j }`] = `${ i / j * 100 }%`;
  }
}

export default widths;
