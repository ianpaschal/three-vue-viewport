# Three.js & Vue.js Viewport
A Three.js &amp; Vue.js viewport component for 3D applications.

[![license](https://img.shields.io/github/license/ianpaschal/three-vue-viewport.svg)](https://github.com/ianpaschal/three-vue-viewport/blob/master/LICENSE)
[![label](https://img.shields.io/github/issues-raw/ianpaschal/three-vue-viewport.svg)](https://github.com/ianpaschal/three-vue-viewport/issues)

## Overview
This Vue.js component helps make it easier to use Three.js in your applications. The component creates its own camera and renderer (either perspective or orthographic), and uses a global Three.js scene in your Vuex store.

## Example
[Live (Coming soon!)]() | [(Source)](https://github.com/ianpaschal/three-vue-viewport/tree/master/example)

![alt text][demo]

> Four Vue.js components rendering a single global scene. They are (clockwise from  upper left): top, front, left, and perspective.

## Installation
```
npm install --save three-vue-viewport
```

## Usage
Make sure you have Vuex installed and have created a Three.js scene

## FAQ
**Can I use this without Vuex?**

*Maybe. In theory, just pass your scene into the component. This may have some scope issues though, we'll see. You'll notice this repository is blank and I won't have time to work on it until a week or so for now.*

**Did you really pass on the opportunity to call this a three-vueport?**

*Yes.*

[demo]: https://github.com/ianpaschal/three-vue-viewport/raw/master/docs/images/demo.gif "4 Viewports"
