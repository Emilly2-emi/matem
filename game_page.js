
	player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	player1Score = 0;
	player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

function send() {
	getn1 = document.getElementById("n1").value;
	getn2 = document.getElementById("n2").value;
	actualAnswer=parseInt(getn1)*parseInt(getn2);
   
	console.log();

    questionn1 = "<h4 id='n1Display'> P. "+getn1+"*"+getn2+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  questionn1 + input_box + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("n1").value = "";
document.getElementById("n2").value = "";

}


question_turn = "player1";
answer_turn = "player2";


function check(){
getAnswer=document.getElementById("inputCheckBox").value;
if(getAnswer==actualAnswer)
{
	if(answer_turn=="player1")
	{
		playe1Score=player1Score +1;
		document.getElementById("player1Score").innerHTML=playe1Score;
	}
	else
	{
		playe2Score=player2Score+1;
		document.getElementById("player2Score").innerHTML=playe2Score;
	}
}
if(question_turn=="player1")
{
	question_turn="player2"
	document.getElementById("playerQuestion").innerHTML="Turno de pergunta -"+player2Name;
}
else{
	question_turn="player1"
	document.getElementById("playerQuestion").innerHTML="Turno de pergunta -"+ player1Name;
}
if(answer_turn=="player1")
{
	answer_turn="player2"
	document.getElementById("playerAnswer").innerHTML="Turno de resposta -"+player2Name;
}
else{
	answer_turn="player1"
	document.getElementById("playerAnswer").innerHTML="Turno de resposta -"+ player1Name;
}
document.getElementById("output").innerHTML="";
}