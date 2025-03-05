let calculation = localStorage.getItem('calculation')  || '';
document.querySelector('.display').innerHTML = calculation;
function updateCalculation(num){
calculation += num;
document.querySelector('.display').innerHTML= calculation;
localStorage.setItem('calculation', calculation);
}
function updateStorage(){
localStorage.setItem('calculation', calculation);
}