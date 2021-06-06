//details
let t1name = document.querySelector('span.team-name.t1-name');
let t1score = document.getElementById('t1-score');
let t2name = document.querySelector('span.team-name.t2-name');
let t2score = document.getElementById('t2-score');

let score =[0, 1, 2, 3, 4, 5, 6];
let turn;
//team 1 details
let team1= {
    name: "India",
    runs: [],
    score: 0
}
//team 2 details
let team2= {
    name: "Australia",
    runs: [],
    score: 0
}
//onload functions
window.onload=()=>{
    //whoe batting
    batting();
    //display in button
    updateBtn();
    //update scores n names
    updateName();
    updateScore();
}
//toss
function batting()
{
    turn = Math.floor(Math.random()*2);
}
//update button text
function updateBtn()
{
    let btnName= document.getElementById('bttn');
    //toss
    if(turn==0)
    {
        btnName.textContent=`${team1.name} batting`;
    }
    else
    {
        btnName.textContent=`${team2.name} batting`;
    }
    
    let result = document.getElementById("result");
    //game over or not
    if(team1.runs.length==6 && team2.runs.length==6)
    {
        btnName.remove();
        //check match draw
        if(team1.score==team2.score)
        {
            result.textContent="match draw";
        }
        else if(team1.score>team2.score)
        {
            result.textContent=`${team1.name} wins`;
        }
        else
        {
            result.textContent=`${team2.name} wins`;
        }
    }
    //change turn
    else
    {
        turn = team1.runs.length==6 ? 1: team2.runs.length==6 ? 0: turn;
    }
}
//update scores n names
function updateName()
{
    t1name.innerHTML=team1.name;
    t2name.innerHTML=team2.name;
}
function updateScore()
{
    t1score.innerHTML=team1.score;
    t2score.innerHTML=team2.score;
}
function buttonClick()
{
    let value = score[Math.floor(Math.random()*score.length)];
    if(value==5)
    {
        value="W";
    }
    if(turn==0)
    {
        team1.runs.push(value);
        team1.score=calculateScore(team1.runs);
        updateScore();
        updateBtn();
        updateRuns();
    }
    else
    {
        team2.runs.push(value);
        team2.score=calculateScore(team2.runs);
        updateScore();
        updateBtn();
        updateRuns();
    }
}
function calculateScore(runs)
{
    return runs.map(num => {
        return num=="W" ? 0: num;
    }).reduce((total, num) => total+num);
}
function updateRuns()
{
    let child1 = document.getElementById("t1-parent").children;
    let child2 = document.getElementById("t2-parent").children;
    team1.runs.forEach((element, index) => {
        child1.item(index).innerText=element;
    });
    team2.runs.forEach((element, index) => {
        child2.item(index).innerText=element;
    });
}