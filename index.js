function generateProductCards(details) {
    const productContainer = document.getElementById("products");
    details.forEach((product) => {
      const one = document.createElement("div");
      one.classList.add("items");
      one.innerHTML = `
              <img id="picy" src="${product.thumbnail}" alt="${product.name}" />
              <h2 id=name>${product.title} <ion-icon name="bookmark-outline" id="save"></ion-icon></h2>              
               <p>${product.description}
              <div class='productPrice'>
              <p id="pp">Price:   ksh.${product.price}</p>
              <p>Discount: ${product.discountPercentage}% off</p>
              <p><ion-icon name="star-half-outline" id="rate"></ion-icon>  ${product.rating}  </p><br>
              <button id="buty">ADD TO CART</button>
              </div>
          `;
      productContainer.appendChild(one);
    });
  }
  function fetchProducts() {
    fetch("https://dummyjson.com/products?limit=9")
      .then((response) => response.json())
      .then((details) => {
        const returnedData = details.products.slice(0, 10);
        generateProductCards(returnedData);
    });
  }
  fetchProducts()











// let productContainer=document.getElementById(`products`)
// console.log("Product container:", productContainer)
// const products = [
//     {
//       imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685447437/iphone_nuelpx.png',
//       title: 'Iphone XR',
//       description: 'One camera ,battery 5000mAH',
//       price: 10.99,
//       rating: 4.5,
//       discountPercentage: 20,
//     },
//     {
//       imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685447339/headphone_gl2xx8.png',
//       title: 'Headphones',
//       description: 'Color:blue, Sound:5000VH',
//       price: 19.99,
//       rating: 4.2,
//       discountPercentage: 10
//     },
//     {
//       imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685448140/blue_hp_y0ws5v.png',
//       title: 'HP Laptop',
//       description: 'Blue hp laptop',
//       price: 20.99,
//       rating: 5.7,
//       discountPercentage: 5
//     },
//     {
//         imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685448163/headphones_wqd8ea.png',
//         title: 'Headphones',
//         description: 'White classy headphones',
//         price: 15.99,
//         rating: 4.7,
//         discountPercentage: 12
//       },
//       {
//         imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685447326/speaker_wgwwy4.png',
//         title: 'Speaker',
//         description: 'Portable sound speaker',
//         price: 22.99,
//         rating: 4.7,
//         discountPercentage: 15
//       },
//       {
//         imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685447318/flash_jppznl.png',
//         title: 'Flash disks',
//         description: '56RAM portable flash disk',
//         price: 15.99,
//         rating: 4.7,
//         discountPercentage: 18
//       },
//       {
//         imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685448203/juice_hdslc8.png',
//         title: 'Juice extracter',
//         description: 'Portable juice blender, zero sound',
//         price: 20.90,
//         rating: 4.7,
//         discountPercentage: 21
//       },
//       {
//         imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685448187/apple_package_fdpyio.png',
//         title: 'Apple package',
//         description: 'Full apple red package',
//         price: 15.99,
//         rating: 4.7,
//         discountPercentage: 19
//       },
//       {
//         imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685448179/deep_frier_j36r5o.png',
//         title: 'Deep frier',
//         description: 'Economic deep frier',
//         price: 45.00,
//         rating: 4.7,
//         discountPercentage: 10
//       },
//       {
//         imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685448163/headphones_wqd8ea.png',
//         title: 'Headphones',
//         description: 'High sound headphones',
//         price: 15.99,
//         rating: 4.7,
//         discountPercentage: 24
//       },
//       {
//         imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685448155/black_purity_earpods_k1nruy.png',
//         title: 'Earpods',
//         description: 'Black earpods, sound 300vh',
//         price: 10.80,
//         rating: 4.7,
//         discountPercentage: 15
//       },
//       {
//         imageUrl: 'https://res.cloudinary.com/dm7froxvi/image/upload/v1685448145/button_phone_ljxijv.png',
//         title: 'Feature phone',
//         description: 'Simple feature phone',
//         price: 15.00,
//         rating: 6.9,
//         discountPercentage: 30
//       },

 
//   ];




//   const displayProducts = () => {
//     products.map(item => {
//       let div = document.createElement('div');
//       div.className = 'items';
  
//       let img = document.createElement('img');
//       img.src = item.imageUrl;
  
//       let name = document.createElement('h2');
//       name.innerHTML = item.title;
  
//       let describe = document.createElement('p');
//       describe.innerHTML = item.description;
  
//       let prices = document.createElement('p');
//       prices.innerHTML = 'Price: $' + item.price;
  
//       let ratings = document.createElement('p');
//       ratings.innerHTML = 'Rating: ' + item.rating;
  
//       let discount = document.createElement('p');
//       discount.innerHTML = 'Discount: ' + item.discountPercentage + '%';

//       let addButton = document.createElement('button');
//       addButton.innerHTML = 'Add to Cart';
//       addButton.addEventListener('click', () => {
//         addToCart(item);
//     });
  
//       div.appendChild(img);
//       div.appendChild(name);
//       div.appendChild(describe);
//       div.appendChild(prices);
//       div.appendChild(ratings);
//       div.appendChild(discount);
  
//       productContainer.appendChild(div);
    
//     });
// };
    
// const addToCart = (product) => {
//     console.log('Adding to cart:', product);
//   };

//   displayProducts();













// const getProducts=()=>{
//     return fetch(`https://dummyjson.com/products?limit=8`)
//     .then(response=>response.json())
//     .then(response=>response)
//     .catch(error=>error.message)
// };

// const displayProducts=async()=>{
//     const products= await getProducts();
//     console.log(products.products)

//     products.products.map(item=>{
//         let div=document.createElement(`div`)
//         div.className=`items`

//         let img=document.createElement(`img`)
//         let name=document.createElement(`h2`)
//         let describe=document.createElement(`p`)
//         let prices=document.createElement(`p`)
//         let ratings=document.createElement(`p`)
//         let discount=document.createElement(`p`)

//         img.src=item.imageUrl 
//         name.innerHTML=item.title;
//         describe.innerHTML=item.description;
//         prices.innerHTML= `Price: $` + item.price;
//         ratings.innerHTML=`Rating: $` + item.rating;
//         discount.innerHTML=`Discount: `+ item.discountPercentage + `%`;

//         div.appendChild(img)
//         div.appendChild(name)
//         div.appendChild(describe)
//         div.appendChild(prices)
//         div.appendChild(ratings)
//         div.appendChild(discount)

//         productContainer.appendChild(div)

//     });
// };

// displayProducts();
