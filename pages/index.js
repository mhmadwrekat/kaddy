import { Reveal, Fade, Slide } from "react-awesome-reveal";
import React from 'react';
import { keyframes } from "@emotion/react";
import Link from "next/link";
import Nav from '../components/Nav';
const index = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d( 350px, 10px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  `;
  return (
<>
<section className='bg-white'>
<Nav />
<br></br>
<div className="text-center">
<Fade cascade triggerOnce>
<p className="mx-5 font-sans text-5xl font-bold text-teal-700">Kaddy Oil</p>
<br></br>
<p className="mx-5 font-sans text-xl font-bold text-teal-700">
زيت كادي هو مجموعة من الزيوت والفيتامينات الطبيعية للعناية بالاظافر بالطريقة الصحيحة
</p>
<br></br>
<p className="mx-5 font-sans text-xl font-bold text-teal-700">Kaddy Oil is a group of natural oils and vitamins to take care of nails in the right way</p>
<br></br>
<img className="w-4/6 mx-auto rounded-full lg:w-3/12"
src='./assest/logo2.jpg'></img>
<br></br>
</Fade>
<Slide>
<div>
<button class="
font-mono bg-teal-600 hover:bg-teal-700 text-white font-bold py-6 px-16 border-b-4 border-teal-800 hover:border-teal-900 rounded-full text-3xl">
<Link href="/home">

 !! إبدأ
 </Link>
</button>

</div>
</Slide>
<br></br>
</div>
</section>
</>  
)
}
export default index
/*
<Fade cascade>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
  </Fade>
  <Reveal delay={3000} triggerOnce keyframes={customAnimation}>
<div>
<button class="
font-mono bg-teal-600 hover:bg-teal-700 text-white font-bold py-6 px-16 border-b-4 border-teal-800 hover:border-teal-900 rounded-full text-3xl">
 !! إبدأ
</button>
</div>
</Reveal>
*/