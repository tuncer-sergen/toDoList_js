let body = document.querySelector('body')
let div2 = document.querySelectorAll('div')[1]
let divTache = div2.querySelectorAll('div')[3]
let buttonAjout = document.querySelector('button')
let input = document.querySelector('input')
let spanTache;
let tache;
let test;
let spanEdit
let spanEditI
let spanDelete
let spanDeleteI
let spanValide
let spanValideI
let inputEdit;
let spanDeleteEdit;
let spanDeleteEditI;
let spanValideEdit;
let spanValideEditI;
let fonction =()=>{test = document.createElement('div');
divTache.appendChild(test)
for (let i = 0; i < 4; i++) {
    test.appendChild(document.createElement('span'))
}
let span1 = test.querySelector('span')
let span2 = test.querySelectorAll('span')[1]
let span3 = test.querySelectorAll('span')[2]
let span4 = test.querySelectorAll('span')[3]

spanTache = test.querySelector('span')
spanTache.innerText = input.value
input.value = ''
test.style.background = 'grey'
test.style.borderRadius = '10px'
test.style.padding = '10px'
test.style.margin = '10px'

spanEdit = test.querySelectorAll('span')[1]
spanEdit.appendChild(document.createElement('i'))
spanEditI = spanEdit.querySelector('i')
spanEditI.setAttribute('class', 'fas fa-edit')
spanEditI.style.textAlign = 'right'
spanEditI.style.width = '100%'

inputEdit = document.createElement('input')
test.appendChild(inputEdit)
test.prepend(inputEdit)
inputEdit.style.display = 'none'
spanValideEdit = document.createElement('span')
test.appendChild(spanValideEdit)
spanValideEditI = document.createElement('i')
spanValideEdit.appendChild(spanValideEditI)
spanValideEditI.setAttribute('class', 'fas fa-check')
spanDeleteEdit = document.createElement('span')
spanValideEditI.style.textAlign = 'right'
spanValideEditI.style.width = '100%'
spanValideEdit.style.display = 'none'
test.appendChild(spanDeleteEdit)
spanDeleteEditI = document.createElement('i')
spanDeleteEdit.appendChild(spanDeleteEditI)
spanDeleteEditI.setAttribute('class', "fas fa-times")
spanDeleteEditI.style.textAlign = 'right'
spanDeleteEditI.style.width = '100%'
spanDeleteEdit.style.display = 'none'


spanDelete = test.querySelectorAll('span')[2]
spanDelete.appendChild(document.createElement('i'))
spanDeleteI = spanDelete.querySelector('i')
spanDeleteI.setAttribute('class', 'fas fa-trash')
spanDeleteI.style.textAlign = 'right'
spanDeleteI.style.width = '100%'

spanValide = test.querySelectorAll('span')[3]
spanValide.appendChild(document.createElement('i'))
spanValideI = spanValide.querySelector('i')
spanValideI.setAttribute('class', 'fas fa-check-square')
spanValideI.style.textAlign = 'right'
spanValideI.style.width = '100%'


divTache.addEventListener('click',(e)=>{
if(e.target == span2.firstElementChild){
    span1.style.display = 'none'
    span2.style.display = 'none'
    span3.style.display = 'none'
    span4.style.display = 'none'
    inputEdit = e.target.parentElement.parentElement.firstElementChild
    inputEdit.style.display = 'block'
    spanValideEdit = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling
    spanValideEdit.style.display = 'block'
    spanDeleteEdit.style.display = 'block'

    inputEdit.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            span1.style.display = 'block'
            span2.style.display = 'block'
            span3.style.display = 'block'
            span4.style.display = 'block'
            span1.innerText = inputEdit.value
            inputEdit.style.display = 'none'
            spanDeleteEdit.style.display = 'none'
            spanValideEdit.style.display = 'none'
        }
    })
    
    spanValideEdit.addEventListener('click', () => {
        span1.style.display = 'block'
        span2.style.display = 'block'
        span3.style.display = 'block'
        span4.style.display = 'block'
        span1.innerText = inputEdit.value
        inputEdit.style.display = 'none'
        spanDeleteEdit.style.display = 'none'
        spanValideEdit.style.display = 'none'
    })
    spanDeleteEdit.addEventListener('click', () => {
        span1.style.display = 'block'
        span2.style.display = 'block'
        span3.style.display = 'block'
        span4.style.display = 'block'
        inputEdit.style.display = 'none'
        spanDeleteEdit.style.display = 'none'
        spanValideEdit.style.display = 'none'
    })

}else if(e.target == span3.firstElementChild){
    span2.style.display ='none'
    span3.style.display = 'none'
    span4.style.display = 'none'
    spanValideEdit = e.target.parentElement.nextElementSibling.nextElementSibling
    spanDeleteEdit = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling
    spanValideEdit.style.display = 'block'
    spanDeleteEdit.style.display = 'block'
    spanValideEdit.addEventListener('click',()=>{
        divTache.removeChild(e.target.parentElement.parentElement)
    })
    spanDeleteEdit.addEventListener('click',()=>{
        span2.style.display = 'block'
        span3.style.display = 'block'
        span4.style.display = 'block'
        spanDeleteEdit.style.display = 'none'
        spanValideEdit.style.display =  'none'
    })

}else if(e.target == span4.firstElementChild){
    span4.parentElement.style.background = 'green'
    span2.style.display = 'none'
    span3.style.display = 'none'
    span4.style.display = 'none'
    spanDeleteEdit = e.target.parentElement.nextElementSibling.nextElementSibling
    spanDeleteEdit.style.display = 'block'
    spanDeleteEdit.addEventListener('click',()=>{
        spanDeleteEdit = e.target.parentElement.nextElementSibling.nextElementSibling
        span4.parentElement.style.background = 'grey'
        span2.style.display = 'block'
        span3.style.display = 'block'
        span4.style.display = 'block'
        spanDeleteEdit.style.display = 'none'
        setTimeout(() => {
            e.target.parentElement.parentElement.style.display = 'none'
        }, 1000);
    })
}
})
}

buttonAjout.addEventListener('click', fonction)
input.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        fonction()
    }
})

// bouton trie

let btnAfaire = document.querySelectorAll('button')[1]
let btnTerminer = document.querySelectorAll('button')[2]
let btnTous = document.querySelectorAll('button')[3]
let arr;

div2.addEventListener('click',(e)=>{
    arr = Array.from(e.target.parentElement.parentElement.nextElementSibling.children)
    arr.forEach(element => {
        if(e.target == btnAfaire){
            if(element.style.background == 'grey'){
                element.style.display = 'block'
            }else if(element.style.background == 'green'){
                element.style.display = 'none'
            }
        
        }else if(e.target == btnTerminer){
            if(element.style.background == 'grey'){
                element.style.display = 'none'
            }else if(element.style.background == 'green'){
                element.style.display = 'block'
            }    
        }else if(e.target == btnTous){
            element.style.display = 'block'
        }
    });
})

document.addEventListener('online',()=>{
    console.log('salut')
})
