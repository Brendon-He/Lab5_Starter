// expose.js

let confetti;

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Correctly select elements based on given HTML or adjust your HTML accordingly
  const imageElement = document.querySelector('section#expose img');
  const soundElement = document.querySelector('audio');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioButton = document.querySelector('section#expose button');
  const hornSelect = document.querySelector('#horn-select');
  confetti = new JSConfetti();

  setupHornChanges(hornSelect, imageElement, soundElement);
  setupVolumeControl(volumeSlider, volumeIcon, soundElement);
  setupAudioButton(audioButton, soundElement);
}

function setupHornChanges(hornSelect, imageElement, soundElement){
  hornSelect.addEventListener('change',()=>{
    const hornType = hornSelect.value;
    switch(hornType){
      case "air-horn":
        imageElement.src= "assets/images/air-horn.svg";
        soundElement.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        imageElement.src= "assets/images/car-horn.svg";
        soundElement.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        imageElement.src= "assets/images/party-horn.svg";
        soundElement.src = "assets/audio/party-horn.mp3";
        break;
    }
  });
}

function setupVolumeControl(volumeSlider, volumeIcon, soundElement){
  volumeSlider.addEventListener('input',()=>{
    const volValue = parseInt(volumeSlider.value,10);
    soundElement.volume = volValue/100;
    if(volValue==0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volValue<33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volValue<67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });
}

function setupAudioButton(audioButton, soundElement){
  audioButton.addEventListener('click',()=>{
    const hornSelect = document.querySelector('#horn-select');
    if(hornSelect.value === 'party-horn'){
      confetti.addConfetti();
    }
    soundElement.play();
  });
}