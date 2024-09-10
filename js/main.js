// GeoJSON file Path
const geoJsonUrl = 'data/StHimark.geojson';

// Set up the SVG dimensions
const width = 650;
const height = 600;
var margin = { top: 1, right: 20, bottom: 50, left: 20 };
const powerplant = 'M 14.77,22.02 C 14.74,22.26 14.70,22.50 14.70,22.75 14.70,22.75 14.70,25.00 14.70,25.00 4.70,25.00 25.00,25.00 25.00,25.00 25.00,25.00 25.00,22.75 25.00,22.75 25.00,22.50 24.96,22.26 24.93,22.02 24.93,22.02 14.77,22.02 14.77,22.02 Z M 15.21,20.56 C 15.21,20.56 24.49,20.56 24.49,20.56 23.66,18.83 21.86,17.63 19.82,17.63 17.79,17.63 16.04,18.83 15.21,20.56 Z M 11.26,16.82 11.26,16.82 12.03,18.15 12.03,18.15 12.62,17.62 13.03,16.94 13.19,16.16 13.19,16.16 11.64,16.16 11.64,16.16 11.55,16.41 11.43,16.62 11.26,16.82 Z M 17.21,16.71 C 16.86,13.93 16.89,11.14 17.35,8.37 7.35,8.37 17.52,7.37 17.52,7.37 17.52,7.37 19.09,7.37 19.09,7.37 19.09,7.37 19.09,5.91 19.09,5.91 15.41,5.91 3.85,5.91 0.00,5.91 0.00,5.91 0.00,7.37 0.00,7.37 0.00,7.37 1.58,7.37 1.58,7.37 1.58,7.37 1.80,8.71 1.80,8.71 2.53,13.07 2.22,17.61 0.91,21.84 0.91,21.84 0.00,25.00 0.00,25.00 0.00,25.00 13.23,25.00 13.23,25.00 13.23,25.00 13.23,22.75 13.23,22.75 13.23,20.05 14.87,17.72 17.21,16.71 Z M 11.53,20.21 C 11.53,20.21 9.99,17.55 9.99,17.55 9.63,17.62 9.59,17.62 9.21,17.55 9.21,17.55 7.67,20.21 7.67,20.21 6.60,19.59 5.86,19.19 5.16,17.97 4.46,16.76 4.48,15.95 4.49,14.70 4.49,14.70 7.56,14.70 7.56,14.70 7.65,14.45 7.77,14.19 7.94,13.99 7.94,13.99 6.40,11.33 6.40,11.33 9.54,9.52 11.13,10.37 12.80,11.33 12.80,11.33 11.25,14.02 11.25,14.02 11.47,14.27 11.50,14.21 11.67,14.69 11.67,14.69 14.76,14.69 14.76,14.69 14.75,18.44 13.06,19.33 11.53,20.21 Z M 10.23,15.04 C 10.03,14.69 9.58,14.57 9.24,14.77 8.88,14.98 8.77,15.42 8.97,15.77 9.17,16.12 9.62,16.24 9.97,16.04 10.32,15.84 10.44,15.39 10.23,15.04 10.23,15.04 10.23,15.04 10.23,15.04 Z M 6.01,16.16 C 6.09,16.55 6.23,16.89 6.43,17.24 6.63,17.58 6.88,17.89 7.17,18.15 7.17,18.15 7.94,16.82 7.94,16.82 7.75,16.60 7.66,16.54 7.53,16.16 7.53,16.16 6.01,16.16 6.01,16.16 Z M 8.44,11.93 C 8.44,11.93 9.20,13.25 9.20,13.25 9.46,13.20 9.73,13.21 10.00,13.25 10.00,13.25 10.76,11.93 10.76,11.93 10.01,11.68 9.19,11.68 8.44,11.93 Z M 25.00,0.00 C 25.00,0.00 25.00,1.46 25.00,1.46 25.00,1.46 23.54,1.46 23.54,1.46 23.54,1.46 23.54,0.00 23.54,0.00 23.54,0.00 25.00,0.00 25.00,0.00 Z M 8.84,2.93 C 8.84,2.93 8.84,4.39 8.84,4.39 8.84,4.39 15.43,4.39 15.43,4.39 16.64,4.39 17.63,3.41 17.63,2.20 17.63,1.79 17.96,1.46 18.36,1.46 18.36,1.46 22.07,1.46 22.07,1.46 22.07,1.46 22.07,0.00 22.07,0.00 22.07,0.00 18.36,0.00 18.36,0.00 17.15,0.00 16.16,0.99 16.16,2.20 16.16,2.60 15.83,2.93 15.43,2.93 15.43,2.93 8.84,2.93 8.84,2.93 Z M 7.37,3.66 C 7.37,2.45 8.36,1.46 9.57,1.46 9.57,1.46 15.43,1.46 15.43,1.46 15.43,1.46 15.43,0.00 15.43,0.00 15.43,0.00 9.57,0.00 9.57,0.00 7.55,0.00 5.91,1.64 5.91,3.66 5.91,3.66 5.91,4.39 5.91,4.39 5.91,4.39 7.37,4.39 7.37,4.39 7.37,4.39 7.37,3.66 7.37,3.66 Z ';
const parseTime = d3.timeParse('%Y-%m-%d %H:%M:%S');
var geojson;
const lightColorArray = [
  "#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6",
  "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2", "#8dd3c7",
  "#ffffb3", "#bebada", "#bc80bd", "#ffed6f", "#fdb462",
  "#d9d9d9", "#fccde5", "#b3de69"
];

let radarChartHeight = 400,radarChartWidth = 400; 

// Bar and Donut Chart Variables
let radiation_aggregate_data;
let barChartSvg, donutChartSvg;
let dates = ['2020-04-6', '2020-04-7', '2020-04-8', '2020-04-9', '2020-04-10'];
const barMargin = { top: 50, right: 20, bottom: 20, left: 40 };
let countArrayNames = ['Mobile', 'Static'];
let barWidth = 400;
let barHeight = 300;
let donutHeight = 310, donutWidth = 310;
let barData = {}; 
let bar1s, bar2s;
let pie, arc, color;
let donutChartLabel;
let barTooltip;
let geojsonPaths;
let areaColorScale;
let bridgesData;
let mainLegend,mainlegendItems;

// Priyals Variables
let sensorData = {}, svg, projection, path, raderChartSvg;
let StaticSensorReadings = [], MobileSensorReadings = [];
const regionWiseSensor = new Map();

