const gameArea = document.querySelector('.gameArea');
const btn = document.createElement('button');
btn.textContent = "start";
gameArea.append(btn);

btn.addEventListener('click', (e)=>{
    console.log(e);
    fetch('quizData.json')
    .then(response => {
        return response.json();
    })
    .then(data =>{
        console.log(data);
    })
})