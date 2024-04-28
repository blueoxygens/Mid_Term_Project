$(document).ready(function() {

  const firebaseConfig = {
    apiKey: "*",
    authDomain: "ossmidterm.firebaseapp.com",
    databaseURL: "https://ossmidterm-default-rtdb.firebaseio.com",
    projectId: "ossmidterm",
    storageBucket: "*",
    messagingSenderId: "*",
    appId: "*"
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