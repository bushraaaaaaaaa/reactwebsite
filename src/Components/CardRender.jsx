import React from 'react';

const CardDetails = [
  {
    img: 'https://f.nooncdn.com/products/tr:n-t_240/v1635071675/N42934460A_7.jpg',
    discribtion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    Originalprice: '939',
    discount: '289 AED',
  },
  {
    img: 'https://f.nooncdn.com/products/tr:n-t_240/v1646914144/N46569464A_1.jpg',
    discribtion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    Originalprice: '939',
    discount: '289 AED',
  },
  {
    img: 'https://f.nooncdn.com/products/tr:n-t_240/v1645647238/N26505142A_1.jpg',
    discribtion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    Originalprice: '939',
    discount: '289 AED',
  },
  {
    img: 'https://f.nooncdn.com/products/tr:n-t_240/v1652078576/N43431945A_1.jpg',
    discribtion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    Originalprice: '939',
    discount: '289 AED',
  }
]

const Card = ({ img, discribtion, Originalprice, discount }) => {
    return ( 
      <div className="col-md-3 mb-4">
        <div className="card" style={{ width: '100%' }}>
          <img style={{width:'100'}} src={img} className="card-img-top" alt="Product" />
          <div className="card-body">
            <p className="card-title">{discribtion}</p>
            <p className="card-text"><h5><b><del>{Originalprice}</del> {discount}  </b></h5></p>
          </div>
        </div>
      </div>
    );
  };
  
  const CardRender = () => {
    return (
      <>
        <br /><br /><br />
        <div className="container">
          <img style={{ border: '15px solid #ccc' }} width='100%' src="https://f.nooncdn.com/ads/banner-1440x1440/1440en.1705313265.5125706.png?format=avif" alt="" />
          <div className='container' style={{backgroundColor:' rgb(206, 238, 251)'}}>
            <br /><h4><b>Deals only on noon</b></h4>
            <div className="row d-flex justify-content-center">
              {CardDetails.map((current_obj, index) => (
                <Card key={index} {...current_obj} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export { CardRender };
  