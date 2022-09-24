
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBcnklNywBE7qlB8bN8fiB-H48_NfKxI7g",
      authDomain: "kwitter-a7b1b.firebaseapp.com",
      databaseURL: "https://kwitter-a7b1b-default-rtdb.firebaseio.com",
      projectId: "kwitter-a7b1b",
      storageBucket: "kwitter-a7b1b.appspot.com",
      messagingSenderId: "82321889700",
      appId: "1:82321889700:web:d923f2e27a38971f42c931",
      measurementId: "G-NQPFZCWF8M"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
