import './lesson_14.scss'





function show() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4001/list');
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const container = document.querySelector('.container')
            const data = Array.from(JSON.parse(xhr.responseText));

            data.forEach((object) => {
                const obj = document.createElement('ul')
                container.appendChild(obj);
                for(let i in object){
                    const objEl = document.createElement('li');
                    objEl.textContent = object[i];
                    obj.appendChild(objEl);
                }
            })
        }
    }

}

show();