import './App.css';
import { Fragment } from 'react';

function App() {
  var products = [
    {
      id: 1,
      name: 'Bánh tráng trộn Tây Ninh chuẩn vị Sài Gòn đặc biệt giá rẻ siêu hời ai đi qua cũng mua',
      price: '10.000đ',
      img: 'https://sieuthitana.vn/mediacenter/media/2864/images/rs.jpg',
      bestseller: true
    },
    {
      id: 2,
      name: 'Bánh tráng cuộn sốt kem cheese béo ngậy',
      price: '15.000đ',
      img: 'https://tiki.vn/blog/wp-content/uploads/2023/07/banh-trang-cuon-thumbnail-768x550.jpg',
      bestseller: true
    },
    {
      id: 3,
      name: 'Cơm cháy giòn',
      price: '15.000đ',
      img: 'https://dayngheamthuc.vn/wp-content/uploads/2017/04/comchay.jpg',
      bestseller: false
    },
    {
      id: 4,
      name: 'Bắp xào ngũ sắc',
      price: '15.000đ',
      img: 'https://shipdoandemff.com/wp-content/uploads/2017/06/B%E1%BA%AFp-x%C3%A0o-ShipdoandemFF.jpg',
      bestseller: false
    },
    {
      id: 5,
      name: 'Chân gà xả tắc',
      price: '25.000đ',
      img: 'https://assets.grab.com/wp-content/uploads/sites/11/2021/11/09002427/251559326_2092096087664694_5362878883986909621_n.jpg',
      bestseller: false
    },
    {
      id: 6,
      name: 'Combo đồ chiên bốc cháy',
      price: '30.000đ',
      img: 'https://assets.grab.com/wp-content/uploads/sites/11/2021/11/09002422/251101467_306669747938999_877770077464885704_n.jpg',
      bestseller: true
    },
    {
      id: 7,
      name: 'Tokbokki chuẩn vị người Hàn',
      price: '25.000đ',
      img: 'https://tiki.vn/blog/wp-content/uploads/2023/04/cach-lam-sot-tokbokki-2-768x550.jpg',
      bestseller: false
    },
    {
      id: 8,
      name: 'Phô mai que kéo sợi dài',
      price: '20.000đ',
      img: 'https://traicayhoabien.com/wp-content/uploads/2023/05/PHO-MAI-QUE-768x768.jpg',
      bestseller: false
    },
    {
      id: 9,
      name: 'Mì xào siêu thị cũ',
      price: '40.000đ',
      img: 'https://cdn.tgdd.vn/2020/12/CookProduct/9-1200x676-1.jpg',
      bestseller: false
    },
    {
      id: 10,
      name: 'Mì cay xé lưỡi',
      price: '45.000đ',
      img: 'https://daotaobeptruong.vn/wp-content/uploads/2021/01/mi-cay.jpg',
      bestseller: true
    },
  ];
  function toProductItem(product){
    return (
    <div key={product.id} className="product-item">
      <div className="product-img">
        <img src={product.img} alt=""></img>
        {(product.bestseller?<div className='bestseller'>BESTSELLER</div>:Fragment)}     
      </div>
      {/* <div className='product-name'>{product.name.length<70?product.name:product.name.substring(0,68)+'...'}</div> */}
      <div className='product-name'>{product.name}</div>
      <div className='product-price'>{product.price}</div>
    </div> 
    );
  }
  const productItems = products.map(toProductItem);
  return (
    <div className="App">
      <div className='shop-name'>TIỆM ĂN VẶT SỐ 2</div>
      <div className="container">
        {productItems}
      </div>
    </div>
  );
}

export default App;
