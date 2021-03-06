'use strict';

var app = angular.module('BlogApp', []);

google.load('visualization', '1', { packages: ['corechart'] });

app.controller('LengthForAgeCtrl', function($scope, $http, $window) {
  this.dataTable = lengthForAge;

  this.form = {};

  this.result = '?';

  this.dataTableForChart = function() {
    var result = [];

    for (var i = 0, max = $scope.length_for_age.dataTable.length; i < max ; i++) {
      result.push(
        [
          $scope.length_for_age.dataTable[i].month + ' month',
          $scope.length_for_age.dataTable[i].average,
          $scope.length_for_age.dataTable[i]['2nd(2.3rd)'],
          $scope.length_for_age.dataTable[i]['98th(97.7th)']
        ]
      );
    }

    return result;
  };

  this.calculatePercentile = function() {
    if (this.form.month && this.form.bodyLength) {
      if (this.form.bodyLength < this.form.month['2nd(2.3rd)']) {
        this.result = 'below 2nd';
      } else if (this.form.bodyLength < this.form.month['5th']) {
        this.result = 'above 2nd';
      } else if (this.form.bodyLength < this.form.month['10th']) {
        this.result = 'above 5th';
      } else if (this.form.bodyLength < this.form.month['25th']) {
        this.result = 'above 10th';
      } else if (this.form.bodyLength < this.form.month['50th']) {
        this.result = 'above 25th';
      } else if (this.form.bodyLength < this.form.month['75th']) {
        this.result = 'above 50th';
      } else if (this.form.bodyLength < this.form.month['90th']) {
        this.result = 'above 75th';
      } else if (this.form.bodyLength < this.form.month['95th']) {
        this.result = 'above 90th';
      } else if (this.form.bodyLength < this.form.month['98th(97.7th)']) {
        this.result = 'above 95th';
      } else {
        this.result = 'above 98th';
      }
    }
  };

  this.drawVisualization = function() {
    var data = new google.visualization.DataTable();
      data.addColumn('string', 'Month');
      data.addColumn('number', 'Average');
      data.addColumn('number', '2nd Percentile');
      data.addColumn('number', '98th Percentile');
      data.addRows($scope.length_for_age.dataTableForChart());

    var options = {
      title: 'Body length over age (cm)',
      chartArea: { left: 40, top: 40, width: '90%', height: '70%' },
      legend: 'bottom'
    };

    var chart = new google.visualization.LineChart($window.document.getElementById('length_for_age_chart'));
    chart.draw(data, options);
  };

  google.setOnLoadCallback(this.drawVisualization);

  return this;
});

