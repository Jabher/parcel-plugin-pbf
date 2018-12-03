const schema = require('protocol-buffers-schema')
const Asset = require('parcel-bundler/lib/Asset')
const { raw } = require('pbf/compile')

class PbfAsset extends Asset {
  async generate () {
    return [
      {
        type: 'js',
        value: raw(schema.parse(this.contents)),
        sourceMap: undefined
      }
    ]
  }
}

Object.defineProperty(PbfAsset.prototype, 'type', {
  configurable: true,
  value: 'pbf'
})
