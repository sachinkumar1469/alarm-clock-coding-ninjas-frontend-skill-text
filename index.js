const timeDisplay = document.querySelector("#time");
const hourInput = document.querySelector("#hr");
const minuteInput = document.querySelector("#min");
const secondInput = document.querySelector("#sec");
const ampmInput = document.querySelector("#ampm");
const setAlarmButton = document.querySelector("#set-alarm-button");
const alarmList = document.querySelector("#alarms");

// Display the current time
// Update the time every second
setInterval(function() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ampm = "AM";
  if (hour >= 12) {
    ampm = "PM";
  }
  if (hour > 12) {
    hour -= 12;
  }
  timeDisplay.textContent = `${hour}:${minute}:${second} ${ampm}`;
}, 1000);

// Set the alarm
setAlarmButton.addEventListener("click", function() {
  const alarmHour = hourInput.value;
  const alarmMinute = minuteInput.value;
  const alarmSecond = secondInput.value;
  const alarmAmpm = ampmInput.value;

  // Create an alarm object
  const alarm = {
    hour: alarmHour,
    minute: alarmMinute,
    second: alarmSecond,
    ampm: alarmAmpm
  };

  // Add the alarm to the list


  // Check if the alarm goes off
  let dateInervalId = setInterval(function() {
    let date = new Date();
    console.log("Date: ",date);
    let hour = date.getHours();
    console.log("Hour: ",hour)
    let ampm = "AM";
    if (hour >= 12) {
      ampm = "PM";
    }
    if (hour > 12) {
      hour -= 12;
    }
    if (
      hour === parseInt(alarmHour) &&
      date.getMinutes() === parseInt(alarmMinute) &&
      date.getSeconds() === parseInt(alarmSecond) &&
      ampm === alarmAmpm
    ) {
      alert("Time's up!");
    }
  }, 1000);

  addAlarmToList(alarm,dateInervalId);
});

// Add the alarm to the list
function addAlarmToList(alarm,dateInervalId) {
  const listItem = document.createElement("li");
  listItem.textContent = `${alarm.hour}:${alarm.minute}:${alarm.second} ${alarm.ampm}`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    clearInterval(dateInervalId);
    listItem.remove();
  });

  listItem.appendChild(deleteButton);
  alarmList.appendChild(listItem);
}
