// Write your code here!

const main = document.querySelector('#main');

main.remove();

const newHeader = document.createElement('h1');

newHeader.innerHTML = "YOUR-NAME is the champion";

newHeader.id = 'victory';

document.body.append(newHeader);