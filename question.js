var question_div = document.getElementById('question_div');

var choice_content  = document.createElement("div");

var question_text =localStorage.getItem('question_text');
var answer_text =localStorage.getItem('answer_text');

var question_array =JSON.parse(question_text);
var answers_array =JSON.parse(answer_text);

console.log(question_array);
console.log(answer_text);
    var array_quest=[];
    var array_answers=[];
    var array_answer_text=[];
    var array_quest_text=[];
for(let i=0;i<question_array.length;i++){
    array_quest[i] = document.createElement("div");
    array_quest_text[i] = document.createTextNode(question_array[i]);
    array_quest[i].appendChild(array_quest_text[i]);
    array_quest[i].className="question_content";
    question_div.appendChild(array_quest[i]);
}
for(let i=0;i<answers_array.length;i++){
    array_answers[i] = document.createElement("div");
    array_answer_text[i] = document.createTextNode(answers_array[i]);
    array_answers[i].appendChild(array_answer_text[i]);
    array_answers[i].className="answer_content";
    
}
for(let i=0;i<question_array.length;i++){
    for(let j=0;j<2;j++){
        array_quest[i].appendChild(array_answers[j]);
        
    }
}

    var question_content=document.getElementsByClassName('question_content');
    // question_div.appendChild(question_content);