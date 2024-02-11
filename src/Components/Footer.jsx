import React from 'react'
import {FaFacebookF , FaTwitter  ,FaLinkedinIn} from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer_Components = () => {
  return ( <>
    <br /><br /><br /><br /><br /><br /><br />
    <div style={{backgroundColor:'white'}}> <hr />
      <div className="container">
        <div className="row">
        <div className="col"><br />
        <h6><b>ELECTRONICS</b></h6>
        <p>Mobile</p>
        <p>Tablets</p>
        <p>Labtops</p>
        <p>Home Appliances</p>
   
      </div>
      <div className="col"><br />
        <h6><b>FASHION</b></h6>
        <p>Women's Fashion</p>
        <p>Men's Fashion</p>
        
        <p>Womens Handbag</p>
        <p>men's Eyewear</p>
      </div>
      <div className="col"><br />
        <h6><b>HOME AND KITCHEN</b></h6>
        <p>Bath</p>
       
        <p>Pet Supplies</p>
      </div>
      <div className="col"><br />
        <h6><b>BEAUTY</b></h6>
        <p>Bath</p>
        <p>Home Decor</p>
        <p>Pet Supplies</p>
      </div>
      <div className="col"><br />
        <h6><b>BABY & TOYS</b></h6>
        <p>Bath</p>
        <p>Home Decor</p>  
        <p>Pet Supplies</p>
      </div>
      <div className="col"><br />
        <h6><b>TOP BRANDS</b></h6>
        <p>Bath</p> 
        <p>Patio lawn & Garden</p>
        <p>Pet Supplies</p>
      </div>
      <div className="col"><br />
        <h6><b>DAILY GROCERIES</b></h6>
        <p>Bath</p>
        <p>Home Decor</p>
        <p>Patio lawn & Garden</p>
        <p>Pet Supplies</p>
      </div>

    
      <div className="conatiner">
        <div className="row g-5">
        <br /><br /><br /> <br />
           <div className="col-md-6">
                <h6><b>SHOP ON THE GO</b></h6>
                <img width='100' src="https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="" />
                <img width='100' src="https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="" />
                <img width='100' src="https://f.nooncdn.com/s/app/com/noon/images/Huawei-icon.png" alt="" />
          </div>
          <div className="col-md-6">
                <h6><b>CONNECT WITH US</b></h6>
                &nbsp; <FaFacebookF size={35}  style={{backgroundColor:"yellow",padding:'10px',borderRadius:'50%'}}/>
                &nbsp;<FaTwitter  size={35} style={{backgroundColor:"yellow",padding:'10px',borderRadius:'50%'}}/>
                &nbsp;<CiInstagram  size={35} style={{backgroundColor:"yellow",padding:'10px',borderRadius:'50%'}}/>
                &nbsp;<FaLinkedinIn  size={35} style={{backgroundColor:"yellow",padding:'10px',borderRadius:'50%'}} />
                <br /><br /><br />  </div>
        </div>
       
        </div>
      </div>
      </div>
      </div>
   
    {/* // =========================================== */}
     <div  style={{backgroundColor: '#F5F5F5'}}>
        <br /><br />
    <div className="container">
        <div className="row">
            <div className="col">
                <h6><b>© 2024 noon. All Rights Reserved</b></h6>
            </div>
            <div className="col">
               <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mastercard.svg" alt="" />
               <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-visa.svg" alt="" />
               <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tabby_v2.svg" alt="" />
               <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-amex.svg" alt="" />
               <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-amex.svg" alt="" />
               <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/cod-en.svg" alt="" />
            </div>
            <div className="col d-flex" style={{listStyle:'none'}}>
                <li>Careers</li>&nbsp;&nbsp;
                <li>WarrantyPolicy</li>&nbsp;&nbsp;
                <li>Sellwithus</li>&nbsp;&nbsp;
               <li>TermsofUse</li>&nbsp;&nbsp;
                <li>TermsofSale</li>&nbsp;&nbsp;
                <li>PrivacyPolicy</li>&nbsp;&nbsp;
                <li>ConsumerRights</li>&nbsp;&nbsp;
                <br /><br />
              </div>
           </div>
        </div>
        <br />
        </div>
    </>
  )
}

export {Footer_Components} 
