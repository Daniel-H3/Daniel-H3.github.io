var waktuUpdate = 5000

// ENERGY
function generateDataEnergy() {
    const dataEnergy = [];
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 50000) + 200000;
        dataEnergy[i] = randomValue;
    }

    energyChart.data.datasets[0].data = dataEnergy;
    energyChart.update();
}

const energyChartCtx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(energyChartCtx, {
    type: 'bar',
    data: {
        labels: ["Day 1", "Day 2", "Day 3"],
        datasets: [{
            label: 'Totalizer',
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
generateDataEnergy();
setInterval(generateDataEnergy, waktuUpdate);



// POWER
function generateDataPower() {
    const dataPower = [];
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 1000) + 5000;
        dataPower[i] = randomValue;
    }

    powerChart.data.datasets[0].data = dataPower;
    powerChart.update();
}

const powerChartCtx = document.getElementById('powerChart').getContext('2d');
const powerChart = new Chart(powerChartCtx, {
    type: 'bar',
          data: {
            labels: ["Day 1", "Day 2", "Day 3"],
            datasets: [{
              label: 'Flow Rate',
              data: [10,50,30],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
generateDataPower();
setInterval(generateDataPower, waktuUpdate);


// VOLTAGE LL
function generateDataVoltageLL() {
    const dataVoltageLL = [];
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 100) + 100;
        dataVoltageLL[i] = randomValue;
    }

    volatgell.data.datasets[0].data = dataVoltageLL;
    volatgell.update();
}

const volatgellCtx = document.getElementById('volatgell').getContext('2d');
const volatgell = new Chart(volatgellCtx, {
    type: 'bar',
          data: {
            labels: ["Day 1", "Day 2", "Day 3"],
            datasets: [{
              label: 'Pressure',
              data: [10,50,30],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
generateDataVoltageLL();
setInterval(generateDataVoltageLL, waktuUpdate);


// VOLTAGE LN
function generateDataVoltageLN() {
    const dataVoltageLN = [];
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 50) + 20;
        dataVoltageLN[i] = randomValue;
    }

    voltageln.data.datasets[0].data = dataVoltageLN;
    voltageln.update();
}

const volatgelnCtx = document.getElementById('voltageln').getContext('2d');
const voltageln = new Chart(volatgelnCtx, {
    type: 'bar',
          data: {
            labels: ["Day 1", "Day 2", "Day 3"],
            datasets: [{
              label: 'Temperature',
              data: [10,50,30],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
generateDataVoltageLN();
setInterval(generateDataVoltageLN, waktuUpdate);



// Function to generate random data
function getRandomData() {
  return Array.from({ length: 3 }, () => Math.floor(Math.random() * 100) + 1);
}

// Reset function for all charts
function resetCharts() {
  // Reset ENERGY chart
  const energyData = getRandomData();
  energyChart.data.datasets[0].data = energyData;
  energyChart.update();

  // Reset POWER chart
  const powerData = getRandomData();
  powerChart.data.datasets[0].data = powerData;
  powerChart.update();

  // Reset VOLTAGE LL chart
  const voltageLLData = getRandomData();
  volatgell.data.datasets[0].data = voltageLLData;
  volatgell.update();

  // Reset VOLTAGE LN chart
  const voltageLNData = getRandomData();
  voltageln.data.datasets[0].data = voltageLNData;
  voltageln.update();
}


