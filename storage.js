
var email = document.getElementById("email");
var password = document.getElementById("password");
var email_student = document.getElementById("email_student");
var password_student = document.getElementById("password_student");

var student_data = localStorage.getItem('student_data');
var local_data = localStorage.getItem('email_students');
var data_from_l_S=[];
var data_student=[];
console.log(data_from_l_S);
function setStudent()
   { 
    
    
    //  console.log(json.parse(local_data));
    
    if(student_data == null){
        data_student.push(password_student.value);
        data_student.push(email_student.value);
         localStorage.setItem("student_data",JSON.stringify(data_student));
    }else{
        data_student=JSON.parse(student_data);
       
            if(data_student.indexOf(email_student.value) == -1){
               
                data_student.push(password_student.value);
                data_student.push(email_student.value);
                localStorage.setItem("student_data",JSON.stringify(data_student));
              
                alert("Data Saved Suucessfully");
            }else{
                
                alert('this email is already exist enter another one');
               
            }
        
    }
    
   
   

        // data_from_l_S.indexOf()
    
}

function setData()
   { 
    
    // localStorage.clear();
    var json = '{"users":{"test1":""}}';
    var obj  = JSON.parse(json);
    var newuser = 'test4';
    obj.users[email.value] = `${password.value}`;
    
    JSON.stringify(obj);
    //=> {"users":{"test1":{},"test2":{},"test3":{}}}
   
     console.log(local_data);
    //  console.log(json.parse(local_data));
    
    if(local_data == null){
        data_from_l_S.push(password.value);
         data_from_l_S.push(email.value);
         localStorage.setItem("email_students",JSON.stringify(data_from_l_S));
    }else{
        data_from_l_S=JSON.parse(local_data);
       
            if(data_from_l_S.indexOf(email.value) == -1){
               
                data_from_l_S.push(password.value);
                data_from_l_S.push(email.value);
                localStorage.setItem("email_students",JSON.stringify(data_from_l_S));
              
                alert("Data Saved Suucessfully");
            }else{
                
                alert('this email is already exist enter another one');
               
            }
        
    }
    
   
   

        // data_from_l_S.indexOf()
    
}

var students = [];

students.push(localStorage.getItem('email_students'));
console.log(students);


var email_login = document.getElementById('email_login');
var pass_login = document.getElementById('pass_login');
var email_student_login = document.getElementById('email_student_login');
var pass_student_login = document.getElementById('pass_student_login');
var studentName;

           
          

function student_login(){
    // console.log(data_from_l_S);
    var student_details = [];
    if(data_student == null){
        alert('please signup');
    }else{
          student_details =JSON.parse(student_data);
        // console.log(JSON.parse(local_data));
        for(let i=0;i<student_details.length;i++){
            var j=i-1;
            console.log(student_details.length);
            if(i != 0){
                j=i-1;
            }
            if(email_student_login.value == student_details[i] && pass_student_login.value == student_details[j]){
                // alert('you can login');
                studentName=email_student_login.value;
                open('questions.html','self');

            }
           else {
            //     console.log(student_details[i]);
            //     console.log(email_student_login.value,pass_student_login.value);
            //     console.log(i,j);
            //     console.log(student_details[j]);
                
            //     // break;
            //     //open('login.html');
            let alerts=document.getElementById('alert');
           
            setTimeout(function(){
                alerts.setAttribute('style','display:block;');
            },500);
             // showMessage;
              setTimeout(function(){
                alerts.setAttribute('style','display:none;');
              },2000);
           // clearTimeout(showMessage);
            }
        } 
    }
    
}

function login(){
    console.log(data_from_l_S);
    var users_details = [];
    if(data_from_l_S == null){
        alert('please signup');
    }else{
          users_details =JSON.parse(local_data);
        // console.log(JSON.parse(local_data));
        for(let i=0;i<users_details.length;i++){
            var j=i-1;
            console.log(users_details.length);
            if(i != 0){
                j=i-1;
            }
            if(email_login.value == users_details[i] && pass_login.value == users_details[j]){
                // alert('you can login');
                open('index.html','self');
            }
             else {
            //     console.log(users_details[i]);
            //     console.log(i,j);
            //     console.log(i,j);
            //     console.log(users_details[j]);
                
            let alerts=document.getElementById('alert');
           
            setTimeout(function(){
                alerts.setAttribute('style','display:block;');
            },500);
             // showMessage;
              setTimeout(function(){
                alerts.setAttribute('style','display:none;');
              },2000);
               // clearTimeout(showMessage);
                // alert('enter correct email or password');
                 //window.location.reload();
             }
        }
    }
    
}