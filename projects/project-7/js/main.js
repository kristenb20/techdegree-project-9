
var trafficCanvas = document.getElementById('traffic-chart');

    let trafficData = {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
        data: [0, 675, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        borderColor: 'rgb(149, 148, 227, 1)',
        lineTension: 0,
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointBorderColor: 'rgba(104,103,163,1)',
        pointBorderWidth: 1,
        pointRadius: [0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      }]
    };

    let trafficOptions = {
      aspectRatio: 2.5,
      animation: {
        duration: 0
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      },
      legend : {
        display: false
      }
    };

    var trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
      });



const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true,
      }
    }]
  },
  legend : {
    display: false,
  }
}

let dailyChart = new Chart(dailyCanvas, {
type: 'bar',
data: dailyData,
options: dailyOptions
});


const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
  labels: ["Phones", "Tablet", "Desktop"],
  datasets: [{
    data: [500, 550, 2000],
    borderWidth: 0,
    backgroundColor: [
      '#51B6C8',
      '#78CF82',
      '#7477BF'
    ]
  }]
};

const mobileOptions = {
  maintainAspectRatio: false,
  legend: {
    position: 'right',
    borderAlign: 'center',
    labels: {
      boxWidth: 15,
      fontColor: '#666',
    }
  }
}


let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});


const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {

  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});
