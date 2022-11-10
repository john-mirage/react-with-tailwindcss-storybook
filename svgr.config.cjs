module.exports = {
  jsxRuntime: "automatic",
  outDir: "src/components/Icon",
  ref: true,
  svgoConfig: {
    plugins: [
      {
        name: "removeDimensions",
        active: true,
      },
      {
        name: "prefixIds",
        active: true,
      },
    ],
  },
  typescript: true,
};
