db.collection("student").get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        var name=doc.data().full_name;
        var roll=doc.data().roll_no;
        // var branch=doc.data().branch;
        bla(roll,name);
        console.log(name);
        // console.log(roll);
    })
})


function bla(roll,name){
db.collection("company").get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        // console.log(doc.data().name);
        // upload1();
        
        var name1=name;
        // var branch1=branch;
        var roll1=roll;
        var company_name=doc.data().name;
        var description=doc.data().description;
        var duration=doc.data().duration;
        var location=doc.data().location;
        var start_date=doc.data().start_date;
        console.log(start_date)
        var stipend=doc.data().stipend;
        // console.log(db.collection("company").doc("name"))
        var docRef = db.collection("company").doc("Microsoft");

            docRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("Hello");
                    upload1(company_name,description,duration,location,start_date,stipend,roll1,name1);           
                    posted();
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        // console.log(company_name,description,duration,location,start_date,stipend);
        
        // upload1(company_name,location,stipend);
    });
});
}


// document.getElementById("button").addEventListener("click",clicked);

// function clicked(){
//     console.log("clicked");
// }

// var docRef = db.collection("company").doc();
// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });


function upload1(company_name,description,duration,location,start_date,stipend,roll1,name1)
      {

            // if(db.collection("company").doc.data.div1!=div1)
            // {
            firebase.firestore().collection("company_div").doc().set({

                
                div1:'<div style="width:400px;height:300px;margin-top:50px; float:left; padding-left:100px; margin-right:100px; margin-left:50px" class="card text-white bg-dark o-hidden content">'
                            +'<div class="card-body">'
                                    +'<div class="card-body-icon">'
                                        +'<i class="material-icons" style="font-size:100px;padding-top: 25px;"></i>'
                                    +'</div>'
                                +'<h2><span id="titlename">Company Name: '+company_name+'</span></h2>' 
                                // +'<p >Email: '+getEmail +'</p>'
                                  +'<ul>'
                                +    '<li style="padding-top:10px;">Description: '+description+'</li>'
                                +    '<li style="padding-top:10px; ">Duration: '+duration+'</li>'
                                +    '<li style="padding-top:10px; ">Location: '+location+'</li>'
                                +    '<li style="padding-top:10px; ">Start Date: '+start_date+'</li>'
                                +    '<li style="padding-top:10px; ">Stipend: '+stipend+'</li>'
                                +      '</ul>'
                                +'<button onclick=clicked("'+company_name+'","'+roll1+'","'+name1+'") class="card-body float-right" id="button" style="background-color: white;color: black;border: 2px solid #555555;; border-radius:10px;margin-right:45px; margin-top:0px; padding:10px;">Apply Now</button>'
                            +'</div>'
                        // +'<a class="card-footer text-white clearfix small z-1" onclick=myFunction("'+project_name+'","'+getEmail+'")>'
                        
                        +'<span class="float-right">'
                        +'</span>'
                        +'</a>'
                    +'</div>',

                    });
                    
                    
}

function upload(){
                // Your web app's Firebase configuration
     
                // const db=firebase.firestore();

                //get elements
                // var uploader = document.getElementById('uploader');
                var fileButton = document.getElementById('fileButton');

                fileButton.addEventListener('change', function(e) {
                    //get file
                    var fyle = e.target.files[0];
                    //create storage ref
                    var storageRef = firebase.storage().ref('resume/' + fyle.name);
                    console.log("done maybe");
                    //upload file
                    var task = storageRef.put(fyle);
                    //update progress bar
                });
}

    //   }
function clicked(x,roll1,name1){
    console.log(name1);
    // console.log("Clicked",+company_name);
    firebase.firestore().collection("applied").doc(roll1).set({

        company_name:x,
        application_status:"In Progress",
        roll_no:roll1,
        name:name1,
        viewbtn:'<input type="button" onclick=viewfunc("'+roll1+'") class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" value="Display" id="dispButton"/><div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><embed id="resume" type="application/pdf" style="width: 100%; height: 90vh;"></embed></div></div></div>',
        
        // branch:branch1
        btn:'<button type="button" class="btn btn-primary" style="margin-right:10px" onclick=myfunc("'+roll1+'")>Select</button>'
        +'<button type="button" class="btn btn-primary" onclick=myfuncr("'+roll1+'")>Reject</button>'
            });
    alert("Application for "+x+" has been sent");
    console.log(x);
    console.log(doc().id);
    button=document.getElementById("button");
    button.innerHTML="Applied";
}
function posted(){
    firebase.firestore().collection("company_div").onSnapshot(function(querySnapshot) {
        var cities = [];
        
       console.log("lalalalalala");
     
            querySnapshot.forEach(function(doc) {
            div = doc.data().div1;
            if(!cities.includes(div))
            cities.push(div);
            console.log("lol")
          //  console.log( getdate.push(doc.data().expiration)); 
                document.getElementById("all_companies").innerHTML=cities;
            //    console.log(cities)
            });
     
           
        })
    }
    // db.collection("company_div").get().then((snapshot)=>{
    //     snapshot.docs.forEach(doc=>{
    //         if(doc.data().div1.exists)
    //         {
    //             console.log("Exists")
    //         }
    //         else{
    //             // document.getElementById("all_companies").innerHTML+=div;
    //             console.log("False")
    //         }
    //     });
    // });
       