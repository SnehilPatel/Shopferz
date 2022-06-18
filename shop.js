// Make DOM cache?
const openCart = document.getElementById('open-cart');

// REVEAL / SHOW CART 
(function(){ // IIFE
    
    const cartBtn= document.getElementById('cart-info');
    
    // add click event to cart reveal button
    cartBtn.addEventListener('click', displayCart);

    function displayCart() {
        // toggle css class to change to display cart
        openCart.classList.toggle('display-cart');
    }

})();

// ADDING ITEMS TO CART
(function(){ //IIFE

    const addTocartBtn = document.querySelectorAll('.product-item-icon');

    // For Each product item icon btn in DOM
    addTocartBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            
            // If DOM element 
            if(event.target.parentElement.classList.contains('product-item-icon')){

                // Traverse DOM to get img url source
                let cartImgUrl = event.target.parentElement.previousElementSibling.src

                // Create empty obj to store cart details
                const cartItemObj = {};

                // Add img property to object
                cartItemObj.img = cartImgUrl;

                // In similar fashion, add name
                let cartItemName = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                cartItemObj.name = cartItemName;

                // Add price
                let cartItemPrice = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

                // Format for numbers
                let newPrice = cartItemPrice.slice(1);
                cartItemObj.price = newPrice;

                /**
                 * Display to UI
                 */

                // Create a new div element to display cart-item to DOM
                const productItem = document.createElement('div');
                // Add classes to product item div for appropriate styling
                productItem.classList.add(
                    'cart-item', 
                    'd-flex', 
                    'justify-content-between', 
                    'text-capitalize', 
                    'my-3'
                );
            
                // Add HTML template string to productItem div
                productItem.innerHTML =
                `<!-- single cart item -->
                <!-- <div class="cart-item d-flex justify-content-between text-capitalize my-3"> -->
                    <img src="${cartImgUrl}" alt="" class="img-fluid rounded-circle cart-img" id="item-img">
                
                    <div class="item-text">
                        <p id="cart-item-title">${cartItemName}</p>
                        <span>£</span>
                    <span id="cart-item-price" class="cart-item-price">${newPrice}</span>
                    </div>
                    
                    <a href="#" class="cart-item-remove" id="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </a>
                <!-- </div> -->`;
               
                const total = document.querySelector('.cart-total')
                // Insert before total div instead of append - like slice for DOM?
                openCart.insertBefore(productItem, total);
                // When each button is clicked update total
                showTotal();               
            }
        })
    });

    function showTotal() {
        // Initialise empty total array
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach((item) => {
            total.push(parseFloat(item.textContent));
        });

        // console.log(total);

        // Price Sum
        const money = total.reduce((total,item) => {
            total += item;
            return total
            
        })
        const finalMoney = money.toFixed(2);
        // console.log(finalMoney);

        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney
        document.getElementById('item-count').textContent = total.length;
    }


})();

// CONTACT SECTION VALIDATION
(function(){
    
})();