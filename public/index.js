document.addEventListener('submit', event=>{
    event.preventDefault();
    let form = document.querySelector('#petForm');
    let data = new FormData(form);
     fetch('http://localhost:8080/api/productos', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body:  JSON.stringify({
             "title": data.get('title'),
             "price": data.get('price'),
             "thumbnail": data.get('thumbnail')
         })
     }).then(result =>{
         return result.json();
     }).then(json=> {
         console.log(json);
     })
});

