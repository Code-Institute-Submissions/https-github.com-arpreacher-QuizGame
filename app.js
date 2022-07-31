const quizData = [

    {
        capitalCities: "What is the captial of Ireland?",
        choices: ['Dublin',
            'Warsaw',
            'London'],
        answer: 0
    },

    {
        capitalCities: "What is the captial of India?",
        choices: ['Madrid',
            'Berlin',
            'Delhi'],
        answer: 2
    },

    {
        capitalCities: "What is the captial of Poland?",
        choices: ['Zagreb',
            'Warsaw',
            'Canberra'],
        answer: 1
    },

    {
        capitalCities: "What is the captial of Australia?",
        choices: ['Canberra',
            'Vienna',
            'Buenos Aires'],
        answer: 0
    },

    {
        capitalCities: "What is the captial of Germany?",
        choices: ['Canberra',
            'Berlin',
            'San Jose'],
        answer: 1
    },

    {
        capitalCities: "What is the captial of Ethiopia?",
        choices: ['Bamako',
            'Monrovia',
            'Addis Ababa'],
        answer: 2
    }


];



function main() {
    const quizValue = document.getElementById('quiz')
    let nStr = '';

    quizData.forEach(function (quiz, qIndex) {

        let correctAns = '';

        const choiceOrd = arbRange(quiz.choices.length);

        quiz.choices.forEach(function (ans, aIndex) {
            correctAns += `
                <li style="order: ${choiceOrd[aIndex]}">
                    <label>
                    <input type="radio" name="choices:${qIndex}" isAns="${quiz.answer === aIndex}" >
                    ${ans}
                        </label>
                    </li>
            `;

        })

        /*console.log(quiz.capitalCities);
        console.log(quiz.answer);*/
        nStr += `

            <form>
            <h2>${quiz.capitalCities}</h2>
            <div class="notify"></div>
            <ul>
                ${correctAns}
            </ul>
            <button type="submit">Submit</button>
            </form>


        `
    })

    // Add to the DOM
    quizValue.innerHTML = nStr;
    quizValue.addEventListener('submit', function(event) {
        event.preventDefault() //page won't refresh on submit
        //console.log(event);
        const alert = event.target.querySelector('div.notify')
        const inputs = event.target.querySelector("input[type=radio]:checked")
        if (inputs === null) {
            alert.innerHTML = 'Please choose an answer'
            } else if (event.target.querySelector("input[type=radio]:checked").answer != "true") {
                alert.innerHTML = 'Correct answer'
            }
                            
            
       //console.log(document.getElementById('quiz'))
       
       console.log(inputs)
      
    })

    
}

main();

function arb(x) {

 const n = Math.random() * x
 return Math.floor(n)

}

function arbRange(n) {
    const arr = []
    for (let i=0; i<n;i++) {
        arr.push(i)
    }
    const newArr = []
    while(arr.length > 0) {
        const rIndex = arb(arr.length)
        const rNumber = arr[rIndex]
        newArr.push(rNumber)
        arr.splice(rIndex, 1)
    }
    //console.log(arr)
    return newArr

}

//console.log(arbRange(5));