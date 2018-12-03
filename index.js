module.exports = (bundler) => {
  bundler.addAssetType('pbf', require.resolve('./PbfAsset'));
};
