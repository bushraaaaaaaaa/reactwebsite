import React from 'react';
import { FaChevronRight , FaChevronLeft } from "react-icons/fa";
const dataArr = [
  {
    imagesrc: 'https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240',
    rating: 4,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    priceOrg: 'AED 4,849',
    stock: 'only 2 left in stock',
    btn: 'express',
  },
  {
    imagesrc: 'https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240',
    rating: 4,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    priceOrg: 'AED 4,849',
    stock: 'only 2 left in stock',
    btn: 'express',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'express',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'express',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1662647998/N53348815A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1685605423/N37619548A_2.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1635445545/N48441984A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1669221709/N30107462A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
];

const CardsProducts = () => {
  return (
    <div className="container" style={{backgroundColor:'white'}}>
      <section className="pt-5 pb-5">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-3"><b>Recommended for you </b></h3>
          </div>
          <div className="col-12 text-right">
            <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
           <FaChevronLeft />
            </a>
            <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
            <FaChevronRight />
            </a>
          </div>
          <div className="col-12">
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {dataArr.map((item, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row">
                      {dataArr.slice(index, index + 4).map((card, cardIndex) => (
                        <div key={cardIndex} className="col-md-3 mb-3">
                          <div className="card">
                            <img className="img-fluid" alt="100%x280" src={card.imagesrc} />
                            <div className="card-body">
                              <h6 className="card-title">{card.description}</h6>
                              <p className="card-text">{card.priceOrg}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
</div>

  );
};

export {CardsProducts};

