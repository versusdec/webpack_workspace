import './test.scss'


const products = ['sraka', 'zhopa', 'hui'];

function mazaFaka(target, arr) {
    const ul = document.createElement('ul');
    ul.classList.add('list');

    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
        li.addEventListener('click', () => {
            console.log(li)
        })
    })
    target.appendChild(ul);
}


mazaFaka(document.querySelector('.some-shit'), products)