document.addEventListener("DOMContentLoaded", function () {
	// PIE chart check
	const monthlyChart = document.querySelector('#monthlyChart');
	if (monthlyChart) {
		Chartist.Pie('#monthlyChart', {
			labels: ['50%', '20%', '30%'],
			series: [50, 20, 30]
		}, {
			plugins: [Chartist.plugins.tooltip()]
		});
	}

	// LINE chart check
	const trafficChart = document.querySelector('#trafficChart');
	if (trafficChart) {
		new Chartist.Line('#trafficChart', {
			labels: [1, 2, 3, 4, 5, 6, 7],
			series: [
				[5, 9, 7, 8, 5, 3, 5],
				[6, 9, 5, 10, 2, 3, 7],
				[2, 7, 4, 10, 7, 6, 2]
			]
		}, {
			plugins: [Chartist.plugins.tooltip()]
		});
	}
});
