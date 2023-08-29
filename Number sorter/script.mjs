const buttonAdd = document.getElementById('add')
const buttonSort = document.getElementById('sort')
const lis = document.getElementById('list-of-numbers').querySelectorAll('li'); 
const ul = documnet.querySelector('ul')

const random = () => {
    return Math.floor(Math.random() * + 1)
}

const addNumbers = () => {
    Array.from(lis).forEach((l) => (l.innerHtml = random()))
}

const sortNumbers = () => {
    const numbers = Array.from(lis).map((li) => li.innerHTML)
    return numbers.sort((a, b) => a - b)
}

const updateView = () => {
    const sortedNumbers = sortNumbers();
    const lisAsArray = Array.
}

buttonAdd.addEventListener('click', () => {

})

buttonSort.addEventListener('click', () => {
    
})