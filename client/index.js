function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

const ul = document.getElementById('test');
const url = 'http://localhost:5000/api/items';
fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        return data.map((data) => {
            let li = createNode('li')
            li.innerHTML = `${data.name}`;
            let parentDiv = document.getElementById("test")
            append(ul, li);
        })
    })
    .catch((error) => {
        console.log(error);
    });  