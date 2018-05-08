Highcharts.chart('container', {

	chart: {
		type: 'bubble',
		plotBorderWidth: 1,
		zoomType: 'xy'
	},

	legend: {
		enabled: false
	},

	title: {
		text: 'Gun Ownership and Suicide Rate per State'
	},

	subtitle: {
		text: 'Source: <a href="https://today.yougov.com/">YouGov (2015)</a> and <a href="https://www.cdc.gov/nchs/pressroom/sosmap/suicide-mortality/suicide.htm">CDC (2016)</a>'
	},

	xAxis: {
		gridLineWidth: 1,
		title: {
			text: 'Gun Ownership Rate'
		},
		labels: {
			format: '{value} %'
		},
		plotLines: [{
			color: 'black',
			dashStyle: 'dot',
			width: 2,
			value: 0,
			label: {
				rotation: 0,
				y: 15,
				style: {
					fontStyle: 'italic'
				},
				text: 'Safe fat intake 65g/day'
			},
			zIndex: 3
        }]
	},

	yAxis: {
		startOnTick: false,
		endOnTick: false,
		title: {
			text: 'Suicide Rate (age adjusted, per 100,000)'
		},
		labels: {
			format: '{value} '
		},
		maxPadding: 0.2,
		plotLines: [{
			color: 'black',
			dashStyle: 'dot',
			width: 2,
			value: 0,
			label: {
				align: 'right',
				style: {
					fontStyle: 'italic'
				},
				text: 'Safe sugar intake 50g/day',
				x: -10
			},
			zIndex: 3
        }]
	},

	tooltip: {
		useHTML: true,
		headerFormat: '<table>',
		pointFormat: '<tr><th colspan="2"><h3>{point.state}</h3></th></tr>' +
			'<tr><th>Gun ownership rate:</th><td>{point.x}%</td></tr>' +
			'<tr><th>Suicide rate per 100,000:</th><td>{point.y}</td></tr>',
		// '<tr><th>Gun-public health alliance?</th><td></td></tr>',
		footerFormat: '</table>',
		followPointer: true
	},

	plotOptions: {
		series: {
			dataLabels: {
				enabled: true,
				format: '{point.name}'
			}
		}
	},

	series: [{
		data: [
			{ x: 52.3, y: 15.64, z: 1, name: 'MT', state: 'Montana' },
			{ x: 53.8, y: 14.95, z: 1, name: 'WY', state: 'Wyoming' },
			{ x: 61.7, y: 14.44, z: 1, name: 'AK', state: 'Alaska' },
			{ x: 33.5, y: 12.92, z: 1, name: 'OK', state: 'Oklahoma' },
			{ x: 56.9, y: 12.79, z: 1, name: 'ID', state: 'Idaho' },
			{ x: 54.2, y: 12.12, z: 1, name: 'WV', state: 'West Virginia' },
			{ x: 49.9, y: 13.5, z: 7, name: 'NM', state: 'New Mexico' },
			{ x: 31.9, y: 10.95, z: 3.5, name: 'UT', state: 'Utah' },
			{ x: 37.5, y: 10.9, z: 3.5, name: 'NV', state: 'Nevada' },
			{ x: 42.4, y: 10.84, z: 3.5, name: 'KY', state: 'Kentucky' },
			{ x: 34.3, y: 10.73, z: 7, name: 'CO', state: 'Colorado' },
			{ x: 48.9, y: 10.69, z: 3.5, name: 'AL', state: 'Alabama' },
			{ x: 57.9, y: 10.38, z: 1, name: 'AR', state: 'Arkansas' },
			{ x: 35, y: 10.36, z: 1, name: 'SD', state: 'South Dakota' },
			{ x: 27.1, y: 10.26, z: 3.5, name: 'MO', state: 'Missouri' },
			{ x: 32.3, y: 10.15, z: 1, name: 'AZ', state: 'Arizona' },
			{ x: 44.4, y: 9.93, z: 1, name: 'SC', state: 'South Carolina' },
			{ x: 47.9, y: 9.92, z: 1, name: 'IT', state: 'North Dakota' },
			{ x: 39.4, y: 9.67, z: 7, name: 'TN', state: 'Tennessee' },
			{ x: 28.8, y: 9.58, z: 7, name: 'VT', state: 'Vermont' },
			{ x: 26.6, y: 9.32, z: 7, name: 'OR', state: 'Oregon' },
			{ x: 44.5, y: 9.09, z: 1, name: 'LA', state: 'Louisiana' },
			{ x: 32.2, y: 8.78, z: 7, name: 'KS', state: 'Kansas' },
			{ x: 42.8, y: 8.71, z: 1, name: 'MS', state: 'Mississippi' },
			{ x: 14.4, y: 8.65, z: 7, name: 'NH', state: 'New Hampshire' },
			{ x: 33.8, y: 8.52, z: 1, name: 'IN', state: 'Indiana' },
			{ x: 31.6, y: 8.09, z: 1, name: 'GA', state: 'Georgia' },
			{ x: 44.7, y: 7.49, z: 1, name: 'WI', state: 'Wisconsin' },
			{ x: 19.6, y: 7.44, z: 1, name: 'OH', state: 'Ohio' },
			{ x: 29.3, y: 7.44, z: 7, name: 'VA', state: 'Virginia' },
			{ x: 22.6, y: 7.42, z: 1, name: 'ME', state: 'Maine' },
			{ x: 28.7, y: 7.34, z: 1, name: 'NC', state: 'North Carolina' },
			{ x: 35.7, y: 7.28, z: 7, name: 'TX', state: 'Texas' },
			{ x: 33.8, y: 7.22, z: 7, name: 'IA', state: 'Iowa' },
			{ x: 32.5, y: 7.1, z: 1, name: 'FL', state: 'Florida' },
			{ x: 27.1, y: 7.05, z: 1, name: 'PA', state: 'Pennsylvania' },
			{ x: 27.7, y: 6.62, z: 3.5, name: 'WA', state: 'Washington' },
			{ x: 19.1, y: 6.07, z: 1, name: 'NE', state: 'Nebraska' },
			{ x: 5.2, y: 5.87, z: 1, name: 'DE', state: 'Delaware' },
			{ x: 36.7, y: 5.77, z: 1, name: 'MN', state: 'Minnesota' },
			{ x: 20.7, y: 3.92, z: 7, name: 'MD', state: 'Maryland' },
			{ x: 20.1, y: 3.86, z: 7, name: 'CA', state: 'California' },
			{ x: 26.2, y: 3.73, z: 1, name: 'IL', state: 'Illinois' },
			{ x: 5.8, y: 2.83, z: 7, name: 'RI', state: 'Rhode Island' },
			{ x: 16.6, y: 2.73, z: 1, name: 'CT', state: 'Connecticut' },
			{ x: 45.1, y: 2.43, z: 1, name: 'HI', state: 'Hawaii' },
			{ x: 10.3, y: 2.3, z: 7, name: 'NY', state: 'New York' },
			{ x: 22.6, y: 1.89, z: 3.5, name: 'MA', state: 'Massachusetts' },
			{ x: 13.5, y: 1.8, z: 1, name: 'NJ', state: 'New Jersey' },


        ]
    }]

});