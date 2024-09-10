let radiation_aggregate_data;
let barChartSvg, donutChartSvg, mainSvg;
let height = 400;
let width = 1200;
let dates = ['2020-04-6', '2020-04-7', '2020-04-8', '2020-04-9', '2020-04-10'];
const margin = { top: 20, right: 20, bottom: 20, left: 20 };
let countArrayNames = ['Mobile', 'Static'];
let barWidth = width/2;
let barHeight = height;
let barData = {}; 
let bar1s, bar2s;
let pie, arc, color;
let donutChartLabel;
let tooltip;
let geojsonPaths;
let DonutLengend;

document.addEventListener("DOMContentLoaded", function () {
  mainSvg = d3.select('.canvas')
  .append('svg')
  .attr('height', height + 30)
  .attr('width', width);
  
  barChartSvg = mainSvg
  .append('g')
  .attr('class', 'bar-chart')
  .attr('transform', 'translate('+ margin.left+ ', 0)');
  
  donutChartSvg = mainSvg
  .append('g')
  .attr('class', 'pie-chart')
  .attr('transform', 'translate('+ (width*3/4) +  ','+ height/2+')');
  
  tooltip = d3.select(".container-fluid")
  .append("div")
  .style("opacity", 0)
  .style("color", "black")
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "1px")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style("position", "absolute")
  .style("text-align", "center");
  // Load the Dataset
  loadData().then(() => {
    console.log("Drawing both the charts");
    buildBarChart('start')
    buildDonutChart('start')    
  }); 
});

