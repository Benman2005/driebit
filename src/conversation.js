const moment = require('moment')
require('moment/locale/nl.js');

window.onload = function() {
  const results = JSON.parse(localStorage.getItem("conversations"))
  const title = JSON.parse(localStorage.getItem("title"))
  const conversation = results.filter(result=> result.title === title)[0]
  // console.log(conversation) 
  document.getElementById('avatar').style.backgroundImage = `url(${conversation.author.avatar})` 
  document.getElementById('name').textContent = conversation.author.name
  document.getElementById('profession').textContent = conversation.author.profession
  document.getElementById('postContent').textContent = conversation.body
  postDate = conversation.post_date.replace(' ', '')
  document.getElementById('date2').textContent = moment(postDate).locale('nl').format('LL')
  moment(postDate).locale('nl').format('LL')
  document.getElementById('likes').textContent = conversation.likes + ' waarderingen'
  conversation.comments.length === 1 ? 
  document.getElementById('comments').textContent = conversation.comments.length + ' reactie' :
  document.getElementById('comments').textContent = conversation.comments.length + ' reacties' 
}