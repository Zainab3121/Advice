const loader = document.querySelector('.ri-restart-line')
const id = document.querySelector('.id span')
const advice = document.querySelector('.advice')
const dice = document.querySelector('.dice')

async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice', {
        method: "GET"
    })
    const data = await response.json()
    console.log(data);
    if (response){
        loader.style.display = 'none'
    }
    if (response.ok){
        advice.textContent = data.slip.advice
        id.textContent = data.slip.id
    }
    if (!response.ok){
        advice.textContent = 'An error occured'
    }
    
}

getAdvice()

dice.addEventListener('click', getAdvice)


