import React from 'react';

const BottomSilder = () => {
  return (
    <div className='container'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2600313f-1710-4c01-a1d3-cdc98ff69589.jpg?format=avif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/cf7d9bd1-315d-4182-840c-5d3d00226e55.gif?format=avif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/715f6692-240e-4018-ac61-0537d627240b.png?format=avif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/0a9eb102-1449-4612-85e1-b94c4920b01f.png?format=avif" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div><br /><br /><br />
    </div>
  )
}

export {BottomSilder}
