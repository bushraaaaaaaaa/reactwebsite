import React from 'react';
import { FaChevronRight , FaChevronLeft } from "react-icons/fa";
const dataArr = [
  {
    imagesrc: 'https://f.nooncdn.com/p/v1615231293/N20985375A_1.jpg?format=avif&width=240',
    rating: 4,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    priceOrg: 'AED 4,849',
    stock: 'only 2 left in stock',
    btn: 'express',
  },
  {
    imagesrc: 'https://f.nooncdn.com/p/pnsku/N18938413A/45/_/1704712174/56ba35b5-a00f-47ff-800e-a129c903210d.jpg?format=avif&width=240',
    rating: 4,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    priceOrg: 'AED 4,849',
    stock: 'only 2 left in stock',
    btn: 'express',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1690474727/N53418074A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'express',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1615220190/N13164722A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'express',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1665392506/N53356366A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1638273633/N41247590A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1637683235/N51239123A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1585893483/N19151175A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1692875234/N12824851A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/pnsku/N51642603A/45/_/1701805583/575e9133-c285-4e06-a6a7-65652a78e2a7.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
      {
        imagesrc: 'https://f.nooncdn.com/p/v1677755610/N53382922A_1.jpg?format=avif&width=240',
        rating: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        priceOrg: 'AED 4,849',
        stock: 'only 2 left in stock',
        btn: 'standard',
      },
];

const Cards = () => {
  return (
    <div className="container" style={{backgroundColor:'white'}}>
      <section className="pt-5 pb-5">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-3"><b>Clearance deals</b></h3>
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

export {Cards};

