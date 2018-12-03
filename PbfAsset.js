const schema = require('protocol-buffers-schema')
const Asset = require('parcel-bundler/src/Asset')
const { raw } = require('pbf/compile')

class PbfAsset extends Asset {
  constructor (...args) {
    super(...args)
    this.type = 'js'
  }

  parse (code) {
    return schema.parse(code)
  }

  async generate () {
    return [
      {
        type: 'js',
        value: raw(this.ast),
        sourceMap: undefined
      }
    ]
  }
}
module.exports = PbfAsset
