Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera')

function take_snapshot()
{
    Webcam.snap(function(data_url){
     document.getElementById("result").innerHTML='<img id="capture_image"src="'+data_url+'"/>';
            });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6OhDMWB9Z/model.json',modelLoaded);
function speak() {
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    speak_data_2="the second prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function modelLoaded(){
    console.log('Model Loaded!')
}
function check(){
img =document.getElementById('capture_image');
classifier.classify(img,gotResult);
}
function gotResult(error,result)
{
    if(error){
        console.error(error)
    }
    else{
        console.log(result);
      document.getElementById("result_emotion_name").innerHTML=result[0].label; 
      document.getElementById("result_emotion_name2").innerHTML=result[1].label; 
      prediction_1=result[0].label;
      prediction_2=result[1].label;
      speak();
      if(result[0].label=="victory")
      {
document.getElementById("update_emoji").innerHTML="&#9996";
      }
      if(result[0].label=="like")
      {
document.getElementById("update_emoji").innerHTML= "&#128532";
      }
      if(result[0].label=="awesome")
      {
document.getElementById("update_emoji").innerHTML="&#128545";
      }

      if(result[0].label=="dislike")
      {
document.getElementById("update_emoji").innerHTML="&#";
      }
      if(result[0].label=="hi")
      {
document.getElementById("update_emoji").innerHTML= "&#128532";
      }
      if(result[0].label=="victory")
      {
document.getElementById("update_emoji2").innerHTML="&#9996";
      }
      if(result[0].label=="like")
      {
document.getElementById("update_emoji2").innerHTML= "&#128077";
      }
      if(result[0].label=="awesome")
      {
document.getElementById("update_emoji2").innerHTML="&#128076";
      }

      if(result[0].label=="dislike")
      {
document.getElementById("update_emoji2").innerHTML="&#128078";
      }
      if(result[0].label=="hi")
      {
document.getElementById("update_emoji2").innerHTML= "&#128400";
      }
    }
}