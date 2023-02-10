<script setup>
	import { ref, onMounted } from 'vue';
	import gsap from 'gsap';

	const box = ref(null); // connects to template -- but can't figure out how to use it in the timeline yet...

	const timeline = gsap.timeline({
		paused: true,
	});

	function setupTimeline(ref) {
		timeline.timeScale(0.5);

		timeline
			.to('.box', {
				x: 200,
				backgroundColor: '#9fc9eb',
			})
			.to('.box', {
				y: 200,
				backgroundColor: '#fdcc9a',
				borderRadius: '50%',
				rotate: '180deg',
			})
			.to('.box', {
				x: 0,
				backgroundColor: '#fbf49c',
				rotate: '360deg',
			})
			.to('.box', {
				y: 0,
				backgroundColor: '#f69799',
				borderRadius: '0%',
				rotate: '0',
			});
	}

	let finished = false;

	// after DOM is rendered
	onMounted(function () {
		setupTimeline();
	});

	function play() {
		if (finished && !timeline.isActive()) {
			timeline.restart();
		} else {
			timeline.play();
		}
		finished = true;
	}

	// short hand
	const pause = () => timeline.pause();
	const resume = () => timeline.resume();
	const reverse = function () {
		if (timeline.reversed() == true) {
			timeline.play();
		} else {
			timeline.reverse();
		}
		// maybe this wasn't nessesary... after comparing...
		// seems to already be the standard?
	};
	const restart = () => timeline.restart();
</script>

<template>
	<h1>Home</h1>

	<div class="box" ref="box">box</div>

	<actions-zone>
		<button @click="play()">Play</button>
		<button @click="pause()">Pause</button>
		<button @click="resume()">Resume</button>
		<button @click="reverse()">Reverse</button>
		<button @click="restart()">Restart</button>
	</actions-zone>
</template>

<style>
	.box {
		width: 20vw;
		aspect-ratio: 1 / 1;
		background-color: #f69799;
		display: grid;
		place-items: center;

		opacity: 0.9;
		pointer-events: none;
	}

	actions-zone {
		display: flex;
		margin-top: 10px;
	}
</style>
