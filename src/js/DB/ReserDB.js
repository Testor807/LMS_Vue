let data = [];
let n = 0;
let exist = true;
var rid = '';
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
var Reser_Ref = db.collection("LMS").doc("Tables").collection("Reserve");

var action = "<?=$action;?>";
var id = "<?= $id; ?>";
var str="";
if (action == "Reserve") {
    GenerateID();
}else if (action == "r_record"){
    QueryRecords();
}else if(action == "r_records"){
    ShowRecords();
}

function AddReserve() {
    var docData = {
        ApplyDate: new Date().getTime(),
        AccID: "<?=$AccID;?>",
        ISBN: "<?=$isbn;?>",
        LID: "<?=$lib;?>",
        RD: rid,
        Status:"Wait"
    }
    var query = Reser_Ref.doc().set(docData).then(() => {
        console.log("Document successfully written!");
        WindowsReplace();
    });
}

function GenerateID() {
    let x = Math.floor((Math.random() * 100000) + 1);
    rid = 'R' + x;
    var query = Reser_Ref.where("RD", "==", rid);
    query.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        n = data.length;
        ChekcIDRepeat();
    });
}

function ChekcIDRepeat() {
    if (n < 0 || n == 0) {
        AddReserve();
    } else {
        GenerateID();
    }
}
function QueryRecords(){
    var query = Reser_Ref.where("AccID", "==", "<?=$AccID;?>");
    query.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        str = JSON.stringify(data);
        WindowReplace();
    });
}
function ShowRecords(){
    Reser_Ref.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        str = JSON.stringify(data);
        WindowReplace();
    });
}
function WindowReplace() {
    var url = '../Temp/Reserve_Temp.php?action='+action+'&records='+str;
    window.location.replace(url);
}
function WindowsReplace() {
    var url = '../public/ReserveResult.php?rid=' + rid + "&lib=" + "<?=$lib;?>";
    window.location.replace(url);
}