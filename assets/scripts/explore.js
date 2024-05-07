// explore.js
window.addEventListener('DOMContentLoaded', init);
function init() {
  const face = document.querySelector('section#explore img');
  const text = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const talkButton = document.querySelector('button');

//grab all voices
const allVoicesObtained = new Promise(function(resolve, reject) {
  let voices = window.speechSynthesis.getVoices();
  if (voices.length !== 0) {
    resolve(voices);
  } else {
    window.speechSynthesis.addEventListener("voiceschanged", function() {
      voices = window.speechSynthesis.getVoices();
      resolve(voices);
    });
  }
});
//add all voices to list selector
allVoicesObtained.then(voices => {
  console.log("All voices:", voices);
  for(let i=0;i<voices.length;i++){
  var opt = document.createElement("option");
  opt.value= voices[i].name;
  opt.innerHTML = voices[i].name; // whatever property it has

  // then append it to the select element
  voiceSelect.appendChild(opt);
  }
}
);

  startTalking(talkButton, voiceSelect, text, face);
}

//get the bot to talk
function startTalking(talkButton, voiceSelect, text, face){
  //start the process when you click
  talkButton.addEventListener('click',()=>{
    //set the face to open
    face.src='assets/images/smiling-open.png';
    //set the text to be spoken
    let spoken = new SpeechSynthesisUtterance(text.value);
    //I dont know if there is a better way to set the voice to be used. If there is, please show me
    //I couldnt get it to work any other way
    let allVoices = window.speechSynthesis.getVoices();
    for (let i = 0; i < allVoices.length; i++) {
      if (allVoices[i].name == voiceSelect.value) {
        spoken.voice = allVoices[i];
      }
    }
    speechSynthesis.speak(spoken);
    //close the mout on end
    spoken.onend= (event) => {
      face.src='assets/images/smiling.png';
    };
  });

}



