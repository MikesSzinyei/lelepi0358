/*
File: app.js
Author: Szinyei Mikes
Copyright: 2023, Szinyei Mikes
Group: Szoft I-2 N
Date: 2023-03-24
Github: https://github.com/MikesSzinyei/
Licenc: GNU GPL 
*/

const edgeAIn = document.querySelector('#edgeA')
const edgeBIn = document.querySelector('#edgeB')
const edgeCIn = document.querySelector('#edgeC')
const calcButton = document.querySelector('#calcButton')
const volume = document.querySelector('#volume')

calcButton.addEventListener('click', ()=>{
    work();
});

function work() {
    let edgeAGood = regex(edgeAIn.value)
    let edgeBGood = regex(edgeBIn.value)
    let edgeCGood = regex(edgeCIn.value)

    if(edgeAGood && edgeBGood && edgeCGood) {
        let a = Number(edgeAIn.value)
        let b = Number(edgeBIn.value)
        let c = Number(edgeCIn.value)
        volume.value = calculate(a,b,c)


    } else {
        alert('Hiba!')
    }
    
}

function calculate(a,b,c) {
    return a*b*c

}


function regex(input) {
    let result = input.match(/^[0-9]+$/)
    return result
}