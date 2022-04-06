// const wheelBtn = document.querySelector('#wheel-btn');
const wheel = document.querySelector('#wheel');
const spins = document.querySelector('#spins');
// const infoStart = document.querySelector('#info-start');
const information = document.querySelector('#information');
const firstStep = document.querySelector('#first-step');
const secondStep = document.querySelector('#second-step');
const wheelSpinBtns = document.querySelectorAll('.btn-spin');

let spinActive = false;

const rotation = () => {
    if (wheel.classList.contains('second-spin') &&  wheel.classList.contains('first-spin')){
        return;
    }else if(wheel.classList.contains('first-spin') && !spinActive){
        wheel.classList.add('second-spin');
        spins.innerHTML = '0';
        spinActive = true;
        setTimeout(()=>{
            information.childNodes[1].classList.remove('active')
            information.childNodes[2].classList.add('active')
        }, 3100)
        setTimeout(()=>{
            firstStep.classList.remove('active');
            secondStep.classList.add('active');
        }, 4000)
    }else{
        wheel.classList.add('first-spin');
        spins.innerHTML = '1';
        spinActive = true;
        setTimeout(()=>{
            information.childNodes[0].classList.remove('active');
            information.childNodes[1].classList.add('active');
            spinActive = false;
        }, 3100)
    }
}

for(let btn of wheelSpinBtns){
    btn.addEventListener('click', rotation)
}

// infoStart.addEventListener('click', () =>{
//
//     wheel.classList.add('first-spin');
//     spins.innerHTML = '1';
//     spinActive = true;
//     setTimeout(()=>{
//         information.childNodes[0].classList.remove('active');
//         information.childNodes[1].classList.add('active');
//         spinActive = false;
//     }, 3100)
// });

// wheelBtn.addEventListener('click', () =>{
//
//     if (wheel.classList.contains('second-spin') &&  wheel.classList.contains('first-spin')){
//         return;
//     }else if(wheel.classList.contains('first-spin') && !spinActive){
//         wheel.classList.add('second-spin');
//         spins.innerHTML = '0';
//         spinActive = true;
//         setTimeout(()=>{
//             information.childNodes[1].classList.remove('active')
//             information.childNodes[2].classList.add('active')
//         }, 3100)
//         setTimeout(()=>{
//             firstStep.classList.remove('active');
//             secondStep.classList.add('active');
//         }, 4000)
//     }else{
//         wheel.classList.add('first-spin');
//         spins.innerHTML = '1';
//         spinActive = true;
//         setTimeout(()=>{
//             information.childNodes[0].classList.remove('active');
//             information.childNodes[1].classList.add('active');
//             spinActive = false;
//         }, 3100)
//     }
// });


