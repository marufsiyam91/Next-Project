import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <h1>About page</h1>
      <div className={styles.about_image_wrapper}>
        
        <Image src={'https://plus.unsplash.com/premium_photo-1671397272333-5807b32630f3?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="flower" fill/>
      </div>
    </div>
  );
};

export default AboutPage;
