username = localStorage.getItem("Username");
document.getElementById("welcome_tag").innerHTML = "Welcome to Let's Chat!, " + username;

var firebaseConfig = {
      apiKey: "AIzaSyDxpNOwfdeRAzcoDnj9shxWeVJwGtd7gMw",
      authDomain: "let-schat-2f675.firebaseapp.com",
      databaseURL: "https://let-schat-2f675-default-rtdb.firebaseio.com",
      projectId: "let-schat-2f675",
      storageBucket: "let-schat-2f675.appspot.com",
      messagingSenderId: "278260621012",
      appId: "1:278260621012:web:cd8f8b9eb9547f2452e541"
};
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name_input").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "letschat_message_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trending_rooms_list").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>"
      document.getElementById("trending_rooms_list").innerHTML += row;
      // End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_message_page.html"; 
}

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}