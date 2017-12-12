import OrbitControlModule from "three-orbit-controls";
import * as Three from "three";
const OrbitControls = OrbitControlModule( Three );
import resize from "vue-resize-directive";

export default {
	name: "PerspectiveViewport",
	directives: {
		resize
  },
	template: `
		<div class="viewport perspective"
			v-on:mousedown="mousedown"
			v-on:mousemove="mousemove"
			v-on:mouseup="mouseup"
			v-resize.debounce="onResize"
		>
			<div class="layer2D">
				<p>Perspective</p>
			</div>
			<canvas class="layer3D"></canvas>
		</div>
	`,
	props: [ "options" ],
	data() {
		return {
			raycaster: new Three.Raycaster(),
			mouse: new Three.Vector2(),
			width: 0,
			height: 0
		};
	},
	mounted() {
		this.width = this.$el.offsetWidth;
		this.height = this.$el.offsetHeight;

		this.camera = new Three.PerspectiveCamera( 45, this.aspect, 1, 1024 );
		this.camera.position.set( 8, -8, 8 );
		this.camera.up.set( 0, 0, 1 );
		this.camera.lookAt( new Three.Vector3( 0, 0, 0 ) );
		this.renderer = new Three.WebGLRenderer({
			alpha: true,
			antialias: false,
			canvas: this.$el.getElementsByTagName("canvas")[ 0 ]
		});
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( this.width, this.height );
		this.controls = new OrbitControls( this.camera, this.$el );
		this.controls.enabled = true;

		// Start the rendering loop:
		this.loop();
	},
	computed: {
		aspect() {
			return this.width / this.height;
		}
	},
	methods: {
		loop() {
			this.renderer.render( this.$store.state.scene, this.camera );
			requestAnimationFrame( this.loop );
		},

		// Returns position in 2D coordinates for point in 3D space:
		getPosition2D: function( point, camera, callback ) {
			let result = point.clone().project( camera );
			if ( typeof callback === "function" ) {
				callback( result );
				return;
			}
			return result;
		},
		// Normalize 2D coordinates to center (camera):
		normalizeToCenter( point, el, callback ) {
			let result = new Three.Vector2();
			result.x = ( point.x / el.clientWidth ) * 2 - 1;
			result.y = -( point.y / el.clientHeight ) * 2 + 1;
			if ( typeof callback === "function" ) {
				callback( result );
				return;
			}
			return result;
		},
		// Normalize 2D coordinates to corner (typical HTML):
		normalizeToCorner( point, el ) {
			return new Three.Vector2(
				point.x * (el.clientWidth / 2) + el.clientWidth / 2,
				-1 * point.y * (el.clientHeight / 2) + el.clientHeight / 2
			);
		},
		raycast(type) {
			let intersects, position;
			position = this.normalizeToCenter( this.mouse, this.$el );
			this.raycaster.setFromCamera( position, this.camera );
			intersects = this.raycaster.intersectObjects( this.$store.state.scene.children, true );
			if ( intersects.length > 0 ) {
				// Emit event to parent component to handle!
			}
		},
		// Mouse move:
		mousemove(e) {
			this.mouse.x = e.offsetX;
			this.mouse.y = e.offsetY;
			this.raycast("mousemove");
		},
		// Mouse down:
		mousedown(e) {
			this.raycast("mousedown");
		},
		// Mouse up:
		mouseup(e) {
			this.raycast("mouseup");
		},

		onResize(e) {
			this.width = e.offsetWidth;
			this.height = e.offsetHeight;
			this.camera.aspect = this.width / this.height;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( this.width, this.height );
		}

	}
};
