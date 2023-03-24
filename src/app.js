const sideAIn = document.querySelector('#sideA')
const sideBIn = document.querySelector('#sideB')
const sideCIn = document.querySelector('#sideC')
const calcButton = document.querySelector('#calcButton')
const volume = document.querySelector('#volume')

calcButton.addEventListener('click', ()=>{
    work();
});

function work() {
    let sideAGood = regex(sideAIn.value)
    let sideBGood = regex(sideBIn.value)
    let sideCGood = regex(sideCIn.value)

    if(sideAGood && sideBGood && sideCGood) {
        let a = Number(sideAIn.value)
        let b = Number(sideBIn.value)
        let c = Number(sideCIn.value)
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