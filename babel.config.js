// It will be loaded for Next app, Storybook app and jest testing.
module.exports = api => {
  api.cache.forever();

  return {
    presets: ["next/babel"],
    plugins: []
  };
};
