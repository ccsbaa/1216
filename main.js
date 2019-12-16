// Paste the code from Firebase 
var config = {
apiKey: "AIzaSyC63Cie2fGq-6wII-ug_bqdHURMuLAlUqg",
    authDomain: "project-6033113541139384489.firebaseapp.com",
    databaseURL: "https://project-6033113541139384489.firebaseio.com",
    projectId: "project-6033113541139384489",
    storageBucket: "project-6033113541139384489.appspot.com",
    messagingSenderId: "758861124570"
    
    
  
    
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});