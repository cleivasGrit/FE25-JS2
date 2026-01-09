const multiply = a => b => a*b;

console.log(multiply(10)(5))

const triple = multiply(3);
console.log(triple(1))
console.log(triple(90))
console.log(triple(347468))

const resize = unit => size => ()=> {
    const div = document.querySelector('#resize');
    div.style.width = size+unit;
}


// function resize(unit){
//     return function(size){
//         return function(){
//             const div = document.querySelector('#resize');
//             div.style.width = size+unit;
//         }
//     }
// }


const resizePercentage = resize('%');
resizePercentage(5)
const resizePx = resize('px');
resizePx(300);

const btns = document.querySelectorAll('button')
btns[0].addEventListener('click', resizePx(1000) )
btns[1].addEventListener('click', resizePx(3))




