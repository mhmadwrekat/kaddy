import { Reveal, Fade, Slide } from "react-awesome-reveal";
import React from 'react';
import { keyframes } from "@emotion/react";
import Home from './Home';
import Nav from '../components/Nav';
const index = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d( -250px, -250px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  `;
  return (
<>
<section className='h-screen bg-purple-800'>
<Nav />
<br></br><br></br><br></br>
<div className="text-center">




<Fade cascade>
<p className="font-sans text-5xl font-bold text-gray-200">Kaddy Oil</p>
<br></br>
<p className="font-sans text-3xl font-bold text-gray-200">
زيت كادي هو مجموعة من الزيوت والفيتامينات الطبيعية للعناية بالاظافر بالطريقة الصحيحة
</p>
<br></br>
<p className="font-sans text-3xl font-bold text-gray-200">Kaddy Oil is a group of natural oils and vitamins to take care of nails in the right way</p>
<div>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>
<Reveal keyframes={customAnimation}>
<button class="
font-mono bg-amber-500 hover:bg-amber-600 text-white font-bold py-8 px-20 border-b-4 border-amber-600 hover:border-amber-600 rounded-xl text-3xl">
 !! إبدأ
</button>
</Reveal>
</div>
</Fade>




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
*/


















