function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1qAwiu5lv/',modelReady);
}

function modelReady()
{
    classifier.Classify(gotResults);
}
