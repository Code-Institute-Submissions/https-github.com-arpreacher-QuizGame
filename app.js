const quizData = [

    {

        "country": "Ireland",
        "city": "Dublin"
    },

    {
        "country": "Australia",
        "city": "Canberra"

    },

    {
        "country": "Botswana",
        "city": "Gaborone"
    },
           
    {
        "country": "Cayman Islands",
        "city": "George Town"
    },
    {
        "country": "Central African Republic",
        "city": "Bangui"
    },
    
    {
        "country": "Zimbabwe",
        "city": "Harare"
    }

]
/*for(let i=0; i<100; i++) {
    
    quizData.push(ran(0,1000));
}*/

console.log(quizData.length);

function loopArray() {
    for (let i = 0; i < 10; i++) {
        const ind = Math.floor(Math.random() * quizData.length);
        const val = quizData[ind];
        console.log(ind, val);

        document.getElementById("output").innerHTML += val.country + ' ' + val.city + '<br />';
        /*document.getElementById("city").innerHTML += '<br />' + val.city + '<br />'; */


        q = `The capital city of ${val.country} ?`
        
        /*var answer = val.city */
        /*document.getElementById('question' + [i]).textContent = q */
        
          
            
        
        /*console.log(quizData[i].country + val.city + ind)     */
    }
 
}


function getCity(){
    for (let i = 0; i < 5; i++) {
        const ind = Math.floor(Math.random() * quizData.length);
        const val = quizData[ind];
        console.log(ind, val);
  
        document.getElementById("city").innerHTML += val.city + '<br />';
}
}


function init() {
    const quizEl = document.getElementById('quiz')

    let quizStr = ''

    for (let i = 0; i < 6; i++) {
        const ind = Math.floor(Math.random() * quizData.length);
        const val = quizData[ind];
        let answerStr = ''
        console.log(ind);
        
        /*console.log(`The capital city of ${val.country}`);*/

        quizData.forEach(function(answer, aIndex) {
            console.log(answer.city);
            answerStr += ` 
                <li>
                    <label>
                    <input type="radio" name="questions-${ind}">
                        ${answer.city}
                    </label>
                </li>
            
            `               
        })


        quizStr += `
        <form>
            <h1>The capital city of ${val.country} ?</h1>
            <ul>
                ${answerStr}

            </ul>
        </form>
        `
       
    }




    quizEl.innerHTML = quizStr
}




/*loopArray();
getCity();*/

init();

/*document.getElementById("app").innerHTML = `
<h1 class="app-title">Country Capital(${quizData.length} results)</h1>
${quizData.map(function(city){
    return city.city
}).join('')}
`*/