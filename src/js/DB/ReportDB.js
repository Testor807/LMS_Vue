let data = [];
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
var login = false;
var str = "";
var action = "<?=$action;?>";
var Report_Ref = db.collection("LMS").doc("Tables").collection("BookReport");
if (action == "report") {
    ShowReports();
}

function ShowReports(){
    Report_Ref.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        str = JSON.stringify(data);
        WindowReplace();
    });
}

function WindowReplace(){
    console.log(str);
    var url = "../Temp/Report_Temp.php?action="+action+"&reports="+(str);
    window.location.replace(url);
}