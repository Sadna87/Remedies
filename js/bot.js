//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chatbot', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message
lastUserMessage=lastUserMessage.toLowerCase()
  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {
    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

lastUserMessage=lastUserMessage.toLowerCase()
const myArray = lastUserMessage.split(" ");
for(let i=0;i<myArray.length;i++)
{
if(myArray[i]=="head" || myArray[i]=="headache")
	
	{
	let text = "Click here ";
    let result = text.link("remedies/Head.html");
	
	let message = text.link("js/head.php");
    botMessage = "If you have a headache We suggest you to use garlic, coffee and omega3.For a quick tip on how to use one of the remedy."+message+  "\n At our website you can read more about the usage and the benefits of each remedy "+ result;
   
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray1 = lastUserMessage.split(" ");
for(let i=0;i<myArray1.length;i++)
{
if(myArray1[i]=="ears" || myArray1[i]=="earsache")
	
	{
	let text = "Click here ";
    let result = text.link("remedies/Ears.html");
	let message = text.link("js/ears.php");
    botMessage = "If you have a earsache We suggest you to use Salt water, garlic, Olive Oill and Black Garlic. For a quick tip on how to use one of the remedy."+message+ "At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray2 = lastUserMessage.split(" ");
for(let i=0;i<myArray2.length;i++)
{
if(myArray2[i]=="skin" || myArray2[i]=="skincare")
	
	{
	let text = "Click here";
    let result = text.link("remedies/Skin.html");
	let message = text.link("js/skin.php");
    botMessage = "If you have a skin problem We suggest you to use Milk, Yogurt, Olive Oill, Salt water and Lemon. For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray3 = lastUserMessage.split(" ");
for(let i=0;i<myArray3.length;i++)
{
if(myArray3[i]=="hair" )
	
	{
	let text = "Click here";
    let result = text.link("remedies/Hair.html");
	let message = text.link("js/hair.php");
    botMessage = "If you have a hair problem We suggest you to use Salt water, Honey, Olive Oill, lemon and Yogurt.For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray4 = lastUserMessage.split(" ");
for(let i=0;i<myArray4.length;i++)
{
if(myArray4[i]=="throat" || myArray4[i]=="throatache" )
	
	{
	let text = "Click here";
    let result = text.link("remedies/Throat.html");
	let message = text.link("js/throat.php");
    botMessage = "If you have a throatache We suggest you to use Mint, garlic, Olive Oill, cinnamon, Lemon, Honey  and Black Garlic.For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray5 = lastUserMessage.split(" ");
for(let i=0;i<myArray5.length;i++)
{
if(myArray5[i]=="stomach" || myArray5[i]=="stomachache")
	
	{
	let text = "Click here";
    let result = text.link("remedies/Stomach.html");
	let message = text.link("js/stomach.php");
    botMessage = "If you have a stomachache We suggest you to use Honey, Lemon, Tumeric, cinnamon, Anise and Mint.For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray6 = lastUserMessage.split(" ");
for(let i=0;i<myArray6.length;i++)
{
if(myArray6[i]=="fever" || myArray6[i]=="sweat" || myArray6[i]=="sweating")
	
	{
	let text = "Click here";
    let result = text.link("remedies/Fever.html");
	let message = text.link("js/fever.php");
    botMessage = "If you have a fever We suggest you to use Tumeric, Mint, Olive Oill, Garlic and Black Garlic.For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray7 = lastUserMessage.split(" ");
for(let i=0;i<myArray7.length;i++)
{
if(myArray7[i]=="cold" || myArray7[i]=="sneeze" || myArray7[i]=="sneezing" || myArray7[i]=="sneezed")
	
	{
	let text = "Click here";
    let result = text.link("remedies/Cold.html");
	let message = text.link("js/cold.php");
    botMessage = "If you have a cold We suggest you to use Salt water, garlic, Honey, Mint, cinnamon, Lemon and Black Garlic.For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result; 
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray8 = lastUserMessage.split(" ");
for(let i=0;i<myArray8.length;i++)
{
if(myArray8[i]=="ldh")
	
	{
	let text = "Click here";
    let result = text.link("remedies/LDH.html");
	let message = text.link("js/ldh.php");
    botMessage = "If you have a LDH problem We suggest you to use Omega-3, garlic, Olive Oill, Spirulina and Black Garlic.For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray9 = lastUserMessage.split(" ");
for(let i=0;i<myArray9.length;i++)
{
if(myArray9[i]=="cholesterol" )
	
	{
	let text = "Click here";
    let result = text.link("remedies/Cholesterol.html");
	let message = text.link("js/cholesterol.php");
    botMessage = "If you have a cholesterol problem We suggest you to use Omega-3, Spirulina, Olive Oill and Tumeric.For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}

lastUserMessage=lastUserMessage.toLowerCase()
const myArray10 = lastUserMessage.split(" ");
for(let i=0;i<myArray10.length;i++)
{
if(myArray10[i]=="coughing" || myArray10[i]=="coughed" || myArray10[i]=="cough")
	
	{
	let text = "Click here";
    let result = text.link("remedies/Coughing.html");
	let message = text.link("js/coughing.php");
    botMessage = "If you have a choughing  We suggest you to use Honey, Lemon, Tumeric, garlic, Olive Oill and Black Garlic.For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}


lastUserMessage=lastUserMessage.toLowerCase()
const myArray12 = lastUserMessage.split(" ");
for(let i=0;i<myArray12.length;i++)
{
if(myArray12[i]=="vomiting" || myArray12[i]=="nausea" || myArray12[i]=="vomited" || myArray12[i]=="vomit" )
	
	{
	let text = "Click here";
    let result = text.link("remedies/Vomiting.html");
	let message = text.link("js/vomiting.php");
    botMessage = "If you are vomiting We suggest you to use Salt water, Lemon, mint, and cinnamon.For a quick tip on how to use one of the remedy."+message+ " At our website you can read more about the usage and the benefits of each remedy " + result;
    }
}






}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}