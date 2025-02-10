mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXI5MjQiLCJhIjoiY201b2RweHNhMGxjazJscTI0cm92MDNuOCJ9.DUSIWV2_-BR0a9LOqhn15w';

const createMap = (zoomValue) => {
	const map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/ander924/cm6sdtrs2004t01qshcd17pgy', // style URL
		center: [-123.126, 49.249], // starting position [lng, lat]
		zoom: zoomValue, // starting zoom
		minZoom: zoomValue //can't zoom out
	});
	
	map.on('load', () => {
		// Load Public Art Layer
		map.addSource('public-art', {
			type: 'geojson',
			data: 'https://raw.githubusercontent.com/NAnder924/GGR472_Lab2/refs/heads/main/public-art.geojson'
		});
	
		map.addLayer({
			id: 'public-art-layer',
			type: 'circle',
			source: 'public-art',
			paint: {
				'circle-radius': 3,
				'circle-color': '#B33951', 
				'circle-stroke-width': 0.5,
				'circle-stroke-color': '#691E06'
			}
		});
	
		map.addSource('community-gardens-and-food-trees', {
			type: 'geojson',
			data: 'https://raw.githubusercontent.com/NAnder924/GGR472_Lab2/refs/heads/main/community-gardens-and-food-trees.geojson'
		});
	
		map.addLayer({
			id: 'community-gardens-and-food-trees', 
			type: 'circle',
			source: 'community-gardens-and-food-trees',
			paint: {
				'circle-radius': 3,
				'circle-color': '#284B63',
				'circle-stroke-width': 1,
				'circle-stroke-color': '#2F3E46'
			}
		})
	});
}

createMap(11)

const renameButton = () => {
	const button = document.getElementById("button");
	console.log(button.innerHTML)
	button.innerHTML === "Hide Legend" ? button.innerHTML = "Show Legend" : button.innerHTML = "Hide Legend"
}

document.getElementById('button').addEventListener('click', () => {
	const mapDiv = document.getElementById('map');

	 if (mapDiv.style.width === '70vw') {
		mapDiv.style.width='100vw'
		mapDiv.style.height='100vh'
		createMap(11)
	} else {
		mapDiv.style.width='70vw'
		mapDiv.style.height='100vh'
		createMap(10.5)
	}
})
