var options = {
  chart: {
    height: 380,
    width: "100%",
    type: "line"
  },
  xaxis: {
  },
  series: [
    {
      name: 'null in middle',
      data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
    }, {
      name: 'null in the end',
      data: [10, 15, null, 12, null, 10, 12, 15, 11, 13, 12, null, 14, null, null, null]
    }, {
      name: 'null in the beginning',
      data: [null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    }, {
      name: 'many of null',
      data: [1, 4, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    }
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
