import React from 'react'

const Footer = () => {
  return (
<>


<footer class="text-center bg-white text-teal-600 bg-gradient-to-r from-white to-teal-100 ...">
  <div class="container px-6">
    <div class="flex justify-center gap-x-12 py-6">

<a href="https://wa.me/+962788818125" data-tippy-content="WhatsApp">
<img src='./assest/whatsapp.png'
className='w-6 h-6 fill-current lg:w-7 lg:h-7 hover:scale-125 cursor-alias' />
</a>
<a className="pb-0.5 rounded-full hover:scale-125" href="https://www.facebook.com/Kaddy-oil-919674034765987"
data-tippy-content="Facebook">
<img src='./assest/facebook.png'
className='w-6 h-6 lg:w-7 lg:h-7 fill-curren cursor-alias' />
</a>
<a className="rounded-full hover:scale-125" href="https://www.instagram.com/kaddy_oil/?utm_source=qr"
data-tippy-content="Instagram">
<img src='./assest/instagram.png'
className='w-6 h-6 fill-current cursor-alias lg:w-7 lg:h-7'/></a>
    </div>




{/*
  MOBILE FORM
*/}
    <div className='block md:hidden lg:hidden'>
      <form action="">
        <div class="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
          <div class="md:ml-auto md:mb-6">
            <p class="">
              <strong>
              ! أشترك معنا لتصلك عروضنا
              </strong>
            </p> 
          </div>
          <div class="md:mb-6">
            <input
              type="number"
              class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="07XX XXX XXX"/>
          </div>
          <div class="md:mr-auto mb-6">
          <button type="submit" class="inline-block px-6 py-2 border-2 bg-teal-700 border-teal-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-teal-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              إرسال
            </button>
          </div>
        </div>
      </form>
    </div>
{/*
  DESKTOP FORM
*/}
<div className='hidden md:block lg:block'>
      <form action="">
        <div class="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
          <div class="md:ml-auto md:mb-6">
          <button type="submit" class="inline-block px-6 py-2 border-2 bg-teal-700 border-teal-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-teal-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              إرسال
            </button>
             
          </div>
          <div class="md:mb-6">
            <input
              type="number"
              class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="07XX XXX XXX"/>
          </div>
          <div class="md:mr-auto mb-6">
          <p class="">
              <strong>
              ! أشترك معنا لتصلك عروضنا
              </strong>
            </p>
          </div>
        </div>
      </form>
    </div>













    <div class="mb-6">
      <p>
        زيت كادي هو الحل الأمثل للتخلص من مشاكل الأظافر الضعيفة والمتكسرة, كما يعمل على 
        نمو الأظافر بشكل سريع جداً, غني بالفيتامينات النقية
        ويحتوي على فيتامين ( ي ),
       <br></br>
       ❤️ولا يبطل الوضوء 
      </p>
    </div>























    <section class="flex flex-wrap items-center justify-center">
          <a target='_blank' href="https://wrekat.vercel.app">
            <div class="flex items-center mb-3">
              <p class="font-serif text-xs cursor-help hover:scale-110 leading-4">2022 <span class="font-serif">MHMAD
                WREKAT</span></p>
              <div class="border-l border-gray-800 cursor-help pl-2 ml-2">
                <p class="font-serif text-xs cursor-help hover:scale-110 leading-4">Inc. All Rights Reserved</p>
              </div>
            </div>
          </a>
        </section>
  </div>


</footer>





</>  
)
}

export default Footer