const iceCreams = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    qty: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    qty: 0
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    qty: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    qty: 0
}, {
    name: 'Chocolate Chips',
    image: 'https://i.etsystatic.com/22891982/r/il/61a686/2363487019/il_794xN.2363487019_mnou.jpg',
    price: 2,
    qty: 0
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    qty: 0
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    qty: 0
}]

const sellItems = iceCreams.concat(toppings).concat(containers)


// array Variables[]
// name: 'string'
// image: 'link'
// price: num


// changes the quantity of the name item on click
// if the number entered is 0 then it will set to 0 
// if the name element is 'clearCart' then it will clear the cart
function addToCart(name, amt) {

    if (name == 'clearCart'){
        for(let i=0; i<sellItems.length; i++){
            sellItems[i].qty = 0
        }
    }else{

    let locatedItem = sellItems.find(item => item.name == name)
    
    if (amt == 0){locatedItem.qty = 0} else {locatedItem.qty += amt}
    
    }
    drawCartElements(name)
}


// writes the data from an array (ary) to an id (ident)
// in the form of an ice cream card
function drawSelectors(ary, ident) {

    // Template for the card selector elements

    let template = ''

    ary.forEach(av => {
            template += `
            <div class="card icecream-card" onclick="addToCart('${av.name}',1)">
                <img src="${av.image}" alt="${av.name}">
                <div class="text-elements">
                    <p>${av.name}</p>
                    <p>$${av.price}</p>
                </div>
            </div>`
    })

    // Selects the area to write the template to
    // important that the ID of the container element is the same as the variable name of the array being written

    document.getElementById(ident).innerHTML = template
}


// This function draws the elements in the cart
function drawCartElements(name){
    
    let template = ''

    sellItems.forEach(av => {
        if(av.qty > 0){
            template += `
                <div class="item">
                    <div class="name">
                        <button onclick="addToCart('${av.name}',0)">✖</button>
                        <p>${av.name}</p>
                    </div>
                    <p>${av.qty}</p>
                    <p>$${av.price}</p>
                    <p>$${av.price * av.qty}</p>
                </div>`
        }
    })

    document.getElementById('cart').innerHTML = template
    drawTotal()
}


// totals up all elements in the cart and draws it
function drawTotal(){
    let total = 0

    sellItems.forEach(av => {
        let itemTotal = av.price*av.qty
        total += itemTotal
    })

    document.getElementById('totalHTM').innerHTML = total.toString()
}


// a function to quickly set all arrays to the DOM
function drawElements(){

    // Individually assigns each array to drawSelectors then calls them all 

    drawSelectors(iceCreams, 'iceCreamsHTM')
    drawSelectors(toppings, 'toppingsHTM')
    drawSelectors(containers, 'containersHTM')
}

drawElements()
