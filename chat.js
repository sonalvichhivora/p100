// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyC9T79x9mYcvgOzhAzY1nklsO8zBu0IrrQ",
    authDomain: "cute-bird-26371.firebaseapp.com",
    projectId: "cute-bird-26371",
    storageBucket: "cute-bird-26371.appspot.com",
    messagingSenderId: "395347904557",
    appId: "1:395347904557:web:213ea5447c64a1e5d250a4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



