const product = async () => {
    let data = await fetch('https://fakestoreapi.com/products')
    return data.json()
}

product().then((data) => {
    const list = document.getElementById("pro")
    const fakepro =data.map((item) => {
        return ` <div class="card w-30" style="width: 18rem;">
        <ol class="list-group list-group-flush">
            <li class="list-group-item">${item.title}</li>
            <li class="list-group-item">${item.category}</li>
            <li class="list-group-item">${item.description}</li>
        </ol>
    </div>`
    })
    list.innerHTML = fakepro
    console.log(fakepro,list);
})
.catch((err) => {
    console.log(err);
})