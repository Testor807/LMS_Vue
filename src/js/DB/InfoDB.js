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
let n = 0;
var docRef = db.collection("LMS").doc("Tables").collection("Library");
var action = "<?= $action ?>";
if (action == "info") {
    GetInfo();
} else if (action == "BQ") {
    LibraryQuery();
} else if (action == "AllStock" || action == "loan_all" || action == "r_record" || action == "r_records") {
    LibQueryAll();
}

function GetInfo() {
    n = 0;
    docRef.onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
            n += 1;
        });
        if (n == 1) {
            str = JSON.stringify(data[0]);
        } else {
            str = JSON.stringify(data);
        }
        localStorage.setItem("info", str);
        WindowReplace();
    });
}

function LibraryQuery() {
    let qn = parseInt("<?=$n;?>");
    var lid = "<?=$lid;?>";
    docRef.where("LID", "==", lid).onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
        });
        qn++;
        str = JSON.stringify(data[0]);
        var url = "../Temp/Library_Temp.php?action=" + action + "&library=" + str + "&n=" + qn;
        window.location.replace(url);
    });
}

function LibQueryAll() {
    docRef.onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
        });
        str = JSON.stringify(data);
        var url = "../Temp/Library_Temp.php?action=" + action + "&library=" + str;
        window.location.replace(url);
    });
}

function WindowReplace() {
    var info = localStorage.getItem("info");
    var url = "../public/LB_info.php?query=" + encodeURIComponent(str);
    window.location.replace(url);
}