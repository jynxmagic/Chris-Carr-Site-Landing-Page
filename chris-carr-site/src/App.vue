<template>
	<div id="app">
		<div id="video">
			<div class="preloader">
				<div class="preloader-bounce">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<Header />

			<video autoplay muted loop id="myVideo">
				<source src="images/video-bg.mp4" type="video/mp4" />
			</video>

			<div id="fullpage" class="fullpage-default">
				<slide-1 />
				<slide-2 />
				<slide-3 />
				<slide-4 />
				<slide-6 />
				<slide-5 />
				<slide-7 />
        <div id="social-icons">
          <div class="text-right">
            <ul class="social-icons">
              <li>
                <a href="#" title="Facebook"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#" title="Twitter"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#" title="Linkedin"><i class="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a href="#" title="Instagram"><i class="fa fa-behance"></i></a>
              </li>
            </ul>
          </div>
        </div>
		</div>
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Slide1 from "./components/Slide1.vue";
import Slide2 from "./components/Slide2.vue";
import Slide3 from "./components/Slides/Slide3.vue";
import Slide7 from "./components/Slides/Slide7.vue";

export default {
	name: "app",
	components: {
		HelloWorld,
		Header,
		Slide1,
		Slide2,
		Slide3,
		Slide7,
	},
};
</script>

<style>

video {
	position: fixed;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
}
#video:after {
	content: "";
	opacity: 0.75;
	background: #4096ee; /* Old browsers */
	background: -moz-linear-gradient(
		top,
		#4096ee 0%,
		#39ced6 100%
	); /* FF3.6-15 */
	background: -webkit-linear-gradient(
		top,
		#4096ee 0%,
		#39ced6 100%
	); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(
		to bottom,
		#4096ee 0%,
		#39ced6 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4096ee', endColorstr='#39ced6',GradientType=0 ); /* IE6-9 */
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
}
.preloader-bounce {
	left: 0;
	right: 0;
	top: 50%;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	position: absolute;
}
.preloader-bounce > span {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	margin: 0.3em;
	display: inline-block;
	vertical-align: middle;
	-webkit-animation: bounce 0.6s infinite alternate;
	animation: bounce 0.6s infinite alternate;
	background: #fff;
}
.preloader-bounce > span:nth-child(2) {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
	background: #fff;
}
.preloader-bounce > span:nth-child(3) {
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
	background: #fff;
}

@-webkit-keyframes bounce {
	from {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	to {
		-webkit-transform: translateY(-1.2em);
		transform: translateY(-1.2em);
	}
}

@keyframes bounce {
	from {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	to {
		-webkit-transform: translateY(-1.2em);
		transform: translateY(-1.2em);
	}
}

#fullpage {
	z-index: 99;
}
</style>
