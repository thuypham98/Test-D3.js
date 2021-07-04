const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
// const dataset = [1, 2, 3, 4];

const svgWidth = 500, svgHeight = 300, barPadding = 5;
const barWidth = (svgWidth / dataset.length);

const svg = d3.select('.main')
  .select('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .style('background-color', '#ecf0f1');

// const yScale = d3.scaleLinear()
//   .domain([0, d3.max(dataset)])
//   .range([0, svgHeight]);

const barChart = svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('y', function(d) {
    return svgHeight - d;
    // return svgHeight - yScale(d);
  })
  .attr('height', function(d) {
    return d;
    // return yScale(d);
  })
  .attr('width', barWidth - barPadding)
  .attr('transform', function(d, i) {
    var translate = [barWidth * i, 0];
    return `translate(${translate})`;
  })
  .style('fill', '#2c3e50');

const text = svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text(d => d)
  .attr('x', (d, i) => {
    return barWidth * i + 10;
  })
  .attr('y', (d) => {
    return svgHeight - d - 5;
  })
  .style('fill', '#2980b9');



  // -------------------------- group-bar-chart ------------------------------

const gData = [
  [40, 50],
  [30, 20],
  [10, 90],
];
const group = d3.select('#group-bar-chart')
  .selectAll('div')
  .data(gData)
  .enter()
  .append('div')
  .style('margin-bottom', '15px');

group.selectAll('div')
  .data(function(d) {
    return d;
  })
  .enter()
  .append('div')
  .style('width', function(d) {
    return '0%';
  })
  .transition()
  .duration(1000)
  .style('width', function(d) {
    return d + '%';
  })
  .style('background', function(d, i) {
    return i == 0 ? 'orange' : '#c9c9c9';
  })
  .style('text-align', 'right')
  .style('margin-bottom', '2px')
  .text(function(d) {
    return d + '%';
  });