let btn = document.querySelector('button');


btn.addEventListener('click',() =>{
    let randomColor = getRandomColor();
    let h3 = document.querySelector('h3');
    h3.innerText = randomColor;
    console.log(randomColor);


    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
})

function getRandomColor (){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `RGB(${r},${g},${b})`;
    return color;
}