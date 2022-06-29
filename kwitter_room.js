room_name="";

const firebaseConfig = {
  apiKey: "AIzaSyC7fAfIK4P_9v7S6PZVoctntLDr90FerCQ",
  authDomain: "kwitter2-4e006.firebaseapp.com",
  databaseURL: "https://kwitter2-4e006-default-rtdb.firebaseio.com",
  projectId: "kwitter2-4e006",
  storageBucket: "kwitter2-4e006.appspot.com",
  messagingSenderId: "657822818052",
  appId: "1:657822818052:web:4458910ee13b4430c8ba51"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

      function getData()
      {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

             
            console.log ("Room_name -" + Room_names);
            row= "<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"
            + Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
      });});}  
      getData();
      
       
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name" , name);
            window.location = "kwitter_page.html"; 
      }

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "kwitter.html";
      }
    
      

      function addRoom()
      {
            room_name = document.getElementById("room_name").value;
          
            firebase.database().ref("/").child(room_name).update({
                  purpose: "adding room name"
            });
            localStorage.setItem("room_name" , room_name);
            window.location = "kwitter_page.html";
      }