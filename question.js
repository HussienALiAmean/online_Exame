var question_div = document.getElementById('question_div');
var query=location.search;
var rule = /([a-z]+)/g;
var names = query.match(rule);
//var fulname=names.slice(1,2);
var student_data =localStorage.getItem('email_students');
var student_datas =JSON.parse(student_data);

var choice_content  = document.createElement("div");

var question_text =localStorage.getItem('question_text');
var answer_text =localStorage.getItem('answer_text');
var ques_answer_length =localStorage.getItem('ques_answer_length');
var check_answer =localStorage.getItem('check_answer');

var check_answer_array =JSON.parse(check_answer);
var question_array =JSON.parse(question_text);
var answers_array =JSON.parse(answer_text);
var ques_answers_length =JSON.parse(ques_answer_length);
var student_name=document.createElement('div');
//var student_name_text=document.createTextNode(fulname);
//student_name.appendChild(student_name_text);
question_div.appendChild(student_name);
console.log(question_array);
console.log(answer_text);
    var array_quest=[];
    var array_answers=[];
    var array_answers_span=[];
    var array_answer_text=[];
    var array_quest_text=[];
for(let i=0;i<question_array.length;i++){
    array_quest[i] = document.createElement("div");
    array_quest_text[i] = document.createTextNode(`Question${i+1}: ${question_array[i]}`);
    array_quest[i].appendChild(array_quest_text[i]);
    array_quest[i].className="question_content";
    question_div.appendChild(array_quest[i]);
}
// for(let i=0;i<answers_array.length;i++){
//     array_answers[i] = document.createElement("div");
//     array_answer_text[i] = document.createTextNode(answers_array[i]);
//     array_answers[i].appendChild(array_answer_text[i]);
//     array_answers[i].className="answer_content";
    
// }
// for(let i=0;i<question_array.length;i++){
//     for(let j=0;j<add_Choice[i].children.length;j++){
//         array_quest[i].appendChild(array_answers[j]);
console.log(array_answers);
console.log(array_answer_text);
console.log(answers_array);
//     }
// }
var arrange=['a','b','c','d','e','f','g'];

    var array_status_answer=[];
// var answer_content=document.getElementsByClassName('answer_content');
    var question_content=document.getElementsByClassName('question_content');
    for(let i=0;i<question_content.length;i++){
        var g=0;
       console.log(question_content[i]);
        for(let j=0;j<ques_answers_length[i];j++){

            
            array_answers[g] = document.createElement("div");
            array_status_answer[g] = document.createElement("input");
            array_status_answer[g].setAttribute('type','radio');
            array_status_answer[g].setAttribute('data_answer',check_answer_array[g]);
            array_answers_span[g] = document.createElement("span");
            // array_status_answer[g].value=check_answer_array[g]
            array_answer_text[g] = document.createTextNode(`${arrange[j]}: ${answers_array[g]}`);
            array_answers_span[g].appendChild(array_answer_text[g]);
            array_answers[g].appendChild(array_status_answer[g]);
            array_answers[g].appendChild(array_answers_span[g]);
            array_answers[g].className="answer_content";
            array_status_answer[g].className="answer_checked";
            question_content[i].appendChild(array_answers[g]);
            // question_div.appendChild(question_content[i]);
            //console.log(array_answers[g]);
            g++;
        }
    }
    // question_content.appendChild(answer_content);
    // question_div.appendChild(question_content);

    var bb=document.createElement('input');
    bb.setAttribute('type','checkbox');
    bb.value='hello ';
    

    var grades=0;
    var answers_checked=document.getElementsByClassName('answer_checked');
    function submit(){
        for(let i=0;i<answers_checked.length;i++){
            console.log(answers_checked[i].checked);
            // console.log(answers_checked[i].getAttribute('data_answer'));
            console.log(check_answer_array[i]);
            if(answers_checked[i].checked == check_answer_array[i] && answers_checked[i].checked == true){
                grades++;
                console.log('good');
            }else{
                console.log('bad');
            }
        }
        document.write('your total score is '+ grades +'/'+question_content.length);
    }