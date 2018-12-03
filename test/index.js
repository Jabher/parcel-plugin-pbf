const assert = require('assert')
const Pbf = require('pbf')
const { Envelope } = require('./Envelope.proto')

const obj = {
  kv: {foo: 'bar', bar: 'baz'},
  kn: {a: 1, b: 2}
}

const pbf = new Pbf()

Envelope.write(obj, pbf)

const buf = pbf.finish()
const data = Envelope.read(new Pbf(buf))

assert.deepEqual(data, obj)
