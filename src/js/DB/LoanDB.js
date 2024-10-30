var action = "<?=$action;?>";
var id = "<?=$AccID;?>";
const records = [];
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
var Loan_ref = db.collection("LMS").doc("Tables").collection("LoadRecord");

if (action == "record") {
    LoanRecord();
} else if (action == "history") {
    LoanHistory();
}else if(action == 'loan' || action == 'loan_all'){
    QueryAllLoan();
}

function LoanRecord() {
    var query = Loan_ref.where("AccID", "==", id).where("Status", "==", "Unreturn");
    query.onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
            records.push(doc.data());
        });
        str = JSON.stringify(records);
        Show();
    });
}

function LoanHistory() {
    var query = Loan_ref.where("AccID", "==", id).where("Status", "==", "Returned");
    query.onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
            records.push(doc.data());
        });
        str = JSON.stringify(records);
        Show();
    });
}

function QueryAllLoan() {
    Loan_ref.onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
            records.push(doc.data());
        });
        str = JSON.stringify(records);
        Show();
    });
}

function Show() {
    var url = "../Temp/Loan_Temp.php?action=" + action + "&records=" + str;
    window.location.replace(url);
}