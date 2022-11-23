
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
        data_from_l_S.push(password.value);
         data_from_l_S.push(email.value);
         localStorage.setItem("email_students",JSON.stringify(data_from_l_S));
    }

    // data_from_l_S.push(local_data);
    
    console.log(data_from_l_S[0]);
    // data_from_l_S.push(localStorage.getItem('email_students'));
    //  data_from_l_S= [localStorage.getItem('email_students')];
    // data_from_l_S+= [`,{"username": ${email.value},"passwored": ${password.value}}`];
    //  JSON.parse(data_from_l_S);
    // json.parse()


     alert("Data Saved Suucessfully");
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
            if(email_login.value == users_details[i]){
                // alert('you can login');
                open('index.html');
            }
        }
    }

    
}