const initialState = 
    [
      {
        name: 'TV', category: 'electronics', price: 699.00, inStock: 5, inCart: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81t2A6uhm4L._SX466_.jpg',
      },
      {
        name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, inCart: 1,
        image: 'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png',
      },
      {
        name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, inCart: 1,
        image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png',
      },
      {
        name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, inCart: 1,
        image: 'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png',
      },
      {
        name: 'Apples', category: 'food', price: .99, inStock: 500, inCart: 1,
        image: 'https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png',
      },
      {
        name: 'Eggs', category: 'food', price: 1.99, inStock: 12, inCart: 1,
        image: 'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png',
      },
      {
        name: 'Bread', category: 'food', price: 2.39, inStock: 90, inCart: 1,
        image: 'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png',
      },
    ];


export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'addToCart':
    return state.map(product => {
      if(product.name === payload.name){
        return {...product, inStock: product.inStock - 1};
      }else{
        return product;
      }
    });
  default:
    return state;
  }
};
    