import React from 'react';
import { Card } from './assets/Card';

function App() {
  return (
    <>
    <div className='cards-container'>
      <Card
        image={'https://store.ops.blackbox.com.sa/media/webps/jpg/media/catalog/product/m/j/mjnp3aaa.webp'}
        category={'IPhone 12'}
        description={'PTA Approved, 128GB'}
        location={'Karachi'}
        price={'$300'}
      />
       <Card
        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbo_pGZDiZeNPMEKxA9QFbYoGATmdvAdsJw&s'}
        category={'Civic'}
        description={'white color'}
        location={'Lahore'}
        price={'$1300'}
      />
      
  <Card
    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxasO7e_q6hRLkKwA4wbu9pxGDKlZnoK8NYeKmXyvON5MriGHYhNtvI7gK5y9WAj_s9yk&usqp=CAU"}
    category={"Laptop"}
    description={"High performance gaming laptop"}
    price={"$1200"}
    location={"Lahore"}
  />
  <Card
    image={"https://urbangalleria.com/cdn/shop/files/Untitleddesign-2025-10-01T162549.114.png?v=1759318007&width=3840"}
    category={"Sofa"}
    description={"Comfortable 3-seater sofa"}
    price={"$400"}
    location={"Karachi"}
  />

  <Card
    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHH7VP15hQGNK2nIXxYAJBwUZqOd0qSAVZyA&s"}
    category={"Wristwatch"}
    description={"Elegant silver watch"}
    price={"$150"}
    location={"Lahore"}
  />
  <Card
    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eF6AXWh6UgfXtJZBF4mY7Jintp9yaF1a3w&s"}
    category={"Mountain Bike"}
    description={"Durable off-road bike"}
    price={"$500"}
    location={"Karachi"}
  />
  <Card
    image={"https://xcessorieshub.com/wp-content/uploads/2023/03/wh-ch720_Primary_image-1.webp"}
    category={"Headphones"}
    description={"Noise-cancelling headphones"}
    price={"$120"}
    location={"Islamabad"}
  />
  <Card
    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-EsBpJ7vGq0XqiPKk641bss-EMKEERCqIg&s"}
    category={"Handbag"}
    description={"Leather designer handbag"}
    price={"$250"}
    location={"Lahore"}
  />
  <Card
    image={"https://images.ctfassets.net/16nm6vz43ids/7vQeXhOJFTp6ceGT8rToj0/b48a3ba89f03f5ad2a04ab2ba0ed7d64/How_to_make_game_consoles_last_for_years.png?fm=webp&q=65"}
    category={"Gaming Console"}
    description={"Latest PlayStation 5"}
    price={"$500"}
    location={"Karachi"}
  />
  <Card
    image={"https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D"}
    category={"Books"}
    description={"Set of 5 bestsellers"}
    price={"$60"}
    location={"Islamabad"}
  />
  <Card
    image={"https://servis.pk/cdn/shop/files/M-AC-0100376GreyBlack_5.jpg?v=1758229823&width=533"}
    category={"Shoes"}
    description={"Running shoes, size 10"}
    price={"$80"}
    location={"Lahore"}
  />
      </div>
    </>
  );
}

export default App;
