# <img align="left" src="https://github.com/buildbreakdo/giticon/blob/master/examples/TwitchPoker.svg" alt="TwitchPoker user avatar identicon" height="41"/>Giticon 

Github style SVG identicons / user-avatars. Want to see a live example? See Giticon live on [pholder.com/imaginary-interiors](https://pholder.com/imaginary-interiors).

[<img title="Version" src="https://img.shields.io/npm/v/giticon.svg?style=flat-square" />](https://www.npmjs.org/package/giticon) [<img title="Maintenance Status" src="https://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat-square" />](https://github.com/buildbreakdo/giticon/pulse) [<img title="Build Status" src="https://travis-ci.org/buildbreakdo/giticon.svg?branch=master" />](https://travis-ci.org/buildbreakdo/giticon/) [![Coverage Status](https://coveralls.io/repos/github/buildbreakdo/giticon/badge.svg?branch=master)](https://coveralls.io/github/buildbreakdo/giticon?branch=master)

## Installation
```
npm install giticon --save
```
[![NPM Stats](https://nodei.co/npm/giticon.png?downloads=true)](https://npmjs.org/package/giticon)

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

const svgIdenticon = giticon('TwitchPoker', optionalOverrides);

console.log(svgIdenticon);

// <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="background-color: rgba(240,240,240,255);" viewBox="0 0 40 40">
//     <path
//       shape-rendering="crispEdges"
//       style="fill: rgba(46, 217, 38, 1 ); stroke: rgba(46, 217, 38, 1 ); strokeWidth: 1; max-width: 100%; max-height: 100%;"
//       d="M18,10 h4 v4 h-4z M18,14 h4 v4 h-4z M18,26 h4 v4 h-4z M14,26 h4 v4 h-4z M22,26 h4 v4 h-4z M10,10 h4 v4 h-4z M26,10 h4 v4 h-4z M10,22 h4 v4 h-4z M26,22 h4 v4 h-4z"
//     />
// </svg>
```

### Credit
Giticon is a simplified loose fork of https://github.com/stewartlord/identicon.js/tree/master
that only supports SVG.

#### License
MIT.
