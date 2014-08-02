'use strict';

var app = angular.module('BlogApp', []);

google.load('visualization', '1', { packages: ['corechart'] });

app.controller('LengthForAgeCtrl', function($scope, $http, $window) {
  this.dataTable = [];

  this.form = {};

  this.result = '?';

  $http.get('../length_for_age.json')
     .then(function(res){
        $scope.length_for_age.dataTable = res.data;
      });

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