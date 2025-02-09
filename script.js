mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXI5MjQiLCJhIjoiY201b2RweHNhMGxjazJscTI0cm92MDNuOCJ9.DUSIWV2_-BR0a9LOqhn15w';
const initialZoom = 11; //initial zoom

const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/ander924/cm6sdtrs2004t01qshcd17pgy', // style URL
	center: [-123.126, 49.249], // starting position [lng, lat]
	zoom: 11, // starting zoom
	minZoom: initialZoom //can't zoom out
});

map.on('load', () => {
    // Load Public Art Layer
    map.addSource('public-art', {
        type: 'geojson',
        data: 'public-art.geojson'
    });

    map.addLayer({
        id: 'public-art-layer',
        type: 'circle',
        source: 'public-art',
        paint: {
            'circle-radius': 6,
            'circle-color': '#ff5733', // Orange-red color
            'circle-stroke-width': 1,
            'circle-stroke-color': '#ffffff'
        }
    });

map.on('load', () => {
	map.addSource('community-gardens-and-food-trees', {
		type: 'geojson',
		data: 'community-gardens-and-food-trees.geojson'
	});

	map.addLayer({
		id: 'community-gardens-and-food-trees', 
		type: 'circle',
		source: 'community-gardens-and-food-trees',
		paint: {
			'circle-radius': 6,
			'circle-color': '#ff5733',
			'circle-stroke-width': 1,
			'circle-stroke-color': '#ffffff'
		}
	})
})

});


