let minusButton = Array.from(document.getElementsByClassName('minusButton'));
console.log(minusButton);
let plusButton = Array.from(document.getElementsByClassName('plusButton'));
console.log(plusButton)
let quantity  = Array.from(document.getElementsByClassName('quantity'));
console.log(quantity)
let prices = Array.from(document.getElementsByClassName('prices'));
console.log(prices)
let favorites = Array.from(document.getElementsByClassName('like'));
console.log(favorites)
let crossed = Array.from(document.getElementsByClassName('delete'));
console.log(crossed)
let articles = Array.from(document.getElementsByClassName('article'));
console.log(articles)
let total = document.getElementById('total');
console.log(total)

function calculateSum(){
    let sum=0
    for (let j=0; j<quantity.length; j++){

        sum+= parseInt(quantity[j].innerText) * parseInt (prices[j].innerText);

    };
    total.innerText=sum;
}



for(let i=0;i<quantity.length;i++){
    
    minusButton[i].addEventListener('click',function(event){
        if(quantity[i].innerText>0){
            quantity[i].innerText--
            calculateSum()
        }
        else alert("you have zero in this item !!")
        

    })
    plusButton[i].addEventListener('click',function(event){
        quantity[i].innerText++
        calculateSum()
    })

    favorites[i].addEventListener('click',function(event){
        console.log(favorites[i].style.color)  
        favorites[i].style.color="red";
    })
    crossed[i].addEventListener('click',function(event){
        console.log(articles[i].style.display)
        articles[i].style.display="none"
        quantity[i].innerText=0;
        calculateSum()
    })
}
