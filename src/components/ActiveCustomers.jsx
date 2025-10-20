
import React from "react";


const ActiveCustomers = () => {
  const logos = [
    "src/assets/logos/global_greyscale.png",
    "src/assets/logos/gurvansor_greyscale.png",
    "src/assets/logos/niislel_greyscale.png",
    "src/assets/logos/premiumedited1.png",
    "src/assets/logos/prodent-greyscale.png",
  ];

 
  return (
    <div className="container text-center my-5">
      <div className="logo-slider">
        <div className="logo-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ActiveCustomers;
