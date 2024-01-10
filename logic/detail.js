const selectElement = document.querySelector('.addData');
const ctx = document.getElementById('energyChart').getContext('2d');

const subtractElement = document.querySelector('.subtractData');

// Event listener for the "Subtract Data" dropdown
subtractElement.addEventListener('change', function () {
  const selectedValue = subtractElement.value;

  if (selectedValue !== '0') {
    // Find the index of the dataset to be subtracted
    const datasetIndex = datasets.findIndex(dataset => dataset.label === optionNames[selectedValue]);

    if (datasetIndex !== -1) {
      // Remove the dataset from the array
      datasets.splice(datasetIndex, 1);

      // Update the chart data and redraw
      myChart.data = {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
        datasets: datasets
      };
      myChart.update();
    }
  }
});

// List of initial data
const initialData = [
  [65, 59, 80, 81, 56, 55, 40],
  [70, 62, 85, 78, 50, 58, 45],
  // ... other initial datasets
];

// Create an array to store datasets
const datasets = [];

const data = {
  labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
  datasets: datasets
};

const options = {
  animations: {
    tension: {
      duration: 5000,
      easeInSine: 'linear',
      from: 1,
      to: 0,
      loop: true
    }
  },
  scales: {
    y: {
      beginAtZero: false
    }
  }
};

// Initial chart creation (no datasets yet)
const myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});

// Mapping between option values and corresponding names
const optionNames = {
  '1': 'Flow Rate',
  '2': 'Flow Rate Max',
  '3': 'Flow Rate Min',
  '4': 'Temperature',
  '5': 'Pressure',
};

// Event listener for the "Add Data" dropdown
selectElement.addEventListener('change', function () {
  const selectedValue = selectElement.value;

  if (selectedValue !== '0') {
    // Assuming getRandomData() is a function that generates random data
    const newData = getRandomData();
    const newData1 = getRandomData1();
    const newData2 = getRandomData2();
    const newData3 = getRandomData3();
    const newData4 = getRandomData4();

    // Add a new dataset to the array with the corresponding name
    if(selectedValue == '1'){
      datasets.push({
        label: optionNames[1],
        data: newData,
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1
      });
    }else if(selectedValue == '2'){
      datasets.push({
        label: optionNames[2],
        data: newData1,
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1
      });
    }else if(selectedValue == '3'){
      datasets.push({
        label: optionNames[3],
        data: newData2,
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1
      });
    }else if(selectedValue == '4'){
      datasets.push({
        label: optionNames[4],
        data: newData3,
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1
      });
    }else if(selectedValue == '5'){
      datasets.push({
        label: optionNames[5],
        data: newData4,
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1
      });
    }

    // Update the chart data and redraw
    myChart.data = {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
      datasets: datasets
    };
    myChart.update();
  }
});

// Function to generate random data (replace with your own logic)
function getRandomData() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000) + 5000);
}
function getRandomData1() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000) + 7000);
}
function getRandomData2() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000) + 1000);
}
function getRandomData3() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 50) + 20);
}
function getRandomData4() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 100);
}

// Function to generate a random color (replace with your own logic)
function getRandomColor() {
  return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
}

function resetChart() {
    // Reset datasets to initial state
    datasets.length = 0;
    initialData.forEach((data, index) => {
      datasets.push({
        label: optionNames[index + 1],
        data: data,
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1
      });
    });
  
    // Update the chart data and redraw
    myChart.data = {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
      datasets: datasets
    };
    myChart.update();
  }