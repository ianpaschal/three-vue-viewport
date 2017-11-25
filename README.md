# Three.js & Vue.js Viewport
A Three.js &amp; Vue.js viewport component for 3D applications.

## Overview
This Vue.js component helps make it easier to use Three.js in your applications. The component creates its own camera and renderer (either perspective or orthographic), and uses a global Three.js scene in your Vuex store.

## Example
[Live (Coming soon!)]() | [(Source)](https://github.com/ianpaschal/three-vue-viewport/raw/master/example/index.html)

![alt text][demo]

> Four Vue.js components rendering a single global scene. They are (clockwise from  upper left): top, front, left, and perspective.

## Installation
```
npm install --save three-vue-viewport
```

## Usage
Make sure you have Vuex installed and have created a Three.js scene

## FAQ
**Did you really pass on the opportunity to call this a three-vueport?**

*Yes. For the people who get it, it feels not-that-funny, and for the people who don't get it, it's just misleading; is it a port of Vue.js to Three.js like syntax? Huh? I still find it clever enough that it sounds like 3-view in CAD.*

**Can I use this without Vuex?**
*Maybe. In theory, just pass your scene into the component. This may have some scope issues though, we'll see. You'll notice this repository is blank and I won't have time to work on it until a week or so for now.*

[demo]: https://github.com/ianpaschal/three-vue-viewport/raw/master/docs/images/demo.gif "4 Viewports"
