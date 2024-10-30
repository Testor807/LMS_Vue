let data = [];
var str = "";
const firebaseConfig = {
    apiKey: "AIzaSyBEh1u6MzDrqwIG1v5hVj9lAVV-L5oZeOg",
    authDomain: "lms1-f35b6.firebaseapp.com",
    projectId: "lms1-f35b6",
    storageBucket: "lms1-f35b6.appspot.com",
    messagingSenderId: "738390066815",
    appId: "1:738390066815:web:e8ebb8e7e27c0fc929a14a",
    measurementId: "G-98Z76SNL3Q"
  };
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var Staff_ref = db.collection("LMS").doc("Tables").collection("Member");
var action = "<?=$action;?>"
StaffIn();

function StaffIn() {
    var id = "<?=$AccID;?>";
    var query = Staff_ref.where('AccID', '==', id);
    query.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        str = JSON.stringify(data);
        WindowReplace();
    });
}

function WindowReplace() {
    var url = '../Temp/Member_Temp.php?action=' + action + '&info=' + str;
    window.location.replace(url);
}