# Giticon
Github style SVG identicons.

## Installation
```
npm install giticon --save
```

## Usage
```
const giticon = require('giticon');

const optionalOverrides = {
  background: [240, 240, 240, 255],
  margin:     0.2,
  size:       40,
  saturation: 0.7,
  brightness: 0.5
};

const svgIdenticon = giticon('John Doe', optionalOverrides);

console.log(svgIdenticon);
```

### Credit
Giticon is a simplified loose fork of https://github.com/stewartlord/identicon.js/tree/master
that only supports SVG.

#### License
MIT.
