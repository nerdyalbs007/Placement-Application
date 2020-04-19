// db.collection("company_div").get().then((snapshot)=>{
//     snapshot.docs.forEach(doc=>{
//         if(doc.exists)
//         {
            
//         }
//     });
// });

var firebaseConfig = {
    apiKey: "AIzaSyC1uQPhr2sYzoz4R-yCkDUMl9Jr1g-ru60",
    authDomain: "web-tech-16df7.firebaseapp.com",
    databaseURL: "https://web-tech-16df7.firebaseio.com",
    projectId: "web-tech-16df7",
    storageBucket: "web-tech-16df7.appspot.com",
    messagingSenderId: "147239743877",
    appId: "1:147239743877:web:34fa4ebf3ec96aa46654ec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();


// app.innerHTML="Help";

const recents=document.getElementById("recents");

function renderCompany(doc,i){
    let li= document.createElement("li");
    let num=document.createElement("span");
    num.textContent=i;
    let company_name1=document.createElement("span");
    let application=document.createElement("span");
    company_name1.setAttribute("class","hello")
    company_name1.setAttribute("style","float-left")
    application.setAttribute("class","hello")
    application.setAttribute("style","float-left")
    li.setAttribute("style","float-left");
    company_name1.textContent=doc.data().company_name;
    application.textContent=doc.data().application_status;
    if(application.textContent=="Rejected"){
        application.setAttribute("class","rejected")
    }
    else if(application.textContent=="Selected"){
        application.setAttribute("class","selected")
    }
    else{
        console.log("Hi")
    }

    li.appendChild(company_name1);
    li.appendChild(application);

    recents.appendChild(li);
}


db.collection("applied").get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        var i=1;
        renderCompany(doc,i);
        i++;
        console.log(i)

        
        // console.log(doc.data().name);
        // upload1();

        // var company_name1=doc.data().company_name;
        // var applied=doc.data().application_status;

        
        
        // console.log(db.collection("company").doc("name"))
        // var docRef = db.collection("company").doc("Microsoft");

        //     docRef.get().then(function(doc) {
        //         if (doc.exists) {
        //             console.log("Document data:", doc.data());
        //         } else {
        //             // doc.data() will be undefined in this case
        //             console.log("Hello");
        //             upload1(company_name,description,duration,location,start_date,stipend);           
        //             posted();
        //         }
        //     }).catch(function(error) {
        //         console.log("Error getting document:", error);
        //     });
        // var company=document.getElementById("company_name");
        // company.innerHTML+=company_name1;
        // var app=document.getElementById("application_status");
        // app.innerHTML+=applied;
        // console.log(company_name,description,duration,location,start_date,stipend);
        
        // upload1(company_name,location,stipend);
    });
});
function scroll() {
    console.log("OOO")
        $('html, body').animate({
          scrollTop: $("#recents").offset().top
        }, 1000);
      };
