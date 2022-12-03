const main = document.querySelector('main#main');
main.remove();


let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

// document.body.append(newHeader);

 newHeader.id ='victory';
 newHeader.textContent = "COLLINS-CHIRCHIR is the champion";
