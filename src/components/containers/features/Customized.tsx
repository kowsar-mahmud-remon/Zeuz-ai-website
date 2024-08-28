import React from "react";
import Image from "next/image";
import Link from "next/link";


import One from "public/img/svg-ai/Group 38064.png";

const Customized = () => {
  return (

      // <div>
      // <div className="feedbacK__content" style={{justifyContent:'center',alignItems:'center'}}>
      // <Image
      //                   className="w-full"
                        
      //                   src={One}
      //                   // width={700}
      //                   // height={400}
      //                   alt="image not found"
      //                   style={{
      //                     justifyContent:'center',alignItems:'center'
      //                   }}
      //                 />
      // </div>
      // </div>

<section className="features__area grey-bg-3 pt-120 pb-60">
      <div className="container">
       
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="features__items mb-60">
              
              
            <Image
                        className="w-full"
                        
                        src={One}
                        // width={700}
                        // height={400}
                        alt="image not found"
                        style={{
                          justifyContent:'center',alignItems:'center'
                        }}
                      />
            </div>
          </div>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default Customized;
