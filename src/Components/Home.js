import React from 'react';
import './Home.css';
import Product from './Products/Product';

const Home = () => {
    return (
        <>
         <div className="home_container"> 
        
          <img className="home_image" alt="Mobiles" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/11thJune/seeyou/D23753221_OnePlus_Nord_New_launch_GW_Design_SIM_Tall_hero_1500x600._CB666088334_.jpg"/> 
         </div>   
         <div className="home_row">
            <Product
             id="123456"
             title='Crucial SSD 240gb storage with 6gb/s speed ' 
             price={19.99} image="https://th.bing.com/th/id/OIP.c3uFM7LhPLjkK4bMyreQRwHaE8?pid=ImgDet&rs=1" 
             rating={5}
             />
            <Product 
            id="1234567"
            title='Philips Trimier with hard blade and sharp cutter and long battery' 
            price={13.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/Vega/186_x_116_Px-1._SY116_CB665931658_.jpg" 
            rating={4}                                                                                                                                             
             />
         </div>
         <div className="home row">
            <Product 
            id="12345678"
            title='Short Froke  with silk cloth and amazing design with (hyper thor)' 
            price={25.99} 
            image="https://th.bing.com/th/id/OIP.a0F0IsOCuvtmKj1Thmrd2AHaMV?pid=ImgDet&rs=1" 
            rating={5}                                                                                                                                            
             />
            <Product 
            id="123456789"
            title='Green mexi  with silk cloth and amazing design with (hyper thor)' 
            price={40.99} 
            image="https://th.bing.com/th/id/R309777338ef3b84e677ec2d31103a241?rik=xaSWHhXgBjPXGA&riu=http%3a%2f%2fnatalet.com%2fimages5%2f0516%2fcute-summer-maxi-dresses%2fcute-summer-maxi-dresses-60_7.jpg&ehk=Q9s9tqlqqrQ6ik3F%2bqxJ0hr5qEG6X3N%2btbcibAobL58%3d&risl=&pid=ImgRaw" 
            rating={4}                                                                                                                                            
             />
            <Product 
            id="1234567890"
            title='Red Maxi with silk cloth and amazing design with (hyper thor)' 
            price={10.99} 
            image="https://th.bing.com/th/id/OIP.lpWndLeA2SR0JPN_mDtlTQHaLH?pid=ImgDet&rs=1" 
            rating={3}                                                                                                                                             
             />
            
         </div>
         <div className="home row">
            <Product 
            id="12345678900"
            title='The HP Laptop paivilion 3000 serice(Modal No. 3567) ,i5 6genration ,8gb ram ,ssd 520gb ' 
            price={79.80} 
            image="https://th.bing.com/th/id/OIP.HU77B7ONN7ttqvLq_24J0wHaEK?pid=ImgDet&rs=1" 
            rating={5}/>
         </div>
        </>
    )
}

export default Home;

// "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/Vega/186_x_116_Px-1._SY116_CB665931658_.jpg"