async function buildBarChart(selected_region){
  // Load the dataset and preprocess the information
  let filtered_data = getFilteredBarData(selected_region);
  
  // Create the scales of x and y axis
  // Create scales
  let xScale = d3.scaleBand()
  .domain(dates)
  .range([margin.left, barWidth - margin.right])
  .padding(0.2);
  
  let yScale = d3.scaleLinear()
  .domain([0, d3.max(filtered_data, d => Math.max(d.mobileAggr, d.staticAggr)) + 5])
  .range([barHeight - margin.bottom, margin.top]);
  
  
  bar1s = barChartSvg.selectAll(".bar1")
  .data(filtered_data)
  .enter()
  .append("rect")
  .attr("class", "bar1")
  .attr("x", d => xScale(d.Date) - 1)
  .attr("y", d => yScale(d.mobileAggr))
  .attr("width", xScale.bandwidth() / 2)
  .style('opacity', 0.7)
  .attr("height", d => barHeight - margin.bottom - yScale(d.mobileAggr))
  .attr("fill", "#B9314F")
  .on("mouseover", function(event, d) {
    console.log("Mouse event:", event);
    console.log("d: ",d);
    tooltip.html(`Mobile Aggregate <br>
    Radiation: ${d.mobileAggr.toFixed(2)}`)
    .style("opacity", 1);
  })
  .on("mousemove",  function(d,i) {
    tooltip
    .style("left",((d.layerX) + 20)+ "px")
    .style("top",((d.layerY) - 100) + "px")
  })
  .on("mouseout", function() {
    tooltip.style("opacity", 0);
  });
  
  // Create the second set of bars
  bar2s = barChartSvg.selectAll(".bar2")
  .data(filtered_data)
  .enter()
  .append("rect")
  .attr("class", "bar2")
  .attr("x", d => xScale(d.Date) + xScale.bandwidth() / 2 + 1)
  .attr("y", d => yScale(d.staticAggr))
  .attr("width", xScale.bandwidth() / 2)
  .style('opacity', 0.7)
  .attr("height", d => barHeight - margin.bottom - yScale(d.staticAggr))
  .attr("fill", "#008080")
  .on("mouseover", function(event, d) {
    console.log("Mouse event:", event);
    console.log("d: ",d);
    
    tooltip.html(`Static Aggregate <br>
    Radiation: ${d.staticAggr.toFixed(2)}`)
    .style("opacity", 1);
    
  })
  .on("mousemove",  function(d,i) {
    tooltip
    .style("left",((d.layerX) + 20)+ "px")
    .style("top",((d.layerY) - 100) + "px")
  })
  .on("mouseout", function() {
    tooltip.style("opacity", 0);
  });;
  
  // Build the X and Y Axis
  barChartSvg.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${barHeight - margin.bottom})`)
  .call(d3.axisBottom(xScale));
  
  
  barChartSvg.append("g")
  .attr("class", "y-axis")
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(yScale));
  
  barChartSvg.append("text")
  .attr("class", "x-axis-label")
  .attr("x", barWidth/2)
  .attr("y", barHeight - margin.bottom + 35)
  .text("Dates")
  .attr("text-anchor", "middle");
  
  barChartSvg.append("text")
  .attr("class", "y-axis-label")
  .attr("transform", "rotate(-90)")
  .attr("x", -barHeight / 2)
  .attr("y", margin.left - 25)
  .text(`Radiation of ${selected_region === 'start' ? "All Regions": selected_region}`)
  .attr("text-anchor", "middle");
  
  
  const legend = barChartSvg
  .append('g')
  .attr('class', 'legend')
  .attr('transform', `translate(${barWidth - margin.right - 10}, ${margin.top})`);
  
  // Add legend items
  const legendItems = legend.selectAll('.legend-item')
  .data(['Mobile Aggregate', 'Static Aggregate'])
  .enter()
  .append('g')
  .attr('class', 'legend-item')
  .attr('transform', (d, i) => `translate(0, ${i * 20})`);
  
  legendItems
  .append('rect')
  .attr('width', 18)
  .attr('height', 18)
  .style('opacity', 0.7)
  .attr('fill', (d, i) => (i === 0) ? '#B9314F' : '#008080'); // Color based on bar type
  
  legendItems
  .append('text')
  .attr('x', 24)
  .attr('y', 9)
  .attr('dy', '0.32em')
  .style('font-size', '14px')
  .text(d => d);
  
}

function updateChoice() {
  let region_selected = d3.select('#choice').property('value');
  updateBarChart(region_selected);
  updateDonutChart(region_selected);
}

function updateBarChart(selected_region) {
  console.log("Updating the Selected Region");
  let filtered_data = getFilteredBarData(selected_region);
  
  let yScale = d3.scaleLinear()
  .domain([0, Math.max(...filtered_data.map(data => data.mobileAggr, ...filtered_data.map(data => data.staticAggr))) + 5])
  .range([barHeight - margin.bottom, margin.top]);
  
  let xScale = d3.scaleBand()
  .domain(dates)
  .range([margin.left, barWidth - margin.right])
  .padding(0.2);
  
  // Update the y axis
  d3.select('.y-axis').transition().duration(1000).call(d3.axisLeft(yScale));
  
  d3.select('.y-axis-label').text(`Radiation of ${selected_region === 'start' ? "All Regions": selected_region}`);
  // Update the Bars
  bar1s
  .data(filtered_data);
  
  bar1s
  .enter()
  .merge(bar1s)
  .transition()
  .duration(1000)
  .attr("y", d => yScale(d.mobileAggr))
  .attr("height", d => barHeight - margin.bottom - yScale(d.mobileAggr));
  
  bar2s
  .data(filtered_data);
  
  bar2s
  .enter()
  .merge(bar2s)
  .transition()
  .duration(1000)
  .attr("y", d => yScale(d.staticAggr))
  .attr("height", d => barHeight - margin.bottom - yScale(d.staticAggr));
  
}

function buildDonutChart(select_region){
  // Data preprocessing and loading
  
  data = getFilteredDonutData(select_region);
  console.log("Pie Data: ", data);
  color = d3.scaleOrdinal(['#B9314F', '#008080']);
  
  pie = d3.pie();
  arc = d3.arc()
  .innerRadius(80)
  .outerRadius(150);
  
  donutChartSvg
  .selectAll('path')
  .data(pie(data))
  .enter()
  .append('path')
  .attr('d', arc)
  .attr("stroke", "black")
  .style("stroke-width", "1px")
  .attr('fill', (d, i) => color(i))
  .style('opacity', 0.7)
  .on("mouseover", function(event, d) {
    console.log("Mouse event:", event);
    d3.select(this).style("stroke-width", "4px");
    
    // console.log("d: ",d);
    tooltip.html(`Count of ${countArrayNames[d.index]} 
    Sensors: ${d.value}`)
    .style("opacity", 1);
  })
  .on("mousemove",  function(d,i) {
    tooltip
    .style("left",((d.layerX) + 20)+ "px")
    .style("top",((d.layerY) - 100) + "px")
  })
  .on("mouseout", function() {
    tooltip.style("opacity", 0);
    d3.select(this).style("stroke-width", "1px");
  });
  
  // Add a lengend to the center of the Donut
  DonutLengend = donutChartSvg
  .append('text')
  .attr('x', 0) // Set the x-coordinate
  .attr('y', 0)  // Set the y-coordinate
  .attr('fill', 'black')
  .attr('alignment-baseline', 'middle')
  .attr('text-anchor', 'middle')
  .attr('font-size', '20px')
  .text(select_region == 'start'? 'All Regions': select_region); // Set the text content
  
  updateDonutChart(select_region)
}

function updateDonutChart(select_region) {
  // New data
  data = getFilteredDonutData(select_region);
  
  DonutLengend.text(select_region == 'start' ? 'All Regions': select_region);
  // Update paths with new data and animate the transition
  donutChartSvg.selectAll('path')
  .data(pie(data))
  .transition()
  .duration(1000)
  .attrTween('d', function(d) {
    const interpolate = d3.interpolate(this._current, d);
    this._current = interpolate(0);
    return function(t) {
      return arc(interpolate(t));
    };
  })
  .attr('fill', (d, i) => color(i));
}


async function loadData(){
  
  await d3.json('./data/preprocessed_data_static_mobile.json').then((data) => {
    radiation_aggregate_data = data;
    // console.log(radiation_aggregate_data);
    
  }).catch(error => {
    console.error('Error loading JSON file:', error);
  });
  
  console.log("Data is Loaded");
}

function getFilteredBarData(select_region) {
  let filtered_data = [];
  if (select_region == 'start') {
    
    // Aggregate information based on all the data
    for (let date = 0; date < dates.length; date++) {
      filtered_data.push({
        Date: dates[date],
        mobileAggr: radiation_aggregate_data.reduce((acc, curr) =>  acc + curr.mobileRadiationAggregate[date] ,0)/radiation_aggregate_data.length,
        staticAggr: radiation_aggregate_data.reduce((acc, curr) =>  acc + curr.staticRadiationAggregate[date] ,0)/radiation_aggregate_data.length
      });
    }
  } 
  else {
    mobile_arr = radiation_aggregate_data.filter(curr => curr.region == select_region).map(curr => curr.mobileRadiationAggregate);
    static_arr = radiation_aggregate_data.filter(curr => curr.region == select_region).map(curr => curr.staticRadiationAggregate);
    for (let date = 0; date < dates.length; date++) {
      filtered_data.push({
        Date: dates[date],
        mobileAggr: mobile_arr[0][date],
        staticAggr: static_arr[0][date] 
      });
    }
  }
  
  console.log("Filtered Data is: ", filtered_data);
  return filtered_data;
}

function getFilteredDonutData(select_region) {
  if (select_region == 'start') {
    return [50, 9]
  } 
  else
  { 
    return radiation_aggregate_data.filter(curr => curr.region == select_region).map(curr => [curr.mobileSensorCount, curr.staticSensorCount])[0];
    
  }
}
