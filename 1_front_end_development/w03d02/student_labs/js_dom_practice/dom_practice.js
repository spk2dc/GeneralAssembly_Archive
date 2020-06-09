console.log(document.querySelector('.info'))
console.log(document.querySelectorAll('li')[1])

let idElem = document.querySelector('#date')
console.log(idElem);
let h2 = document.querySelector('h2')
console.log(h2);
h2.innerText += '!!!'

let classVar = document.querySelectorAll('.info')
console.log(classVar);
classVar[0].innerText = 'Jamboree sandwich at the Jambo-ree'
classVar[0].style.color = 'blue'

let imgNew = document.createElement('img')
imgNew.setAttribute('src', 'https://i.imgur.com/2YLSvzd.png')
imgNew.className = 'imgNew'
document.querySelector('ol').appendChild(imgNew)
document.querySelector('ol').style.color = 'red'

let rmv = document.querySelector('.imgNew')
console.log(rmv);

rmv.remove();

