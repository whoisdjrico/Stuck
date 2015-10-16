//CHROME STUFF THAT GOT COMMENTED OUT
var extensionID = 'aiikpmbijdjainodfedhlclllcgmkdfd';

var myNotificationID = null;

var opt = {
   type: "basic",
   title: "Stuck?",
   message: "Hey Friend, are you stuck?",
   iconUrl: "Codesmith-Resized.png",
   buttons: [{
            title: "YES!",
        }, {
            title: "Nah I'm good",
        }]
}

function notify() {
  chrome.notifications.create("", opt, function(id) {
      myNotificationID = id;
  });

  chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
      if (notifId === myNotificationID) {
          if (btnIdx === 0) {
              window.open("chromeExt.html");
          }
      }
  });
}

var countDown = function() {
  // setInterval(notify,1800000);
  setInterval(notify,1800000);
}

onload = countDown();

var userName1;
var userName2;

page1Render();

function renderDiv(string,attr,attrStr){
  var div = document.createElement('div');
  if (attr !== undefined){
    div.setAttribute(attr,attrStr);
  }
  div.innerHTML = string;
  return div;
}

function renderButton(string,attr,attrStr){
  var button = document.createElement('button');
  if (attr !== undefined){
    button.setAttribute(attr,attrStr);
  }
  button.innerHTML = string;
  return button;
}

function page1Render() {

  // var page1Top = renderDiv('Hi friend :) Are you stuck?','class','page1');
  var page1Top = document.getElementById('div4');
  page1Top.innerHTML = "Stuck?";

  var page1ButtonDiv = renderDiv(null,'id','yesButtonDiv');
  var yesButton = renderButton("YES!",'class','mainButtonCentered page1');
  yesButton.setAttribute('id','yesButton');
  yesButton.addEventListener('click',page3Render);

  var noButton = renderButton("Nah, I'm good :)",'class','mainButtonCentered page1');
  noButton.setAttribute('id','noButton');
  noButton.addEventListener('click',page2Render);

  document.getElementById('div6').appendChild(yesButton);
  document.getElementById('div6').appendChild(noButton);
}

function page2Render() {
  clearDivs();
  document.getElementById('div5').innerHTML = 'BOOM! Keep coding!';
}

function page3Render() {
  clearDivs();
  document.getElementById('div4').innerHTML = 'Jah feel :/';
  // document.getElementById('div5').innerHTML = "Don't panic, we got you :)<br><br>Just go ahead and type what's wrong in the big box and if you're not " +userName1 + " & " + userName2 + " then type your Slack usernames in the boxes below (please include the @sign!)";
  document.getElementById('div5').style.fontSize = "16px";
  document.getElementById('div5').style.textAlign = 'left';
  document.getElementById('div5').style.fontFamily = 'sans-serif';

  var form = document.createElement('form');
  form.setAttribute('class','page3');
  form.setAttribute('id','slackForm');
  document.getElementById('div6').appendChild(form);

  var messageBox = document.createElement('textarea');
  messageBox.setAttribute('form','slackForm');
  messageBox.setAttribute('rows','5');
  messageBox.setAttribute('columns','50');
  messageBox.setAttribute('name','messageBox');
  messageBox.setAttribute('id','messageBox');
  messageBox.innerHTML = "TYPE YOUR MESSAGE HERE!"
  form.appendChild(messageBox);

  var userName1Box = document.createElement('input');
  var userName2Box = document.createElement('input');
  userName1Box.setAttribute('type','text');
  userName1Box.setAttribute('id','userName1Box');
  userName1Box.setAttribute('name','userName1Box');
  userName1Box.innerHTML = "User Name 1";

  userName2Box.setAttribute('id','userName2Box');
  userName2Box.setAttribute('name','userName2Box');
  userName2Box.setAttribute('type','text');
  userName2Box.innerHTML = "User Name 2";

  var submitButton = document.createElement('input');
  submitButton.setAttribute('type','button');
  submitButton.setAttribute('value','Submit!');
  submitButton.setAttribute('id','submitButton');



  slackForm.appendChild(userName1Box);
  slackForm.appendChild(userName2Box);
  slackForm.appendChild(submitButton);

  submitButton.addEventListener('click',function(event){
    event.preventDefault();
    var message = messageBox.value;
    var user1 = userName1Box.value;
    var user2 = userName2Box.value;
    sendToSlack(message,user1,user2);
  });
  // submitButton.addEventListener('onClick',showIndex);



}

function page4Render(message,user1,user2) {
  clearDivs();
  document.getElementById('div5').innerHTML = "";
  setTimeout(showIndex,3700);

  document.getElementById('div4').innerHTML = 'Help is on the way!';

  var help2 = renderDiv('...in the meanwhile soothing pictures <br />are coming in 3...2...1...');
  help2.setAttribute('id','help2');

  document.getElementById('div5').appendChild(help2);


}

function sendToSlack(message,user1,user2) {
  var payload = {};

  var channelName = '#help-desk';
  // var userName = 'helpbot';
  var messageText = message

  userName1 = user1;
  userName2 = user2;

  messageText = messageText + " cc: " + user1 + " " + user2;

  payload.channel = channelName;
  // payload.username = userName;
  payload.text = messageText;

  console.log('message: ' + message);
  console.log('user1: ' + user1);
  console.log('user2: ' + user1);

  jQuery.ajax({
    url: 'https://hooks.slack.com/services/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',
    type: 'POST',
    data: JSON.stringify(payload),
    // contentType: 'application/json; charset=UTF-8',
    // dataType: 'json',
    success: page4Render
  });
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function clearDivs () {
  var temp = document.getElementById('div4').innerHTML = '';
  for (var i = 0; i < 4; i++){
    thingToDelete = 'page' + (i+1);
    removeElementsByClass(thingToDelete);
  }
}


//this opens new tab after yes is click in needing help
function showIndex() {
var index_url = "http://www.eyebleach.me/kittens/";
  chrome.tabs.create({url: index_url});
}