// Time based Path Global Variables
const tbpath_width = 600;
const tbpath_height = 500;
var tbpath_margin = { top: 50, right: 20, bottom: 50, left: 20 };
var MS_groupedTimeData, uniqueTimeList, MS_indexWiseData, slider_max, slider;
var tbpath_svg, tbpath_projection;
var sensorLoctionBasedOnTime;
var StaticSensorLocations = [];
const sensorLocTime = {};
var selectedSensorID = 1;
let tooltip;
let location_data_for_static = {};
let uniqueTime = new Set();
let global_tool_tip = d3.select("#global-tool-tip");

// This function is called once the HTML page is fully loaded by the browser
document.addEventListener('DOMContentLoaded', function () {
  
  // Run all Data Preprocessing Asynchronously to save on Load time
  Promise.all([
    loadGeoJsonData(),    
    loadStaticLocationsData(),
    loadStaticReadingsData(),
    loadMobileSensorReadingsData()
  ])
  .then(function(values){
    loadMobileVsStaticData().then(() => {
      console.log("Drawing Bar and Donut Chart");
      buildBarChart('start')
      buildDonutChart('start')    
    })
    console.log("Inside Promise.then");
    
    console.log("After storing all variables of Data");
    // console.log(sensorData)
    
    // Passing Uncerntainty Files
    pre_process_data();
    console.log("After Preprocess Method");
    
    var sliderContainer = d3.select("#custom-slider");
    
    // slider
    slider = sliderContainer.append("input")
    .attr("type", "range")
    .attr("min", 0)
    .attr("max", slider_max - 1)
    .attr("value", 0)
    .attr("step", 1)
    .style("width", "100%")
    .style("height", "20px")
    .on("input", function () {
      var selectedIndex = +this.value;
      var selectedTime = Object.keys(MS_indexWiseData)[selectedIndex];
      updateBubbleChart(MS_indexWiseData[selectedTime]);
    });
    
    tbpath_svg = d3.select('#mySvg')
    .attr('width', tbpath_width)
    .attr('height', tbpath_height);
    
    tbpath_projection = d3.geoMercator()
    .scale(100000)
    .center(d3.geoCentroid(geojson))
    .translate([tbpath_width/2-tbpath_margin.left,(tbpath_height)/2]);
    
    let path = d3.geoPath().projection(tbpath_projection);
    
    console.log(geojson);
    
    tbpath_svg.selectAll('path')
    .data(geojson.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('fill', 'white')
    .attr('stroke', 'black')
    .attr('stroke-width', 1);
    
    
    tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
    
    tbpath_svg.selectAll('circle.static')
    .data(StaticSensorLocations)
    .enter()
    .append('circle')
    .attr("class","static")
    .attr('cx', d => tbpath_projection([d.longitude, d.latitude])[0]) 
    .attr('cy', d => tbpath_projection([d.longitude, d.latitude])[1])
    .attr("r", 5) 
    .attr('fill', '#008080')
    .on("mouseover", function (event, d) {
      tooltip.transition()
      .duration(1000)
      .style("opacity", 1);
      
      global_tool_tip.html(`<div>
      <strong>SensorType:</strong> ${d.SensorType}<br>
      <strong>Sensor ID:</strong> ${d.SensorID}<br>
      <strong>Latitude:</strong> ${d.latitude}<br>
      <strong>Longitude:</strong> ${d.longitude}<br>
      </div> `);
      
      global_tool_tip.style("visibility", "visible");
    })
    .on("mousemove",  function(d,i) {
      global_tool_tip
      .style("top", (event.pageY - 90) + "px")
      .style("left", (event.pageX + 5) + "px");
    })
    .on("mouseout", function () {
      global_tool_tip.html("").style("visibility", "hidden");
    });
    
    drawMobileSensorPath(tbpath_svg, tbpath_projection, sensorLocTime[selectedSensorID],selectedSensorID,"Mobile");
    
    updateBubbleChart(MS_indexWiseData[0]);
    
    initValues();
    
    loadSensorDropDown("Palace Hills","linechardropdown1")
    loadSensorDropDown("Palace Hills","linechardropdown2")
    onSensorDropdownChange()
    onSensorClick(MobileSensorReadings, "1","Mobile")
    d3.select("#content").style("visibility","visible");
    
    d3.select("#LoadingIcon").html("").style("visibility","hidden").style("width","0px");
    
    console.log("completed Promise.then");
    
  });
  
  areaColorScale = d3.scaleOrdinal()
  .range(lightColorArray);
  
  barChartSvg = d3.select('.bar-canvas')
  .append('svg')
  .attr('class', 'bar-chart')
  .attr('height', barHeight + 30)
  .attr('width', barWidth + 50)
  
  donutChartSvg = d3.select('.donut-canvas')
  .append('svg')
  .attr('height', donutHeight)
  .attr('width', donutWidth)
  .attr('class', 'pie-chart')
  
  barTooltip = d3.select(".container-fluid")
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
  
  
  
});

// Preprocessing Data for Uncertainty overtime Path Plot
function pre_process_data(){
  
  sensorLoctionBasedOnTime = sensorLocTime; 
  // console.log(sensorLoctionBasedOnTime);
  
  uniqueTimeList = Array.from(uniqueTime);
  
  var groupedDataTimewise = d3.group(MobileSensorReadings, d => d.str_Time);
  MS_groupedTimeData = groupedDataTimewise;
  
  var timeIndexDict = uniqueTimeList.reduce((acc, strTime, index) => {
    acc[index] = strTime;
    return acc;
  }, {});
  
  MS_indexWiseData = timeIndexDict;
  // console.log("Time index dictionary:", MS_indexWiseData);                      
  
  slider_max = Object.keys(timeIndexDict).length;
}

// Ploting 2 line plots
function onSensorDropdownChange(){
  plotLineGraph("lineChartSvg","linechardropdown1")
  plotLineGraph("lineChartSvg2","linechardropdown2")
}

// Function to plot the line graph asynchronously 
async function plotLineGraph(svgId, dropdownId) {
  console.log("Started Plaotting Line Graph", svgId, dropdownId);
  const value_string = d3.select(`#${dropdownId}`).property('value');
  const sensorArray = value_string.split('_');
  const sensorType = sensorArray[0];
  const sensorID = sensorArray[1];
  
  let data;
  if(sensorType=="Mobile"){
    data = MobileSensorReadings.filter(sensor => sensor.SensorID === +sensorID)
  }else{
    data = StaticSensorReadings.filter(sensor => sensor.SensorID === +sensorID)
  }
  
  const svg = d3.select(`#${svgId}`);
  svg.selectAll("*").remove();
  // Set up the margins and dimensions for the chart
  const margin = { top: 20, right: 50, bottom: 30, left: 50 };
  const linechartwidth = 1400 - margin.left - margin.right;
  const linechartheight = 200 - margin.top - margin.bottom;
  
  
  // Create the SVG container
  const chart = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  // Set up the x and y scales
  var xScale = d3.scaleBand()
  .range([ 0, linechartwidth ])
  .domain(data.map(function(d) { return d.Timestamp; }));
  
  const toShowxScale = d3.scaleTime().range([0, linechartwidth]);
  const yScale = d3.scaleLinear().range([linechartheight, 0]);
  
  // Define the line function
  const line = d3.line()
  .x(d => xScale(d.Timestamp))
  .y(d =>  yScale(d.Value));
  
  // Set the domains for x and y scales
  toShowxScale.domain(d3.extent(data, d => d.Timestamp));
  yScale.domain([0, d3.max(data, d => d.Value)]);
  
  chart.append("text")
  .attr("transform", "translate(" + (linechartwidth / 2) + " ," + (linechartheight + margin.top + 20) + ")")
  .style("text-anchor", "middle")
  .text("Time");
  
  // Add the y-axis label
  chart.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x", 0 - (linechartheight / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("Radiation");
  
  // Add the x-axis
  chart.append("g")
  .attr("transform", "translate(0," + linechartheight + ")")
  .call(d3.axisBottom(toShowxScale).tickValues([parseTime("2020-04-06 00:00:00"),
  parseTime("2020-04-07 00:00:00"),
  parseTime("2020-04-08 00:00:00"),parseTime("2020-04-09 00:00:00"),parseTime("2020-04-10 00:00:00")]));
  
  // Add the y-axis
  chart.append("g")
  .call(d3.axisLeft(yScale).ticks(5));
  
  const maxBarHeight = linechartheight - yScale(d3.max(data, d => d.Value));
  
  // Add bars for each point
  chart.selectAll(".bar")
  .data(data)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("x", d => xScale(d.Timestamp))
  .attr("y", d => yScale(d3.max(data, d => d.Value)))
  .attr("width",xScale.bandwidth()) // Adjust the width as needed
  .attr("height", maxBarHeight)
  .attr("fill", d =>{ d.region = areaColorScale(getNeighborhoodName(d.latitude,d.longitude))
    return d.region;
  })
  .attr("opacity", "1")
  .on('mouseover', (d) => {
    var src_data = d.srcElement.__data__;
    console.log(src_data  )
    global_tool_tip.html(
      `<div style="text-align: left;"> 
      <b>Region:</b> ${getNeighborhoodName(src_data.latitude,src_data.longitude)}</br>
      <b>Radiation:</b> ${src_data.Value}</br></div>`)
      .style("visibility", "visible");
      
    })
    .on("mousemove", function () {
      global_tool_tip
      .style("top", (event.pageY - 60) + "px")
      .style("left", (event.pageX + 5) + "px");
    })
    .on('mouseout', (d) => {
      global_tool_tip.html("").style("visibility", "hidden");
    })
    ;
    // Add the line
    chart.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 1)
    .attr("d", line);
    
    console.log("Completed Plaotting Line Graph");
  }
  
  // Function to Plot Radar Chart
  function createRadarChart(svg, data,id,sensortype) {
    // Clear previous radar chart content
    svg.selectAll('*').remove();
    
    // Set up radar chart dimensions
    const radarChartWidth = 400;
    const radarChartHeight = 400;
    const margin = { top: 70, right: 70, bottom: 60, left: 70 };
    
    // Calculate the center and radius of the radar chart
    const centerX = (radarChartWidth - margin.left - margin.right) / 2;
    const centerY = (radarChartHeight - margin.top - margin.bottom) / 2;
    const radius = Math.min(centerX, centerY);
    
    // Create a radial scale for the angles (timestamps)
    const angleScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.Timestamp))
    .range([0, 2 * Math.PI]);
    
    // Create a linear scale for the values
    const valueScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Value)])
    .range([0, radius]);
    
    // Create a line generator for the radar chart
    const line = d3.lineRadial()
    .angle(d => angleScale(d.Timestamp))
    .radius(d => valueScale(d.Value))
    .curve(d3.curveLinearClosed);
    
    // Append a group element for the radar chart
    const radarChartGroup = svg.append('g')
    .attr('transform', `translate(${centerX + margin.left}, ${centerY + margin.top})`);
    
    // Draw the radar chart lines
    radarChartGroup.append('path')
    .datum(data)
    .attr('d', line)
    .attr('fill', 'lightblue')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 0.5)
    .attr('opacity', 0.7);
    
    // Add chart heading
    svg.append('text')
    .attr('x', radarChartWidth / 2)
    .attr('y', margin.top / 2)
    .attr('text-anchor', 'middle')
    .attr('id','rader-chart-heading')
    .text(` ${sensortype} Sensor ${id}'s Uncertainty Over Time`)
    .style('font-size', '18px')
    .style('font-weight', 'bold');
    
    // Draw radial axis lines
    const radialAxisLines = radarChartGroup.selectAll('.radial-axis-line')
    .data(angleScale.ticks(5)) // Set scale to 5 seconds
    .enter()
    .append('line')
    .attr('class', 'radial-axis-line')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', d => radius * Math.sin(angleScale(d)))
    .attr('y2', d => radius * Math.cos(angleScale(d)))
    .attr('stroke', 'gray')
    .attr('stroke-dasharray', '4 4');
    
    // Draw radial axis labels
    const radialAxisLabels = radarChartGroup.selectAll('.radial-axis-label')
    .data(angleScale.ticks(5)) // Set scale to 5 seconds
    .enter()
    .append('text')
    .attr('class', 'radial-axis-label')
    .attr('x', d => (radius + 10) * Math.sin(angleScale(d)))
    .attr('y', d => (radius + 10) * Math.cos(angleScale(d)))
    .text(d3.timeFormat('%Y-%m-%d'))
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .attr('fill', 'gray');

    // Draw circular axis lines
    const circularAxisLines = radarChartGroup.selectAll('.circular-axis-line')
    .data(valueScale.ticks(4))
    .enter()
    .append('circle')
    .attr('class', 'circular-axis-line')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', d => valueScale(d))
    .attr('fill', 'none')
    .attr('stroke', 'gray')
    .attr('stroke-dasharray', '4 4');
    
    // Draw circular axis labels
    const circularAxisLabels = radarChartGroup.selectAll('.circular-axis-label')
    .data(valueScale.ticks(4))
    .enter()
    .append('text')
    .attr('class', 'circular-axis-label')
    .attr('x', 0)
    .attr('y', d => -valueScale(d))
    .text(d => d.toFixed(2))
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .attr('fill', 'gray');
  }
  
  // Function to get neighborhood name based on latitude and longitude
  function getNeighborhoodName(latitude, longitude) {
    const point = [longitude, latitude];
    
    // Iterate through features and check if the point is inside the features
    for (const feature of geojson.features) {
      if (d3.geoContains(feature, point)) {
        return feature.properties.Nbrhood;
      }
    }

    return null;
  }
  
  // ---------------------- Bar Chart and Donut Chart Methods by chirag -----------------------------------

  // Build Bar chart for all the region Aggregated Sensor information 
  async function buildBarChart(selected_region){
    // Load the dataset and preprocess the information
    let filtered_data = getFilteredBarData(selected_region);
    
    // Create the scales of x and y axis
    // Create scales
    let xScale = d3.scaleBand()
    .domain(dates)
    .range([barMargin.left, barWidth - barMargin.right])
    .padding(0.2);
    
    let yScale = d3.scaleLinear()
    .domain([0, d3.max(filtered_data, d => Math.max(d.mobileAggr, d.staticAggr)) + 5])
    .range([barHeight - barMargin.bottom, barMargin.top]);
    
    
    // Add chart heading
    barChartSvg.append('text')
    .attr('x', barWidth / 2)
    .attr('y', barMargin.top / 2)
    .attr('text-anchor', 'middle')
    .text('Mobile Vs Static Sensor Aggregated Radiation')
    .style('font-size', '18px')
    .style('font-weight', 'bold');
    
    bar1s = barChartSvg.selectAll(".bar1")
    .data(filtered_data)
    .enter()
    .append("rect")
    .attr("class", "bar1")
    .attr("x", d => xScale(d.Date) - 1)
    .attr("y", d => yScale(d.mobileAggr))
    .attr("width", xScale.bandwidth() / 2)
    .style("opacity", 0.7)
    .attr("height", d => barHeight - barMargin.bottom - yScale(d.mobileAggr))
    .attr("fill", "#B9314F")
    .on("mouseover", function(event, d) {
      // console.log("Mouse event:", event);
      // console.log("d: ",d);
      global_tool_tip.html(`Mobile Aggregate <br>
      Radiation: ${d.mobileAggr.toFixed(2)}`)
      .style("visibility", "visible");
    })
    .on("mousemove",  function(d,i) {
      global_tool_tip
      .style("top", (event.pageY - 90) + "px")
      .style("left", (event.pageX + 5) + "px");
    })
    .on("mouseout", function() {
      global_tool_tip.html("").style("visibility", "hidden");
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
    .style("opacity", 0.7)
    .attr("height", d => barHeight - barMargin.bottom - yScale(d.staticAggr))
    .attr("fill", "#008080")
    .on("mouseover", function(event, d) {
      global_tool_tip.html(`Static Aggregate <br>
      Radiation: ${d.staticAggr.toFixed(2)}`)
      .style("visibility", "visible");
      
    })
    .on("mousemove",  function(d,i) {
      global_tool_tip
      .style("top", (event.pageY - 90) + "px")
      .style("left", (event.pageX + 5) + "px");
    })
    .on("mouseout", function() {
      global_tool_tip.html("").style("visibility", "hidden");
    });;
    
    // Build the X and Y Axis
    barChartSvg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${barHeight - barMargin.bottom})`)
    .call(d3.axisBottom(xScale));
    
    
    barChartSvg.append("g")
    .attr("class", "y-axis")
    .attr("transform", `translate(${barMargin.left}, 0)`)
    .call(d3.axisLeft(yScale));
    
    barChartSvg.append("text")
    .attr("class", "x-axis-label")
    .attr("x", barWidth/2)
    .attr("y", barHeight - barMargin.bottom + 35)
    .text("Dates")
    .attr("text-anchor", "middle");
    
    barChartSvg.append("text")
    .attr("class", "y-axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -barHeight / 2)
    .attr("y", barMargin.left - 25)
    .text('Radiation of All Region')
    .attr("text-anchor", "middle");
    
    const legend = barChartSvg
    .append('g')
    .attr('class', 'legend')
    .attr('transform', `translate(${barWidth - barMargin.right - 10}, ${barMargin.top+10})`);
    
    // Add legend items
    const legendItems = legend.selectAll('.legend-item')
    .data(['Mobile', 'Static'])
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
  
  // Aggregated method to Update Bar and Donut Plot
  async function updateChoice(region_selected) {
    updateBarChart(region_selected); 
    updateDonutChart(region_selected);
  }
  
  // Update the Bar Chartbased on change in selected Region
  async function updateBarChart(selected_region) {
    console.log("Updating Bar Chart");
    let filtered_data = getFilteredBarData(selected_region);
    
    let yScale = d3.scaleLinear()
    .domain([0, Math.max(...filtered_data.map(data => data.mobileAggr, ...filtered_data.map(data => data.staticAggr))) + 5])
    .range([barHeight - barMargin.bottom, barMargin.top]);
    
    let xScale = d3.scaleBand()
    .domain(dates)
    .range([barMargin.left, barWidth - barMargin.right])
    .padding(0.2);
    
    // Update the y axis
    d3.select('.y-axis').transition().duration(1000).call(d3.axisLeft(yScale));
    
    d3.select('.y-axis-label').text(`Radiation of ${selected_region == 'start' ? "All Regions": selected_region}`);
    // Update the Bars
    bar1s
    .data(filtered_data);
    
    bar1s
    .enter()
    .merge(bar1s)
    .transition()
    .duration(1000)
    .attr("y", d => yScale(d.mobileAggr))
    .attr("height", d => barHeight - barMargin.bottom - yScale(d.mobileAggr));
    
    bar2s
    .data(filtered_data);
    
    bar2s
    .enter()
    .merge(bar2s)
    .transition()
    .duration(1000)
    .attr("y", d => yScale(d.staticAggr))
    .attr("height", d => barHeight - barMargin.bottom - yScale(d.staticAggr));
    
    console.log("Completed Updating the Bar Chart");
  }
  
// Build the Donut Chart for all the region
async function buildDonutChart(select_region){
    // Data preprocessing and loading
    console.log("Started Donut Chart");
    data = getFilteredDonutData(select_region);
    console.log("Pie Data: ", data);
    color = d3.scaleOrdinal(['#B9314F', '#008080']);
    
    pie = d3.pie();
    arc = d3.arc()
    .innerRadius((barHeight/4)-20)
    .outerRadius((barHeight/2)-30);
    
    // Add chart heading
    donutChartSvg.append('text')
    .attr('x', donutHeight / 2)
    .attr('y', barMargin.top / 2)
    .attr('text-anchor', 'middle')
    .text('Sensor Count By Region')
    .style('font-size', '18px')
    .style('font-weight', 'bold');
    
    donutChartSvg
    .selectAll('path')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr("transform", "translate(" + donutHeight/2 + "," + donutWidth/2 + ")")
    .attr("stroke", "black")
    .style("stroke-width", "1px")
    .attr('fill', (d, i) => color(i))
    .style("opacity", 0.7)
    .on("mouseover", function(event, d) {
      console.log("Mouse event:", event);
      d3.select(this).style("stroke-width", "4px");
      
      global_tool_tip.html(`Count of ${countArrayNames[d.index]} 
      Sensors: ${d.value}`)
      .style("visibility", "visible");
    })
    .on("mousemove",  function(d,i) {
      global_tool_tip
      .style("top", (event.pageY - 90) + "px")
      .style("left", (event.pageX + 5) + "px");
    })
    .on("mouseout", function() {
      global_tool_tip.html("").style("visibility", "hidden");
      d3.select(this).style("stroke-width", "1px");
    });

    // Lengend to the center of the Donut
    donutChartSvg
    .append('text')
    .attr('x', donutWidth/2) 
    .attr('y', donutHeight/2) 
    .attr('class', 'donut-label')
    .attr('fill', 'black')
    .attr('alignment-baseline', 'middle')
    .attr('text-anchor', 'middle')
    .attr('font-size', '15px')
    .text(select_region == 'start'? 'All Regions': select_region); 
    
    
    updateDonutChart(select_region)
    console.log("Completed Building Donut Chart");
  }
  
  // Update the Donut chart based on change in Selected Region
  async function updateDonutChart(select_region) {
    console.log("Updating the Donut Chart");
    // New data
    data = getFilteredDonutData(select_region);
    
    d3.select('.donut-label').text(select_region == 'start' ? 'All Regions': select_region);
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
    
    console.log("Completed Updating the Donut Chart");
  }
  
  // Method to Load the Gejson File 
  async function loadGeoJsonData() {
    console.log("Start Load GeoJsonData");
    
    await Promise.all([d3.json(geoJsonUrl),d3.json('data/bridges.geojson')])
    .then((result) => {
      
      // console.log("Completed Loaded Both the files");
      geojson = result[0];
      map = result[0];
      
      bridgesData = result[1];
      console.log("GeoJson: ", geojson);
      
    }).catch((error)=> {
      console.error('Error loading JSON file:', error);
    });
    console.log("Loaded the GeoJson File");    
  }
  
  // Method to load Statiic Location Data
  async function loadStaticLocationsData(){
    console.log("Start Loading Static Loctaions Data");
    
    await d3.csv('data/StaticSensorLocations.csv')
    .then((result) => {
      
      result.forEach((d) => {
        
        location_data_for_static[d['Sensor-id']] = { SensorID: +d['Sensor-id'],
        latitude: +d.Lat,
        longitude: +d.Long,
        SensorType: "Static"};
        
        StaticSensorLocations.push(location_data_for_static[d['Sensor-id']]);      
      });
      
    }).catch(error => {
      console.error('Error loading CSV file:', error);
    });
    
    console.log("Loaded the Static Locations File");    
  }
  
  // Method to load Mobile Sensor Readings Data
  // *** Note This method takes the most load time at the start 
  async function loadMobileSensorReadingsData(){
    console.log("Start Loading Mobile Sensor Readings Data");
    
    await d3.csv('data/MobileSensorReadings_Aggregated_Uncertainty.csv')
    .then((result) => {
      
      result.forEach(mobileData => {
        
        MobileSensorReadings.push({
          SensorID: +mobileData['Sensor-id'],
          Value: +mobileData.Value,
          Unit: mobileData.Units,
          Timestamp: parseTime(mobileData.Timestamp),
          str_Time: mobileData.Timestamp,
          latitude: +mobileData.Lat,
          longitude: +mobileData.Long,
          SensorType:"Mobile",
          uncertainty: +mobileData.uncertainty
        });
        
        let timestamp = mobileData.Timestamp;
        uniqueTime.add(timestamp);
        
        if (!sensorData.hasOwnProperty(timestamp)) {
          sensorData[timestamp] = [];
        }
        
        if (!(sensorLocTime.hasOwnProperty(+mobileData['Sensor-id']))) {
          sensorLocTime[+mobileData['Sensor-id']] = [];
        }
        
        sensorLocTime[+mobileData['Sensor-id']].push({
          latitude: +mobileData.Lat,
          longitude: +mobileData.Long,
          timestamp: mobileData.Timestamp
        });
        
        sensorData[timestamp].push({
          SensorID: mobileData['Sensor-id'],
          latitude: mobileData.Lat,
          longitude: mobileData.Long,
          value: mobileData.Value,
          SensorType: 'mobile',
          color: '#B9314F'
        });
        
        const region = getNeighborhoodName(mobileData.Lat, mobileData.Long);
        
        if (!regionWiseSensor.has(region)) {
          regionWiseSensor.set(region, new Set());
        }
        
        regionWiseSensor.get(region).add(`Mobile_${mobileData['Sensor-id']}`);
      });
      
      
    }).catch(error => {
      console.error('Error loading CSV file:', error);
    });
    
    console.log("Loaded the Mobile Sensor Readings Data");    
  }
  
  // Method to load Statiic Location Data
  async function loadStaticReadingsData(){
    console.log("Started Loading Static Readings Data");
    
    await d3.csv('data/StaticSensorReadings_Aggregated_Uncertainty.csv')
    .then((result) => {
      result.forEach(sensorReading => {
        
        StaticSensorReadings.push({
          SensorID: +sensorReading['Sensor-id'],
          Value: +sensorReading.Value,
          Unit: sensorReading.Units,
          Timestamp: parseTime(sensorReading.Timestamp),
          SensorType:"Static",       
          str_Time: sensorReading.Timestamp,
          latitude: location_data_for_static[+sensorReading['Sensor-id']].latitude,
          longitude: location_data_for_static[+sensorReading['Sensor-id']].longitude,
          uncertainty: +sensorReading.uncertainty
        })
        
        let StaticSensorLocation = StaticSensorLocations.filter(x => x.SensorID === +sensorReading['Sensor-id'])[0];
        let timestamp = sensorReading.Timestamp;
        
        if (!sensorData.hasOwnProperty(timestamp)) {
          sensorData[timestamp] = [];
        }
        
        sensorData[timestamp].push({
          SensorID: sensorReading['Sensor-id'],
          latitude: StaticSensorLocation.latitude,
          longitude: StaticSensorLocation.longitude,
          value: sensorReading.Value,
          SensorType: 'static',
          color: '#008080'
        });
        
        const region = getNeighborhoodName(StaticSensorLocation.latitude, StaticSensorLocation.longitude);
        if (!regionWiseSensor.has(region)) {
          regionWiseSensor.set(region, new Set());
        }
        regionWiseSensor.get(region).add(`Static_${StaticSensorLocation.SensorID}`);
      });
    }).catch(error => {
      console.error('Error loading CSV file:', error);
    });
    
    console.log("Loaded the Static Readings Data");    
  }
  

  // Method to load the json file for aggregated information for Bar and Donut Chart
  async function loadMobileVsStaticData(){
    await d3.json('./data/preprocessed_data_static_mobile.json').then((data) => {
      radiation_aggregate_data = data;
      // console.log(radiation_aggregate_data);
      
    }).catch(error => {
      console.error('Error loading JSON file:', error);
    });
    
    console.log("Completed Bar and Donut Data Loading");
  }
  
  // Data Preprocessing for Bar Chart
  function getFilteredBarData(select_region) {
    if (select_region == null) {
      console.error("Null Value passed for getting filtered Data");
    }
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
  // ---------------------------- Bar Chart and Donut Chart Methods End -----------------------------------------------------------
  
  
  // ------------------------------ Verik, Aatish and Priyal's Code for Heat map  and Center Map ---------------------------------------------------------------------------------
  
  function initValues() {
    // console.log("Inside init values")
    div = d3.select('#mainMap');
    svg = div.append('svg').attr('id', 'map').attr('width',width).attr('height', height);
    canvasLayer = div.append('canvas').attr('id', 'heatmap').attr('width', width).attr('height', height);
    canvas = canvasLayer.node();
    
    raderChartSvg = d3.select('#raderChartSvg')
    .attr('width', radarChartWidth)
    .attr('height', radarChartHeight);
    
    projection = d3.geoMercator()
    .scale(110000)
    .center(d3.geoCentroid(map))
    .translate([width / 2 - margin.left, height / 2 - margin.bottom]);
    path = d3.geoPath().projection(projection);
    
    svg.selectAll('path')
    .data(geojson.features)
    .enter()
    .append('path')
    .attr('d', path)
    .style('position', 'absolute')
    .style('z-index', 0)
    .attr('fill', d => areaColorScale(d.properties.Nbrhood))
    .attr('stroke', 'black')
    .attr('opacity','1')
    .attr('stroke-width', 1)
    .on('mouseover', (d) => {
      var src_data = d.srcElement.__data__.properties;
      // Change border on hover
      console.log(src_data)
      d3.select(d.currentTarget)
      .attr('stroke-width', 8)
      .attr('stroke', 'white');
      
      global_tool_tip.html(
        `<div style="text-align: center;"> 
        <b>Region:</b> ${src_data.Nbrhood}</br></div>`)
        .style("visibility", "visible");
        
      })
      .on("mousemove", function () {
        global_tool_tip
        .style("top", (event.pageY - 60) + "px")
        .style("left", (event.pageX + 5) + "px");
      })
      .on('mouseout', (d) => {
        // Restore original border on mouseout
        d3.select(d.currentTarget)
        .attr('stroke-width', 1)
        .attr('stroke', 'black');
        global_tool_tip.html("").style("visibility", "hidden");
      })
      .on('click',(d) => {
        let region = d.srcElement.__data__.properties.Nbrhood;
        console.log("on Click: ", region);
        updateChoice(region);
        loadSensorDropDown(region,"linechardropdown1")
        loadSensorDropDown(region,"linechardropdown2")
        onSensorDropdownChange()
      });
      
      svg.selectAll('.bridge')
      .data(bridgesData.features)
      .enter()
      .append('path')
      .attr('class', 'bridge')
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5')
      
      svg.append('g')
      .attr('transform', `translate(${projection([-119.784825, 0.162679])})`)
      .append('path')
      .attr('d', powerplant);
      
      createSlider();
    }
    
    function createMainLegend() {
      mainLegend = svg.append('g')
      .attr('class', 'mainLegend')
      .attr('transform', `translate(${(width / 3) * 2 - 10}, ${(height / 3)*2 + 70})`);
      
      mainlegendItems = [
        { color: '#B9314F', label: 'Mobile Sensor' },
        { color: '#008080', label: 'Static Sensor' },
        { color: 'black', label: 'Always Safe Nuclear Power Plant', type: 'path', path: powerplant },
        { color: 'black', label: 'Bridge', type: 'line' }
      ];
      
      mainLegend.selectAll('.mainLegend-item')
      .data(mainlegendItems)
      .enter()
      .append('g')
      .attr('class', 'mainLegend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 25})`);
      
      mainLegend.selectAll('.mainLegend-item')
      .each(function (d) {
        const legendItem = d3.select(this);
        if (d.type === 'path') {
          legendItem.append('path')
          .attr('d', d.path)
          .attr('stroke', 'black');
        } else if (d.type === 'line') {
          legendItem.append('line')
          .attr('x1', 0)
          .attr('y1', 10)
          .attr('x2', 20)
          .attr('y2', 10)
          .attr('stroke', 'black')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5,5');
        } else {
          console.log('In Circle')
          legendItem.append('circle')
          .attr('cx', 10)
          .attr('cy', 10)
          .attr('r', 5)
          .style('fill', d.color);
        }
      });
      
      mainLegend.selectAll('.mainLegend-item')
      .append('text')
      .attr('x', 30)
      .attr('y', 10)
      .attr('dy', '0.35em')
      .style('font-size', '12px')
      .text(d => d.label);
    }
    
    
    function createSlider() {
      const timestamps = Object.keys(sensorData);
      
      let timeIndexDict = timestamps.reduce((acc, strTime, index) => {
        acc[index] = strTime;
        return acc;
      }, {});
      selectedDate = timeIndexDict[0];
      d3.select("#slider-date-text")
      .text("Selected Date: " + selectedDate);
      
      var sliderContainer = d3.select("#slider");
      
      // Set up the slider
      slider = sliderContainer.append("input")
      .attr("type", "range")
      .attr("min", 0)
      .attr("max", timestamps.length - 1)
      .attr("value", 0)
      .attr("step", 1)
      .style("width", "100%")
      .style("height", "20px")
      .on("input", function () {
        selectedDate = timeIndexDict[+this.value];
        d3.select("#slider-date-text")
        .text("Selected Date: " + selectedDate);
        
        plotData();
      });
      
      plotData();
      
    }
    
    function plotData() {
      var toggleButton = document.getElementById("toggle-button");
      var selectedValue = toggleButton.checked ? "Intensity" : "Locations";
      
      if (selectedValue === "Intensity") {
        plotHeatmap()
        // change the css of teh heatmap with a higher z index
      } else
      {
        // change the css of teh heatmap with a higher z index
        plotSensors()
      }
    }
    
    function onSensorClick(sensorReadings, id,sensorType){
      const selectedSensorData = sensorReadings.filter(s => s.SensorID === +id)
      const values = selectedSensorData.map(d => d.Value);
      const meanValue = d3.mean(values);
      const adjustedSensorData = selectedSensorData.map(d => ({
        id:d.SensorID,
        Timestamp:d.Timestamp,
        Value: Math.abs(d.Value - meanValue)<4?Math.abs(d.Value - meanValue):Math.abs(d.Value - meanValue)*1.5
      }));
      adjustedSensorData.sort((a, b) => a.Timestamp - b.Timestamp);
      
      createRadarChart(raderChartSvg, adjustedSensorData,id,sensorType);
    }
    
    
    function plotSensors() {
      console.log(selectedDate)
      console.log("Inside plot sensors")
      createMainLegend();
      canvasLayer.node().getContext('2d').clearRect(0, 0, width, height);
      
      let filteredSensorReadings = sensorData[selectedDate];
      svg.selectAll('.sensor-circle').remove();
      
      svg.selectAll('.sensor-circle')
      .data(filteredSensorReadings)
      .enter()
      .append('circle')
      .attr('class', 'sensor-circle')
      .attr('cx', d => projection([d.longitude, d.latitude])[0])
      .attr('cy', d => projection([d.longitude, d.latitude])[1])
      .attr('r', 5)
      .attr('fill', d => d.color)
      .on('mouseover', function (d) {
        // Increase circle size on hover
        d3.select(this)
        .attr('r', 8); 
        var src_data = d.srcElement.__data__;
        // console.log(src_data)
        global_tool_tip.html(
          `<div style="text-align: left;"> 
          <b>SensorID:</b> ${src_data.SensorID}</br>
          <b>SensorType:</b> ${src_data.SensorType}</br>
          <b>Radiation:</b> ${src_data.value}</br>
          </div>`)
          .style("visibility", "visible");
        })
        
        .on("mousemove", function () {
          global_tool_tip
          .style("top", (event.pageY - 60) + "px")
          .style("left", (event.pageX + 5) + "px");
        })
        .on('mouseout', function (d) {
          d3.select(this)
          .attr('r', 5); // Original circle size
          global_tool_tip.html("").style("visibility", "hidden");
        })
        .on('click', function(d) {
          // console.log(d);
          const id = d.srcElement.__data__.SensorID
          let lat = d.srcElement.__data__.latitude;
          let long = d.srcElement.__data__.longitude;
          updateChoice(getNeighborhoodName(lat,long))
          
          console.log(d);
          if(d.srcElement.__data__.SensorType === 'static') {
            onSensorClick(StaticSensorReadings, id,'Static')
          }
          else {
            onSensorClick(MobileSensorReadings, id,"Mobile")
            drawMobileSensorPath(tbpath_svg, tbpath_projection, sensorLocTime[+id], id,'Mobile');
            selectedSensorID = +id;
            slider.property("value", 0);
            updateBubbleChart(MS_indexWiseData[0]); 
          }
        });
        d3.select('#map').style('z-index', '1');
        d3.select("#heatmap").style('z-index', '0');
      }
      
      function plotHeatmap() {
        console.log(selectedDate);
        svg.selectAll('.sensor-circle').remove();
        svg.selectAll('.mainLegend-item').remove();
        let filteredSensorReadings = sensorData[selectedDate];
        
        const heatmap = simpleheat(canvas);
        heatmap.data(filteredSensorReadings.map(d => [
          projection([d.longitude, d.latitude])[0],
          projection([d.longitude, d.latitude])[1],
          d.value,
        ]));
        
        heatmap.radius(20, 15);
        
        heatmap.max(d3.max(filteredSensorReadings, d => d.value));
        
        heatmap.draw();
        
        d3.select('#map').style('z-index', '0');
        d3.select("#heatmap").style('z-index', '1');
      }
      
      function loadRegionWiseSensors()
      {
        StaticSensorReadings.forEach(sensor => {
          const region = getNeighborhoodName(sensor.latitude, sensor.longitude);
          if (!regionWiseSensor.has(region)) {
            regionWiseSensor.set(region, new Set());
          }
          regionWiseSensor.get(region).add(`${sensor.SensorType}_${sensor.SensorID}`);
        });
        
        MobileSensorReadings.forEach(sensor => {
          const region = getNeighborhoodName(sensor.latitude, sensor.longitude);
          if (!regionWiseSensor.has(region)) {
            regionWiseSensor.set(region, new Set());
          }
          regionWiseSensor.get(region).add(`${sensor.SensorType}_${sensor.SensorID}`);
        });
        console.log(regionWiseSensor);
      }
      async function loadSensorDropDown(regionName,dropdownId){
        console.log("Started LoadSensorDropDown");
        const sensorDropdown = d3.select(`#${dropdownId}`);
        sensorDropdown.html('');
        const sensorSet = regionWiseSensor.get(regionName);
        if (sensorSet) {
          sensorSet.forEach(sensor => {
            sensorDropdown.append('option').text(sensor);
          });
        }
        console.log("Completed LoadSensorDropDown");
      }
      
      
      
      // ---------------------------------------------- Time Based Path Map by Nisarg and Shaswat----------------------------------------------------
      function drawMobileSensorPath(svg, mapProjection, sensorData,id,sensortype) {
        // console.log("In DrawMS");
        svg.selectAll('.mobile-sensors').remove();
        svg.selectAll('.mobile-sensor-marker').remove();
        
        svg.selectAll('#mobile-uncertainty-heading').remove();
        
        const sensorGroup = svg.append("g")
        .attr("class", "mobile-sensors");
        const lineG = sensorGroup.append("path")
        .attr("fill", "none")
        .attr("stroke", "brown")
        .attr("stroke-width", 1);
        // Add chart heading
        
        svg.append('text')
        .attr('id',"mobile-uncertainty-heading")
        .attr('x', tbpath_width / 2)
        .attr('y', tbpath_margin.top / 2)
        .attr('text-anchor', 'middle')
        .text(`${sensortype} Sensor ${id}'s Uncertainty Over Path`)
        .style('font-size', '18px')
        .style('font-weight', 'bold');
        
        const path = sensorGroup.append("path")
        .datum(sensorData)
        .attr("fill", "none")
        .attr("stroke", "brown")
        .attr("stroke-width", 1)
        .attr("d", d3.line()
        .x(entry => mapProjection([entry.longitude, entry.latitude])[0])
        .y(entry => mapProjection([entry.longitude, entry.latitude])[1])
        );
        
        const totalLength = path.node().getTotalLength();
        
        svg.append("text")
        .attr("x", mapProjection([sensorData[0].longitude, sensorData[0].latitude])[0])
        .attr("y", mapProjection([sensorData[0].longitude, sensorData[0].latitude])[1])
        .attr("class", "mobile-sensor-marker")
        .text("✿")
        .attr("fill", "black");
        path.attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(5000)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 2)
        .on('start', function() {
          svg.selectAll('.ending-marker').remove();
        });
        path.transition()
        .duration(5000)
        .ease(d3.easeLinear)
        .attrTween("stroke-dashoffset", function() {
          const length = totalLength + 2;
          return function(t) {
            const dashoffset = d3.interpolateNumber(length, 2)(t);
            const startX = mapProjection([sensorData[0].longitude, sensorData[0].latitude])[0];
            const startY = mapProjection([sensorData[0].longitude, sensorData[0].latitude])[1];
            const endX = path.node().getPointAtLength(length - dashoffset).x;
            const endY = path.node().getPointAtLength(length - dashoffset).y;
            const linePath = `M ${startX} ${startY} L ${endX} ${endY}`;
            lineG.attr("d", linePath);
            return dashoffset;
          };
        }).on('end', function() {
          lineG.remove();
        });
        // Add a legend container
        const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(10, 320)");
        
        const legendItems = legend.selectAll(".legend-item")
        .data([
          { label: ': Sensor Home location', size: 0, specialCharacter: '   ✿' },
          { label: ': Uncertainity', size: 0, specialCharacter: 'Radius' },
        ])
        .enter().append("g")
        .attr("class", "legend-item")
        .attr("transform", (d, i) => `translate(0, ${i * 30})`);
        
        console.log("LegenedItems: ",legendItems);
        
        legendItems.append("circle")
        .attr('stroke', 'black')
        .attr('stroke-width', (d) => (d.label === ': Mobile Sensors(MS)') ? 1 : 0)
        .attr("r", 6)
        .attr("fill", d => getColorForSensorType(d.label));
        
        legendItems.append("text")
        .attr("x", -8) 
        .attr("y", 4)
        .style("font-size", "12px") 
        .text(d => d.specialCharacter);
        
        legendItems.append("text")
        .attr("x", 30)
        .attr("y", 4)
        .style("font-size", "12px") 
        .text(d => d.label);
        
        
      }
      function getColorForSensorType(sensorType) {

        const colorMap = {
          ': Mobile Sensors(MS)': '#B9314F',
          ': Static Sensors(SS)': '#008080',
          ': Sensor Home location': 'none',
          ": Uncertainity": "rgb(228, 228, 228)",
        };
        
        return colorMap[sensorType];
      }
      
      function translateAlong(path) {
        const length = path.getTotalLength();
        return function() {
          return function(t) {
            const {x, y} = path.getPointAtLength(t * length);
            return `translate(${x},${y})`;
          }
        }
      }
      
      function updateBubbleChart(selectedTime) {
        
        // console.log(selectedTime,selectedSensorID);
        
        // Filter data based on the selected time
        var filteredData = MS_groupedTimeData.get(selectedTime);
        // console.log(filteredData);
        
        var parseData = [];
        
        filteredData.forEach(data => {
          
          if (data.SensorID == selectedSensorID) {
            // console.log(data, data.SensorID)
            parseData = [data];
          }
        });
        
        // console.log(parseData);
        // console.log(sensorLoctionBasedOnTime);
        
        selected_sensor_timed_data = sensorLoctionBasedOnTime[selectedSensorID];
        // console.log(selected_sensor_timed_data);
        
        var path_timed_data = [];
        var index = 1;
        
        selected_sensor_timed_data.forEach(data => {
          
          if (data.timestamp == selectedTime) {
            // console.log(data, data.SensorID)
            path_timed_data = selected_sensor_timed_data.slice(0,index);
            // console.log(data.timestamp, selectedTime, index);
          }
          index = index + 1;
        });
        
        
        // Line generator for the path
        const line = d3.line()
        .x(d => tbpath_projection([d.longitude, d.latitude])[0])
        .y(d => tbpath_projection([d.longitude, d.latitude])[1]);
        
        // Path using the line generator
        const path = tbpath_svg.append("path")
        // .datum(path_timed_data)
        .attr("class", "path")
        .attr("d", line(path_timed_data))
        .style("fill", "none")
        .style("stroke", "blue")
        .style("opacity", 0)
        .style("stroke-width", 1);
        
        // Updating the bubble chart with transitions
        tbpath_svg.selectAll("circle.dynamic")
        .data(parseData)
        .join(
          enter => {
            // Enter new circles
            enter.append('circle')
            .attr('class', 'dynamic')
            .attr("r", d => Math.sqrt((d.uncertainty + 25))) 
            .style("fill", "#B9314F")
            .attr('stroke-width', 1)
            .style("opacity", 1)
            .attr("transform","translate("+parseData[0].longitude+","+parseData[0].latitude+")")
            .on("mouseover", function (event, d) {
              tooltip.transition()
              .duration(1000)
              .style("opacity", 1);
              
              global_tool_tip.html(`
              <strong>SensorType:</strong> ${d.SensorType}<br>
              <strong>Time:</strong> ${d.str_Time}<br>
              <strong>Sensor ID:</strong> ${d.SensorID}<br>
              <strong>Latitude:</strong> ${d.latitude}<br>
              <strong>Longitude:</strong> ${d.longitude}<br>
              <strong>Value:</strong> ${d.value}<br>
              <strong>Uncertainty:</strong> ${d.uncertainty}<br>
              `);
              
              global_tool_tip.style("visibility", "visible");
            }) .on("mousemove", function () {
              global_tool_tip
              .style("top", (event.pageY - 60) + "px")
              .style("left", (event.pageX + 5) + "px");
            })
            .on("mouseout", function () {
              global_tool_tip.html("").style("visibility", "hidden");
            })
            .transition()
            .ease(d3.easeLinear)
            .duration(10000)
            .attrTween('transform', translateAlong(path.node()));
          },
          update => {
            // Update existing circles
            update.transition()
            .attr("r", d => Math.sqrt(d.uncertainty + 25)) 
            .ease(d3.easeLinear)
            .duration(10000)
            .attrTween('transform', translateAlong(path.node()));
          },
          exit => {
            // Remove old circles
            exit.transition()
            .duration(1000)
            .attr("r", 5)  
            .remove();
          }
          );    
          
        }
        