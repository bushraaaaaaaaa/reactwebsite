import React from 'react'

const Second_Nav = () => {
  return ( <>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light head"> 
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav g-5">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <b className='text-primary'>All CATEGORIES</b>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><b>ELECTRONIES</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>MENS</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>WOMENS</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>HOME</b></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"><b>BEAUTY & FRANGRANCE</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>BABY</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>TOYS</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>SPORTS</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>HEALTHY & NUTRITION</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>BESTSELLERS</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>SELL ON NOON</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="container">
      <img width='100%' src="https://f.nooncdn.com/mpcms/EN0001/assets/c21a10fa-ccad-4551-84c7-55d21fdbc345.png?format=avif" alt="" />
      <div className="row">
        <div className="col-md-8">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img width='100%' height='100%' src="https://f.nooncdn.com/mpcms/EN0001/assets/52a25365-3d6c-43f1-896e-80e56cf2012b.png?format=avif" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img  width='100%' height='100%' src="https://f.nooncdn.com/mpcms/EN0002/assets/aac48369-b009-4b8b-ad11-b402928bb756.png?format=avif" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img  width='100%' height='100%' src="https://f.nooncdn.com/mpcms/EN0001/assets/fc1126f5-5186-47a3-b207-69f57dfa6b2f.png?format=avif" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
       
      </div>
    </div>
    <div className="container" style={{backgroundColor:'white'}}>
      <div className="row">
<div className="col">
  <img  src="https://f.nooncdn.com/mpcms/EN0001/assets/cf847f24-9b25-4a43-b2b1-ff8881fb51ab.png?format=avif" alt="" />
</div>
<div className="col">
  <img  src="https://f.nooncdn.com/mpcms/EN0001/assets/705eead8-27f2-4704-96b6-c02c873b380a.png?format=avif" alt="" />
</div>
<div className="col">
  <img  src="https://f.nooncdn.com/mpcms/EN0001/assets/878b025c-c97c-432f-aa18-a430d88a813d.png?format=avif" alt="" />
</div>
<div className="col">
  <img  src="https://f.nooncdn.com/mpcms/EN0001/assets/1988c23a-de3e-41d7-9381-2cb6784a3b74.png?format=avif" alt="" />
</div>
<div className="col">
  <img  src="https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png?format=avif" alt="" />
</div>
<div className="col">
  <img  src="https://f.nooncdn.com/mpcms/EN0001/assets/67edd848-2b6f-4c93-b2e6-c72879bafb03.png?format=avif" alt="" />
</div>
    </div>
    </div>
    {/* ================================================= */}
    <br /><br />
    <div className="container" style={{backgroundColor:'yellow'}}>
 <br /> <center> <h4><b>More reasons to shop</b></h4></center>
<div className="row">
  <div className="col-sm-2 col-md-3">
    <img width='200' src="https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif" alt="" />
    <img  width='200' src="https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif" alt="" />
  </div><br /><br />
  <div className="col-sm-2 col-md-3">
    <img width='200' src="https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif" alt="" />
    <img  width='200' src="https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif" alt="" />
  </div>
  <div className="col-sm-2 col-md-3">
    <img width='200' src="https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif" alt="" />
    <img  width='200' src="https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif" alt="" />
  </div>
  <div className="col-sm-2 col-md-3">
  <img width='200' src="https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif" alt="" />
    <img  width='200' src="https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif" alt="" />
  </div>
  
</div><br /><br />
    </div>
</>
  );

}

export{ Second_Nav}
