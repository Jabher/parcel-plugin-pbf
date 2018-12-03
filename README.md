Parcel-plugin-pbf
---
[Protocol Buffers](https://developers.google.com/protocol-buffers/) support in [Parcel](https://parceljs.org/) via [pbf](https://npmjs.com/package/pbf) library

#### How to install

use
```npm install parcel-plugin-pbf```
or
```yarn add parcel-plugin-pbf```

and then `require()` or `import` `.proto` files.

Parcel will do everything else for you: it will detect `parcel-plugin-` module in `node_modules` folder and will turn on compilation of `.proto` files.

#### API
```
import Pbf from 'pbf'

interface PbfMessage {
  read (value: Pbf): mixed,

  write (value: mixed, pbf: Pbf): void
}


module ProtobufferModule {
    declare module.exports: {
        [string]: PbfMessage
    }
}
```

#### Examples

Use [pbf](https://npmjs.com/package/pbf) as reference - this plugin utilizes its compiler.

```proto
// Envelope.proto
syntax = "proto3";

message Envelope {
    map<string, string> kv = 1;
    map<string, int32> kn = 2;
}
```
```typescript
import Pbf from 'pbf'
import {Envelope} from './envelope.proto'

export function decode(buffer: Buffer): Object {
  return Envelope.read(new Pbf(buffer))
}

export function encode(object: Object): Buffer {
    const pbf = new Pbf()
    Envelope.write(object, pbf)
    const buffer = pbf.finish()
    return buffer
}

```

#### Things to do
- [ ] source maps support
- [ ] tests
