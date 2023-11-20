console.log("connected");

const comp1Prefix = document.querySelector("#comp1Prefix");
const comp1Name = document.querySelector("#comp1Name");
const comp1Score = document.querySelector("#comp1Score");

const comp2Prefix = document.querySelector("#comp2Prefix");
const comp2Name = document.querySelector("#comp2Name");
const comp2Score = document.querySelector("#comp2Score");

const bracketInfo = document.querySelector("#bracketInfo");
const roundInfo = document.querySelector("#roundInfo");

function fetchInformation(direction, element){
    fetch(direction)
    .then((responese)=>responese.text())
    .then((text)=>{
        element.textContent = text;
    })
}

const fetchUrl = './archivos-datos/';

let comp1PrefixFile =   'twitter_caster1.txt';
let comp1NameFile =     'Nombre_Player_1.txt';
let comp1ScoreFile =    'Score_Player_1.txt';

let comp2PrefixFile =   'twitter_caster2.txt';
let comp2NameFile =     'Nombre_Player_2.txt';
let comp2ScoreFile =    'Score_Player_2.txt';

let bracketInfoFile =   'Game.txt';
let roundInfoFile =     'Ronda.txt';



fetchInformation(fetchUrl + comp1PrefixFile, comp1Prefix);
fetchInformation(fetchUrl + comp1NameFile, comp1Name);
fetchInformation(fetchUrl + comp1ScoreFile, comp1Score);

fetchInformation(fetchUrl + comp2PrefixFile, comp2Prefix);
fetchInformation(fetchUrl + comp2NameFile, comp2Name);
fetchInformation(fetchUrl + comp2ScoreFile, comp2Score);

fetchInformation(fetchUrl + bracketInfoFile, bracketInfo);
fetchInformation(fetchUrl + roundInfoFile, roundInfo);
