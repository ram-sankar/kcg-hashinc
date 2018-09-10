/**
* Author: LimpidThemes
* Version: 1.0
* Description: Javascript file for the Pathshala Dashboard Template
* Date: 16-07-2017
**/

/**********************************************************
		BEGIN: MENU TOGGLE
**********************************************************/
jQuery(document).ready(function($){
	"use strict";
	jQuery("#menu-toggle").click(function(e) {
		e.preventDefault();
		jQuery("#outer-wrapper").toggleClass("toggled");
	});
	
	//datepicker
	jQuery("#startDate").datepicker();
	jQuery("#endDate").datepicker();
	jQuery("#studentDOB").datepicker({changeYear: true});
	
	//Student attendence detailed table
	jQuery('#attendenceDetailedTable').DataTable();
	
	
	//Student attendence horizontal bar chart
	var myChart = new Chart( $('#studentAttendenceChart'), {
		type: 'horizontalBar',
		data: {
			labels: ["Math", "Physics", "Chemistry", "Language", "History"],
			datasets: [{
				data: [69, 78, 60, 90, 85],
				backgroundColor: [
					'rgba(255, 195, 109, 1)',
					'rgba(39, 174, 96, 1)',
					'rgba(255, 118, 118, 1 )',
					'rgba(39, 174, 96, 1)',
					'rgba(39, 174, 96, 1)'
				],
				 borderWidth: 0
			}]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero:true
					},
					gridLines: {
						display:false
					}
				}],
				yAxes: [{
					gridLines: {
						display:false
					},
					//barPercentage: 0.5,
					categoryPercentage: 0.5
				}]
			},
			legend: {
				display: false
			}
		}
	});


	//Student attendence summary bar chart
	var myChart = new Chart( $('#studentAttendenceSummary'), {
		type: 'bar',
		data: {
			labels: ["MTH101", "PHY201", "CHE101", "LAN201", "HIS301", "BIO101"],
			datasets: [{
				data: [69, 78, 60, 90, 85, 55],
				backgroundColor: [
					'rgba(255, 195, 109, 1)',
					'rgba(39, 174, 96, 1)',
					'rgba(255, 118, 118, 1 )',
					'rgba(39, 174, 96, 1)',
					'rgba(39, 174, 96, 1)',
					'rgba(255, 118, 118, 1 )'
				],
				 borderWidth: 0
			}]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero:true
					},
					gridLines: {
						display:false
					}
				}],
				yAxes: [{
					gridLines: {
						display:false
					},
					//barPercentage: 0.5,
					categoryPercentage: 0.5,
					ticks: {
						beginAtZero:true
					}
				}]
			},
			legend: {
				display: false
			}
		}
	});
	
	//Student attendence summary bar chart
	var myChart = new Chart( $('#studentAttendenceBar'), {
		type: 'bar',
		data: {
			labels: ["CSE", "IT", "MECH", "CIVIL", "AERO", "ECE"],
			datasets: [
				{
					data: [10, 4, 18, 2, 8, 6],
					backgroundColor: 'rgba(255, 118, 118, 1)',
					borderWidth: 0
				},
				{
					data: [4, 1, 0, 3, 3, 5],
					backgroundColor:'rgba(255, 195, 109, 1)',
					borderWidth: 0
				},
				{
					data: [36, 42, 34, 45, 36, 45],
					backgroundColor: 'rgba(39, 174, 96, 1)',
					borderWidth: 0
				}
			]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero:true
					},
					gridLines: {
						display:false
					}
				}],
				yAxes: [{
					gridLines: {
						display:false
					},
					//barPercentage: 0.5,
					categoryPercentage: 0.5,
					ticks: {
						beginAtZero:true
					}
				}]
			},
			legend: {
				display: false
			}
		}
	});
	
	//student pie chart
	var myChart = new Chart( $('#studentPie'), {
		type: 'pie',
		data: {
			labels: ["Absent", "OnDuty", "Present"],
			datasets: [{
			  backgroundColor: [
				"#FF7676",
				"#FFC36D",
				"#27AE60"
			  ],
			  data: [6, 2, 70]
			}]
		},
		options: {
			legend: {
				display: false
			}
		}
	});
	
	//student attendence trend chart
	var myChart = new Chart( $('#studentAttendenceLine'), {
		type: 'line',
		data: {
			labels: ["1 Sep", "2 Sep", "3 Sep", "4 Sep", "5 Sep", "6 Sep", "7 Sep"],
			datasets: [
				{
					data: [4, 2, 1, 1, 2, 3, 3],
					borderColor: "#FF7676",
					fill: false
				},
				{
					data: [15, 11, 14, 5, 11, 4, 9],
					borderColor: "#FFC36D",
					fill: false
				},
				{
					data: [14, 4, 16, 10, 5, 13, 20],
					borderColor: "#27AE60",
					fill: false
				},
			]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero:true
					},
					gridLines: {
						display:false
					}
				}],
				yAxes: [{
					gridLines: {
						display:false
					},
					//barPercentage: 0.2,
					categoryPercentage: 0.5,
					ticks: {
						beginAtZero:true
					}
				}]
			},
			legend: {
				display: false
			}
		}
	});
	
});