var lengthForAge = [{
  "month": 0,
  "average": 49.8842,
  "2nd(2.3rd)": 46.09799,
  "5th": 46.77032,
  "10th": 47.45809,
  "25th": 48.60732,
  "50th": 49.8842,
  "75th": 51.16108,
  "90th": 52.31031,
  "95th": 52.99808,
  "98th(97.7th)": 53.67041
},
{
  "month": 1,
  "average": 54.7244,
  "2nd(2.3rd)": 50.83131,
  "5th": 51.52262,
  "10th": 52.2298,
  "25th": 53.41147,
  "50th": 54.7244,
  "75th": 56.03733,
  "90th": 57.219,
  "95th": 57.92618,
  "98th(97.7th)": 58.61749
},
{
  "month": 2,
  "average": 58.4249,
  "2nd(2.3rd)": 54.42396,
  "5th": 55.13442,
  "10th": 55.8612,
  "25th": 57.0756,
  "50th": 58.4249,
  "75th": 59.7742,
  "90th": 60.9886,
  "95th": 61.71538,
  "98th(97.7th)": 62.42584
},
{
  "month": 3,
  "average": 61.4292,
  "2nd(2.3rd)": 57.34047,
  "5th": 58.06652,
  "10th": 58.80924,
  "25th": 60.0503,
  "50th": 61.4292,
  "75th": 62.8081,
  "90th": 64.04916,
  "95th": 64.79188,
  "98th(97.7th)": 65.51793
},
{
  "month": 4,
  "average": 63.886,
  "2nd(2.3rd)": 59.72447,
  "5th": 60.46344,
  "10th": 61.21939,
  "25th": 62.48254,
  "50th": 63.886,
  "75th": 65.28946,
  "90th": 66.55261,
  "95th": 67.30856,
  "98th(97.7th)": 68.04753
},
{
  "month": 5,
  "average": 65.9026,
  "2nd(2.3rd)": 61.67956,
  "5th": 62.42946,
  "10th": 63.19658,
  "25th": 64.4784,
  "50th": 65.9026,
  "75th": 67.3268,
  "90th": 68.60862,
  "95th": 69.37574,
  "98th(97.7th)": 70.12564
},
{
  "month": 6,
  "average": 67.6236,
  "2nd(2.3rd)": 63.34303,
  "5th": 64.10314,
  "10th": 64.88071,
  "25th": 66.18,
  "50th": 67.6236,
  "75th": 69.0672,
  "90th": 70.36649,
  "95th": 71.14406,
  "98th(97.7th)": 71.90417
},
{
  "month": 7,
  "average": 69.1645,
  "2nd(2.3rd)": 64.82235,
  "5th": 65.5934,
  "10th": 66.38216,
  "25th": 67.70013,
  "50th": 69.1645,
  "75th": 70.62887,
  "90th": 71.94684,
  "95th": 72.7356,
  "98th(97.7th)": 73.50665
},
{
  "month": 8,
  "average": 70.5994,
  "2nd(2.3rd)": 66.18835,
  "5th": 66.97163,
  "10th": 67.77291,
  "25th": 69.1118,
  "50th": 70.5994,
  "75th": 72.087,
  "90th": 73.42589,
  "95th": 74.22717,
  "98th(97.7th)": 75.01045
},
{
  "month": 9,
  "average": 71.9687,
  "2nd(2.3rd)": 67.48217,
  "5th": 68.27886,
  "10th": 69.09384,
  "25th": 70.45564,
  "50th": 71.9687,
  "75th": 73.48176,
  "90th": 74.84356,
  "95th": 75.65854,
  "98th(97.7th)": 76.45523
},
{
  "month": 10,
  "average": 73.2812,
  "2nd(2.3rd)": 68.71138,
  "5th": 69.52286,
  "10th": 70.35297,
  "25th": 71.74005,
  "50th": 73.2812,
  "75th": 74.82235,
  "90th": 76.20943,
  "95th": 77.03954,
  "98th(97.7th)": 77.85102
},
{
  "month": 11,
  "average": 74.5388,
  "2nd(2.3rd)": 69.88013,
  "5th": 70.70738,
  "10th": 71.55363,
  "25th": 72.96769,
  "50th": 74.5388,
  "75th": 76.10991,
  "90th": 77.52397,
  "95th": 78.37022,
  "98th(97.7th)": 79.19748
},
{
  "month": 12,
  "average": 75.7488,
  "2nd(2.3rd)": 70.99632,
  "5th": 71.84023,
  "10th": 72.70353,
  "25th": 74.14605,
  "50th": 75.7488,
  "75th": 77.35155,
  "90th": 78.79407,
  "95th": 79.65737,
  "98th(97.7th)": 80.50128
},
{
  "month": 13,
  "average": 76.9186,
  "2nd(2.3rd)": 72.06657,
  "5th": 72.92816,
  "10th": 73.80954,
  "25th": 75.28228,
  "50th": 76.9186,
  "75th": 78.55492,
  "90th": 80.02766,
  "95th": 80.90904,
  "98th(97.7th)": 81.77063
},
{
  "month": 14,
  "average": 78.0497,
  "2nd(2.3rd)": 73.09511,
  "5th": 73.97491,
  "10th": 74.87492,
  "25th": 76.37879,
  "50th": 78.0497,
  "75th": 79.72061,
  "90th": 81.22448,
  "95th": 82.12449,
  "98th(97.7th)": 83.0043
},
{
  "month": 15,
  "average": 79.1458,
  "2nd(2.3rd)": 74.08522,
  "5th": 74.98384,
  "10th": 75.9031,
  "25th": 77.43914,
  "50th": 79.1458,
  "75th": 80.85246,
  "90th": 82.3885,
  "95th": 83.30776,
  "98th(97.7th)": 84.20638
},
{
  "month": 16,
  "average": 80.2113,
  "2nd(2.3rd)": 75.04248,
  "5th": 75.96033,
  "10th": 76.89925,
  "25th": 78.46814,
  "50th": 80.2113,
  "75th": 81.95446,
  "90th": 83.52335,
  "95th": 84.46227,
  "98th(97.7th)": 85.38012
},
{
  "month": 17,
  "average": 81.2487,
  "2nd(2.3rd)": 75.96753,
  "5th": 76.90533,
  "10th": 77.86466,
  "25th": 79.46765,
  "50th": 81.2487,
  "75th": 83.02975,
  "90th": 84.63274,
  "95th": 85.59207,
  "98th(97.7th)": 86.52987
},
{
  "month": 18,
  "average": 82.2587,
  "2nd(2.3rd)": 76.86417,
  "5th": 77.8221,
  "10th": 78.80202,
  "25th": 80.43942,
  "50th": 82.2587,
  "75th": 84.07798,
  "90th": 85.71538,
  "95th": 86.6953,
  "98th(97.7th)": 87.65323
},
{
  "month": 19,
  "average": 83.2418,
  "2nd(2.3rd)": 77.73119,
  "5th": 78.70973,
  "10th": 79.71074,
  "25th": 81.38338,
  "50th": 83.2418,
  "75th": 85.10022,
  "90th": 86.77286,
  "95th": 87.77387,
  "98th(97.7th)": 88.75241
},
{
  "month": 20,
  "average": 84.1996,
  "2nd(2.3rd)": 78.5717,
  "5th": 79.57106,
  "10th": 80.59338,
  "25th": 82.30162,
  "50th": 84.1996,
  "75th": 86.09758,
  "90th": 87.80582,
  "95th": 88.82814,
  "98th(97.7th)": 89.8275
},
{
  "month": 21,
  "average": 85.1348,
  "2nd(2.3rd)": 79.3865,
  "5th": 80.40724,
  "10th": 81.45143,
  "25th": 83.19621,
  "50th": 85.1348,
  "75th": 87.07339,
  "90th": 88.81817,
  "95th": 89.86236,
  "98th(97.7th)": 90.8831
},
{
  "month": 22,
  "average": 86.0477,
  "2nd(2.3rd)": 80.17925,
  "5th": 81.22133,
  "10th": 82.28734,
  "25th": 84.06859,
  "50th": 86.0477,
  "75th": 88.02681,
  "90th": 89.80806,
  "95th": 90.87407,
  "98th(97.7th)": 91.91615
},
{
  "month": 23,
  "average": 86.941,
  "2nd(2.3rd)": 80.95077,
  "5th": 82.01447,
  "10th": 83.1026,
  "25th": 84.92082,
  "50th": 86.941,
  "75th": 88.96118,
  "90th": 90.7794,
  "95th": 91.86753,
  "98th(97.7th)": 92.93123
},
{
  "month": 24,
  "average": 87.8161,
  "2nd(2.3rd)": 81.70586,
  "5th": 82.79087,
  "10th": 83.9008,
  "25th": 85.75545,
  "50th": 87.8161,
  "75th": 89.87675,
  "90th": 91.7314,
  "95th": 92.84133,
  "98th(97.7th)": 93.92634
}];