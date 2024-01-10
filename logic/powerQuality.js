 // Initial layout for the Plotly chart
 var layout = {
    width: 350,
    height: 190,
    margin: { t: 0, b: 0 },
    paper_bgcolor: "transparent",
    font: { color: "#FCA311", family: "Arial" }
  };
  var layout2 = {
    width: 325,
    height: 190,
    margin: { t: 0, b: 0 },
    paper_bgcolor: "transparent",
    font: { color: "#FCA311", family: "Arial" }
  };

function updatePlotlyChart() {
    // Generate a random value (you can replace this with your own logic)
    const randomValue = Math.floor(Math.random() * 1000) + 5000;
    const randomValue2 = Math.floor(Math.random() * 1000) + 7000;
    const randomValue3 = Math.floor(Math.random() * 100) + 100;
    const randomValue4 = Math.floor(Math.random() * 50) + 20;
    const randomValue5 = Math.floor(Math.random() * 1000) + 1000;
  
    // Update the Plotly chart data with the new value
    var newData = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: randomValue,
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          'axis': {'range': [0, 10000]},
          'bar': {'color': "#FCA311"},
        }
      }
    ];

    var data2 = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: randomValue2,
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                'axis': {'range': [0, 10000]},
                'bar': {'color': "#FCA311"},
            }
        }
    ];

    var data3 = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: randomValue3,
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                'axis': {'range': [0, 200]},
                'bar': {'color': "#FCA311"},
            }
        }
    ];

    var data4 = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: randomValue4,
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                'axis': {'range': [0, 100]},
                'bar': {'color': "#FCA311"},
            }
        }
    ];

    var data5 = [
      {
          domain: { x: [0, 1], y: [0, 1] },
          value: randomValue5,
          type: "indicator",
          mode: "gauge+number",
          gauge: {
              'axis': {'range': [0, 10000]},
              'bar': {'color': "#FCA311"},
          }
      }
  ];
  
    // Update the Plotly chart
    Plotly.react('myDiv', newData, layout);
    Plotly.newPlot('myDiv2', data2, layout2);
    Plotly.newPlot('myDiv3', data3, layout);
    Plotly.newPlot('myDiv4', data4, layout);
    Plotly.newPlot('myDiv5', data5, layout2);
  }
  
  // Call the function initially
  updatePlotlyChart();
  
  // Set up an interval to update the chart every 5 seconds
  setInterval(updatePlotlyChart, 5000);
  
  // Initial layout for the Plotly chart
  var layout = {
    width: 350,
    height: 190,
    margin: { t: 0, b: 0 },
    paper_bgcolor: "transparent",
    font: { color: "#FCA311", family: "Arial" }
  };
  var layout2 = {
    width: 325,
    height: 190,
    margin: { t: 0, b: 0 },
    paper_bgcolor: "transparent",
    font: { color: "#FCA311", family: "Arial" }
  };