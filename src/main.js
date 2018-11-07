const requestURL = 'https://raw.githubusercontent.com/driebit/assignment/master/listdata.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const results = request.response;
  const meetups = results.filter(result => result.type === 'meetup')
  const conversations = results.filter(result => result.type === 'conversation')
  fillMeetups(meetups)
  fillConversations(conversations)
  localStorage.setItem("meetups", JSON.stringify(meetups))
  localStorage.setItem("conversations", JSON.stringify(conversations))
}

function fillMeetups(meetups){
  const meetupList = document.getElementById("meetupList")
  meetups.map(meetup => {
    const newListItem = document.createElement('li')
    const newLink = document.createElement('a')
    newLink.textContent = meetup.title
    newLink.setAttribute('href', "details.html")
    newLink.addEventListener('click', function(){ passDetails(meetup.title)}, false)
    newListItem.appendChild(newLink)
    meetupList.appendChild(newListItem)
  })
}
function fillConversations(conversations){
  const convoList = document.getElementById("convoList")
  conversations.map(conversation => {
    const newConvoItem = document.createElement('li')
    const newConvoLink = document.createElement('a')
    newConvoLink.textContent = conversation.title
    newConvoLink.setAttribute('href', "conversation.html")  
    newConvoLink.addEventListener('click', function(){ passDetails(conversation.title)}, false)
    newConvoItem.appendChild(newConvoLink)
    convoList.appendChild(newConvoItem)
  })
}

function passDetails(e){
  localStorage.setItem("title", JSON.stringify(e))
}
