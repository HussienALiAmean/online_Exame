
var email = document.getElementById("email");
var password = document.getElementById("password");

var local_data = localStorage.getItem('email_students');
var data_from_l_S=[];
console.log(data_from_l_S);
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
                open('index.html');
            }else{
                console.log(users_details[i]);
                console.log(i,j);
                console.log(i,j);
                console.log(users_details[j]);
                
                // break;
                //open('login.html');
            }
        }
    }
    alert('enter correct email or password');
    
}