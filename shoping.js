shopingCart()
function shopingCart() {
    let cartItems = [];
    if (!localStorage.getItem('list')) {
        cartItems = [];
    } else {
        cartItems = JSON.parse(localStorage.getItem('list'))
    }
    let localStorageData = ''
    let totalQty = 0
    let totalPrice = 0
    for (let index = 0; index < cartItems.length; index++) {
        let DataEntry = cartItems[index]
        totalQty += DataEntry.quantity
        totalPrice += DataEntry.price * DataEntry.quantity

        localStorageData += `<tr>
        <td  class="text-center border">${DataEntry.id}</td>
        <td  class="text-center border"> <img src="${DataEntry.img}" alt="" class="w-25 "></td>
        <td class=" text-center border">${DataEntry.description}</td>
        <td  class="text-center border">${DataEntry.quantity}</td>
        <td  class="text-center border">${DataEntry.price}</td>
        <td  class="text-center border">${DataEntry.price * DataEntry.quantity}</td>
        <td class=" text-center  border" ><button  class=" bg-dark text-light rounded-3" onclick="deletRow(${index})" >__</button></td>
        </tr>
        `
    }
    document.getElementById("datarow").innerHTML = localStorageData;
    document.getElementById("totalQty").innerHTML = totalQty;
    document.getElementById("totalPrice").innerHTML = totalPrice;
}

function deletRow(index) {
    let cartItems = [];
    if (!localStorage.getItem('list')) {
        cartItems = [];
    } else {
        cartItems = JSON.parse(localStorage.getItem('list'))
    }
    cartItems.splice(index, 1),
        localStorage.setItem('list', JSON.stringify(cartItems))
    shopingCart()
    counterCartItem()
}
counterCartItem()

function counterCartItem() {
    let ItemCart = [];
    if (!localStorage.getItem('list')) {
        ItemCart = [];
    } else {
        ItemCart = JSON.parse(localStorage.getItem('list'))
    }
    document.getElementById('add').innerHTML = ItemCart.length;
}

function hand() {
    let click = alert('Your Order Is Book')
}
document.getElementById('click').addEventListener('click', hand)
