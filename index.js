var object = [
    {
        id: 1,
        img: "Assets/img/product-05-330x462.jpg",
        price: 14.00,
        name: 'Sam & Dave dig a Hole',
        description: 'By SI MODARSK, TE SORKAZ',
    },
    {
        id: 2,
        img: "Assets/img/product-11-330x462.jpg",
        price: 19.00,
        name: 'The Assault',
        description: 'By MESHO BUVAHR, SI MODARSK',
    },
    {
        id: 3,
        img: "Assets/img/product-07-330x462.jpg",
        price: 19.00,
        name: 'The Carrot Hunt',
        description: 'By KOGA FORESCAR, MESHO',
    },
    {
        id: 4,
        img: "Assets/img/product-14-330x462.jpg",
        price: 18.00,
        name: 'The DARK',
        description: 'By SAVANNA WALKER',
    },
    {
        id: 5,
        img: "Assets/img/product-02-330x462.jpg",
        price: 12.00,
        name: 'The Journey of Dreams',
        description: 'By BHUZUN NAHLAM,',
    },
    {
        id: 6,
        img: "Assets/img/product-08-330x462.jpg",
        price: 22.00,
        name: 'The Night Ocean',
        description: 'By SERO GLAN, SI MODARSK',
    },
    {
        id: 7,
        img: "Assets/img/product-01-330x462.jpg",
        price: 24.00,
        name: 'The Summer',
        description: 'By CHAI IAM, HOF',
    },
    {
        id: 8,
        img: "Assets/img/product-17-330x462.jpg",
        price: 21.00,
        name: 'TRIO – Sarah Tolmie',
        description: 'By CHAI IAM, SAVANNA WALKER',
    },
];


let html = ""


for (let index = 0; index < object.length; index++) {
    let action = object[index]
    html += `
    <div class="col-md-3 text-center  ">
    <a href="details-page/page5.html"><img src="    ${action.img}" alt="" class="w-100"></a>
    <span class="spn fw-bold">$${action.price}</span>
    <h4 class="hov">${action.name}</h4>
    <p class="hov">${action.description} </p>
    <div class="row">
        <div class="col-lg-3">
            <h6>Quantity</h6>
        </div>
        <div class="col-lg-9 ">
            <input id="qty${index}" class="w-100" type="number">
        </div>
    </div>
     <button onclick="AddTocart(${index})"
            class="btn mt-4 bg-danger m-3 text link-light p-2 fw-bold w-50 ms-5">Add To Cart</button>
</div>
    `
}
document.getElementById('tableData').innerHTML = html;

function AddTocart(index) {
    let item = object[index];
    let Qty = Number(document.getElementById("qty" + index).value)
    console.log(Qty)
    let cartItems = [];
    if (!localStorage.getItem('list')) {
        cartItems = [];
    } else {
        cartItems = JSON.parse(localStorage.getItem('list'))
    }
    let booksCart = 0;
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === item.id) {
            console.log(cartItems)
            booksCart = 1;
        }
    }
    if (booksCart === 0) {
        item = { ...item, ...{ quantity: Qty } }
        cartItems.push(item);
        localStorage.setItem('list', JSON.stringify(cartItems));
    }
    else {
        alert('This Atem Is Already exist in cart')
        counterCartItem();

    }
}
function counterCartItem() {
    let ItemCart = [];
    if (!localStorage.getItem('list')) {
        ItemCart = [];
    } else {
        ItemCart = JSON.parse(localStorage.getItem('list'))
    }
    document.getElementById('length').innerHTML = ItemCart.length;
}



