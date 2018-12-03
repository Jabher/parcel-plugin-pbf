module.exports = (bundler) => {
  bundler.addAssetType('proto', require.resolve('./PbfAsset'));
};
