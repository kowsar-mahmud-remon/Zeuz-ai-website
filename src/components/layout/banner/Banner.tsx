import React from "react";
import Link from "next/link";
import Image from "next/image";

import One from "public/img/shape/breadcrum-1.png.png";
import Two from "public/img/shape/ss.png";

const Banner = ({ title }: any) => {
  return (
    <div className="breadcrumb__area1 container123"  style={{backgroundColor:"#FAF9F6",position:'relative',zIndex:1}}>
     
      {/* <Image
        className="breadcrumb__shape-1"
        src={One}
        alt="image not found"
        priority
        
      /> */}
      <Image
        className="breadcrumb__shape-2"
        style={{top:'150px',width:"350px",height:"180px"}}
        src={Two}
        alt="image not found"
        priority
        
      />
    
    </div>
  );
};

export default Banner;
