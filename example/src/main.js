// Libraries:
import Stats from "stats-js";
import Vue from "vue";
import Vuex from "vuex";
import * as Three from "three";

// Components:
import Frame from "./components/Frame.js";

// Data:
import Store from "./store";

let cube;

window.onload = function() {
	new Vue({
		el: "#v-wrapper",
		store: Store,
		data: function() {
			return {
				windowWidth: 0,
				windowHeight: 0
			};
		},
		render: h => h( Frame ),
		beforeMount() {
			window.addEventListener("resize", this.getWindowWidth );
			window.addEventListener("resize", this.getWindowHeight );
		},
		mounted: function() {
			this.$nextTick(function() {

				// Build the Three.js scene:
				let geometry = new Three.BoxGeometry( 1, 1, 1 );
				let material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
				cube = new Three.Mesh( geometry, material );
				cube.name = "myCube";
				Store.state.scene.add( cube );

				setInterval( loop, 1000 / 60 );
			});
		},
		beforeDestroy() {
			window.removeEventListener("resize", this.getWindowWidth );
			window.removeEventListener("resize", this.getWindowHeight );
		},
		methods: {
			getWindowWidth: function( e ) {
				this.windowWidth = document.documentElement.clientWidth;
			},
			getWindowHeight: function( e ) {
				this.windowHeight = document.documentElement.clientHeight;
			}
		}
	});
};


// Deterministic loop:
function loop() {
	cube.rotation.z += 0.05;
}
