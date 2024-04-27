$(document).ready(function() {

  const firebaseConfig = {
    apiKey: "AIzaSyBgDBIeTYD9Gi3AjD7ZPXbC3spg3aMHqw8",
    authDomain: "ossmidterm.firebaseapp.com",
    databaseURL: "https://ossmidterm-default-rtdb.firebaseio.com",
    projectId: "ossmidterm",
    storageBucket: "ossmidterm.appspot.com",
    messagingSenderId: "342870939179",
    appId: "1:342870939179:web:e48cd427bb7de854b77c6e"
  };

  firebase.initializeApp(firebaseConfig);

  const likesRef = firebase.database().ref('like');

  function getLikeCount() {
    likesRef.once('value', function(snapshot) {
      const count = snapshot.val();
      $("#pressed-like").text("❤️"+count);
    });
  }

  function increaseCount() {
    likesRef.transaction(function(currentCount) {
      return (currentCount || 0) + 1;
    }, function(error, committed, snapshot) {
      if (error) {
        console.error("Transaction failed:", error);
      } else if (!committed) {
        console.log("Transaction aborted: Data could not be written to the database.");
      } else {
        console.log("Like count increased successfully.");
        getLikeCount();
      }
    });
  }

  getLikeCount();

  $("#likebtn").click(function() {
    increaseCount();
  });
});