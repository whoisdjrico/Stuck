// curl -X POST --data-urlencode 'payload={"channel": "#finance", "username": "webhookbot", "text": "This is posted to #finance and comes from a bot named webhookbot.", "icon_emoji": ":ghost:"}' https://hooks.slack.com/services/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
var payload = {};

var channelName = '#finance';
var userName = 'helpbot';
var messageText;

var userName1 = null;
var userName2 = null;

payload.channel = channelName;
payload.username = userName;

page3Render();

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
  page1Top.innerHTML = "Hi Friend :)<br>Are you stuck?";

  var page1ButtonDiv = renderDiv(null,'id','yesButtonDiv');
  var yesButton = renderButton("Nah, I'm good :)",'class','mainButtonCentered page1');
  yesButton.setAttribute('id','yesButton');
  yesButton.addEventListener('click',page2Render);

  var noButton = renderButton("YES!",'class','mainButtonCentered page1');
  noButton.setAttribute('id','noButton');
  noButton.addEventListener('click',page4Render);

  document.getElementById('div6').appendChild(yesButton);
  document.getElementById('div7').appendChild(noButton);
}

function page2Render() {
  clearDivs();
  document.getElementById('div5').innerHTML = 'BOOM! <br> Glad to hear it :) <br> Keep going!';
}

function page3Render() {
  clearDivs();
  document.getElementById('div4').innerHTML = 'Jah feel :/';
  document.getElementById('div5').innerHTML = "Don't panic, we got you :)<br><br>Just go ahead and type what's wrong in the box and if you're not " +userName1 + " & " + userName2 + " then type your Slack usernames in the boxes below (please include the @sign!)";
  document.getElementById('div5').style.fontSize = "16px";
  document.getElementById('div5').style.textAlign = 'left';
  document.getElementById('div5').style.fontFamily = 'sans-serif';
}

function page4Render() {
  clearDivs();

  document.getElementById('div4').innerHTML = 'Help is on the way!';

  var help2 = renderDiv('...in the meanwhile soothing pictures <br />are coming in 3...2...1...');
  help2.setAttribute('id','help2');

  document.getElementById('div5').appendChild(help2);
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
