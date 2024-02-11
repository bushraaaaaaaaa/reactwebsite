import React from 'react'

const Navbar = () => {
  return <>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img width='100' src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <li class="nav-item dropdown navbar-nav ms-auto mb-2 mb-lg-0">
    
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <input class="m-2 mx-auto p-2 rounded" type='text' placeholder="What are you looking for?"/>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">العربية</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">| <b>Log In</b> <i class="bi bi-person"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">| <b>Wlshllst</b> <i class="bi bi-heart"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">| <b>Cart</b> <i class="bi bi-cart"></i></a>
        </li>
      </ul>

    </div>
  </div>
</nav>
</div>
</>
}

export {Navbar}
