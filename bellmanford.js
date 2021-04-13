const I = Number.MAX_SAFE_INTEGER;

let graph = [
	[I, 3, 5, 9, I, I],
	[3, I, 3, 4, 7, I],
	[5, 3, I, 2, 6, 3],
	[9, 4, 2, I, 2, 2],
	[I, 7, 6, 2, I, 5],
	[I, I, 3, 2, 5, I]
];

function bellmanFord(graph, source) {
	let dist = [];
	let len = graph.length;
	for(let i = 0; i < graph.length; i++) {
		dist[i] = Number.MAX_SAFE_INTEGER;
	}
	dist[source] = 0;
	for(let k = 0; k < len - 1; k++) {
		for(let i = 0; i < len; i++) {
			for(let j = 0; j < len; j++) {
				if(dist[i] > dist[j] + graph[j][i]) {
					dist[i] = dist[j] + graph[j][i];
				}
			}
		}
	}
	for(let i = 0; i < len; i++) {
		for(let j = 0; j < len; j++) {
			if(dist[i] > dist[j] + graph[j][i]) {
				console.log('The graph contains a negative-weight cycle');
				return [];
			}
		}
	}
	return dist;
}

let source = 0;
let distances = bellmanFord(graph, source);
for(let i = 0; i < distances.length; i++) {
	console.log('Distance from ' + source + ' to ' + i + ' is ' + distances[i]);
}