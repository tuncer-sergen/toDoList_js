let body = document.querySelector('body')
body.style.background = 'lightgrey'
let div
for (let i = 0; i < 2;) {
    body.appendChild(document.createElement('div'))
    div = document.querySelectorAll('div')[i]
    body.prepend(div)
    i++
}

let div1 = document.querySelector('div')
div1.innerText = 'To DO List'
div1.style.background = 'deepskyblue'
div1.style.color = 'white'
div1.style.fontSize = '50px'
div1.style.padding = '10px'
div1.style.borderLeft = 'dodgerblue solid 5px'

let div2 = document.querySelectorAll('div')[1]
for (let i = 0; i < 2;) {
    div2.appendChild(document.createElement('div'))
    i++
}
div2.style.background = 'white'
div2.style.borderTop ='dodgerblue 5px solid'
div2.style.marginTop = '20px'
let div2bis1 = div2.querySelector('div')
div2bis1.appendChild(document.createElement('label'))
let label = document.querySelector('label')
label.innerText = 'Ajouter une tâche :'
label.style.fontSize = '30px'
label.style.marginLeft ='20px'
div2bis1.appendChild(document.createElement('input'))
let input = document.querySelector('input')
input.style.height = '30px'
input.style.width = '300px'
input.style.borderRadius = '10px'
input.style.border = 'orange solid 3px'
input.style.marginLeft = '20px'
div2bis1.appendChild(document.createElement('div'))
let div2bis1bis = div2bis1.querySelector('div')
for (let i = 0; i < 3;) {
    div2bis1bis.appendChild(document.createElement('button'))
    i++
}
div2bis1.style.display = 'flex'
div2bis1.style.flexDirection = 'column'
div2bis1bis.style.display = 'flex'
div2bis1bis.style.justifyContent = 'flex-end'
div2bis1bis.style.marginBottom = '10px'
div2bis1bis.style.marginRight = '10px'
div2bis1.style.borderBottom = '1px black solid'
let button1 = document.querySelector('button')
let button2 = document.querySelectorAll('button')[1]
let button3 = document.querySelectorAll('button')[2]
button1.style.height = '40px'
button1.innerText = 'A faire'
button1.style.fontSize = '20px'
button1.style.borderRadius = '10px'
button2.style.height = '40px'
button2.innerText = 'Terminer'
button2.style.fontSize = '20px'
button2.style.borderRadius = '10px'
button3.style.height = '40px'
button3.innerText = 'Tous'
button3.style.fontSize = '20px'
button3.style.borderRadius = '10px'



console.log(body)