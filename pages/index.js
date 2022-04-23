import { Reveal, Fade, Slide } from "react-awesome-reveal";
import React from 'react';
import { keyframes } from "@emotion/react";
import Home from './Home';
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
<section className='h-screen bg-purple-800'>
<Nav />
<br></br><br></br><br></br>
<div className="text-center">




<Slide cascade>
<Slide>
<p className="mx-5 font-sans text-5xl font-bold text-gray-200">Kaddy Oil</p>
</Slide>
<br></br>
<br></br>
<Slide>
<p className="mx-5 font-sans text-xl font-bold text-gray-200">
زيت كادي هو مجموعة من الزيوت والفيتامينات الطبيعية للعناية بالاظافر بالطريقة الصحيحة
</p>
</Slide>
<br></br>
<Slide>
<p className="mx-5 font-sans text-xl font-bold text-gray-200">Kaddy Oil is a group of natural oils and vitamins to take care of nails in the right way</p>
</Slide>

</Slide>
<Reveal delay={3000} keyframes={customAnimation}>
<div>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br>
<button class="
font-mono bg-amber-500 hover:bg-amber-600 text-white font-bold py-8 px-20 border-b-4 border-amber-600 hover:border-amber-600 rounded-xl text-3xl">
 !! إبدأ
</button>
</div>
</Reveal>



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


















