function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => showData(data))
} 

function showData(data){
    const sec = document.getElementById('container')
for (const comment of data) {
    console.log(data)
    const div= document.createElement('div');
    div.classList.add('bg-danger')
    div.classList.add('ps-5')
    div.innerHTML =`
    <h4>ID: ${comment.name} </h4>
    <h5>Email: ${comment.email}</h5>
    <p>Body: ${comment.body}</p>
    `;
    sec.appendChild(div);

}
}


function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => showData2(data))
} 

function showData2(data){
    const sec = document.getElementById('container')
for (const comment of data) {
    console.log(comment)
    const div= document.createElement('div');
    
    div.classList.add('ps-5')
    div.innerHTML =`
    <h4>ID: ${comment.id}</h4>
    <h5>Email: ${comment.title}</h5>
    <img>${comment.thumbnailUrl} </img>
    `;
    sec.appendChild(div);

}

}
