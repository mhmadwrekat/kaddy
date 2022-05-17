import { Reveal, Fade, Slide } from 'react-awesome-reveal'
import React from 'react'
import { keyframes } from '@emotion/react'
import Link from 'next/link'
import Main from '../components/Main'
import Nav from '../components/Nav'
import Head from 'next/head'

const index = () => {
  const test =
    ' ملكا«سيطر الدفاع المدني على حريق ضخم التهم 1200 دونم من الاعشاب الجافه والاشجار الحرجيه والمثمره , في محميهغابات اليرموك بمنطقه ام قيس في لواء بني كنانه بمحافظه اربد ,شمالي الاردن.وحاولت قوات الأطفاء ,السيطرة على الحريق ل10 ساعات وواجه'

  const test2 = test.split('', 50)
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d( 350px, 10px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  `
  return (
    <>
      <Head>
        <title>Kaddy Oil</title>
        <link rel="icon" href="/assest/pagelogo.png" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Kaddy Natural Oils  - Jordan-Amman" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
      </Head>
      <div>
        <h2 className="font-TSlight text-md mt-2 lg:text-base">
          {test2.slice(0, 20)} .....
        </h2>

        <div className="my-16"></div>

        <h2 className="font-TSlight text-md mt-2 lg:text-base">
          {test.slice(0, 20)}..........
        </h2>

        <div className="my-16"></div>

        <h2 className="font-TSlight text-md mt-2 lg:text-base">
          {test2} .....
        </h2>
      </div>
      <Main />
    </>
  )
}
export default index
/*
<section className='bg-white'>
<Nav />
<br></br>
<div className="text-center">
<Fade cascade triggerOnce>
<p translate='no' className="mx-5 font-sans text-5xl font-bold text-teal-700">Kaddy Oil</p>
<br></br>
<p translate='yes' className="mx-5 font-sans text-xl font-bold text-teal-700">
.زيت كادي هو مجموعة من الزيوت والفيتامينات الطبيعية للعناية بالاظافر بالطريقة الصحيحة
</p>
<br></br>
<img className="w-4/6 mx-auto rounded-full lg:w-3/12"
src='./assest/logo2.jpg'></img>
<br></br>
</Fade>
<Slide>
<div>
<Link href="/home">
<button translate='no'
class="animate-bounce
font-mono bg-teal-600 hover:bg-teal-600 text-white font-bold py-3 px-16 border-b-4 border-teal-800 hover:border-teal-900 rounded-xl shadow-2xl text-2xl">
Start!
</button>
</Link>
</div>
</Slide>
<br></br>
</div>
</section>
*/
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
