const moment = require('moment')
require('moment/locale/nl.js');

window.onload = function() {
  const results = JSON.parse(localStorage.getItem("meetups"))
  const title = JSON.parse(localStorage.getItem("title"))
  const details = results.filter(result=> result.title === title)[0]
  document.getElementById("body").style.backgroundImage = `url( ${details.background})`
  document.getElementById('type').textContent = details.type
  const date = moment(details.post_date.replace(' ', ''))
  const newDate = moment(date).locale('nl').format('LL')
  const newTime = moment(date).format('LT')
  document.getElementById("date").textContent = newDate + ' / ' + newTime + ' uur'
  document.getElementById("header").textContent = title
  document.getElementById("paragraph").textContent = details.body

}