import PerspectiveViewport from "../../../src/PerspectiveViewport.js";
import OrthographicViewport from "../../../src/OrthographicViewport.js";
export default {
	name: "Frame",
	components: {
		PerspectiveViewport,
		OrthographicViewport
	},
	template: `
		<div id="app">
			<div class="frame-top"></div>
			<div class="frame-mid">
				<div class='viewport-container'>
					<OrthographicViewport view='top'/>
				</div>
				<div class='viewport-container'>
					<OrthographicViewport view='front'/>
				</div>
				<div class='viewport-container'>
					<OrthographicViewport view='left'/>
				</div>
				<div class='viewport-container'>
					<PerspectiveViewport/>
				</div>
			</div>
			<div class="frame-bottom"></div>
		</div>
	`
};
