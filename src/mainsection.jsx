import React from 'react'
import {Navbar}  from './Components/Navbar';
import { Second_Nav } from './Components/Second_Nav';
import { CardRender } from "./Components/CardRender";
import { CardsProducts} from './Components/CardsProducts';
import { BottomSilder } from './Components/BottomSilder';
import { ImagesCard } from './Components/imagesCard';
import {Footer_Components } from './Components/Footer';
const Mainsection = () => {
  return (
    <div>
    <div>
   <Navbar/>
   <Second_Nav/>
   <CardRender/>
   <CardsProducts/>
   <BottomSilder/>
   <ImagesCard/>
   <Footer_Components/>
    </div>



    </div>
  )
}

export default Mainsection