import React, { useRef } from "react";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID_ORDER;
import emailjs from '@emailjs/browser';
import Link from "next/link";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import OrderHead from "../components/OrderHead";
import Footer from "../components/Footer";
const order = () => {
  // CommonJS
  const Swal = require('sweetalert2');
/*
            const feedback = {
                name: event.target.name.value,
                email: event.target.email.value,
                phone:event.target.phone.value,
                number:event.target.number.value,
                adress: event.target.adress.value,
                author: 2
            }
 */
  {/* POST ORDER */ }
      const form = useRef();
      const handelFeedback = (event) => {
          event.preventDefault();
            Swal.fire({
              title: '!تم بنجاح',
              text: '!سوف يتم التواصل معك من أجل تاكيد الطلب',
              icon: 'success',
              imageUrl: './assest/logo4.jpg',
              imageWidth: 250,
              imageHeight: 100,
              imageAlt: 'kaddy oil',
            })
            emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, `${PUBLIC_KEY}`);
            event.target.reset();
            }
            {/* END POST ORDER */ }
return (
<>
<section className="bg-gradient-to-r from-white to-teal-100 ...">
<OrderHead />

<section className="pt-10 text-gray-900 sm:pt-10 ">
<div className="text-gray-100 opacity-95">
<div className="container flex flex-col mx-auto md:flex-row">
<div className="container w-full px-4">
<div className="flex flex-wrap justify-center">
<div className="w-full px-4 lg:w-5/12">
<div
className="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-gradient-to-r from-teal-400 to-teal-600 opacity-90">
<div className="flex-auto p-5 lg:p-10">
<h4 className="mb-3 text-2xl font-semibold text-center">!! للطلب </h4>
<form id="feedbackForm" method='post' onSubmit={handelFeedback} ref={form}>


<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="name">الأسم</label>
<input type="text" name="name" id="name"
class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
placeholder="ادخل الاسم هنا "
required />
</div>



<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="email">الأيميل</label>
<input type="email" name="email" id="email"
class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
 placeholder="Kaddy@gmail.com"
required />
</div>



<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="phone">الهاتف</label>
<input type="phone" name="phone" id="phone" 
class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
placeholder="0799999999"
required />
</div>


<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="number">عدد العلب ؟</label>
<select name="number" id="number"
class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-100 placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-400"
required >
<option value="1"> 1 - bottle</option>
<option value="2">2 - bottles</option>
<option value="3">3 - bottles</option>
<option value="4">4 - bottles</option>
<option value="5">5 - bottles</option>
    </select>
</div>



<div className="relative w-full mb-3">
<label className="block float-right mb-2 text-xs font-bold uppercase"
for="adress"> العنوان </label>
<textarea maxlength="200" name="adress" id="adress" rows="1"
cols="80"
className="w-full px-3 py-3 text-sm text-gray-800 bg-gray-100 border-0 rounded shadow placeholder-gyay-400 focus:outline-none"
placeholder="Jordan - Amman - Jubeiha" required></textarea>
</div>
<
  
  
  
  div className="mt-6 text-center">
<button id="feedbackBtn" type="submit"
className="px-6 py-3 mx-auto mb-1 mr-1 text-sm font-bold text-center text-gray-200 uppercase rounded shadow outline-none bg-amber-500 hover:bg-amber-600 cursor-alias active:bg-teal-700 hover:shadow-lg focus:outline-none"
                                                            >أرسال
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
<div className="lg:ml-20">
<Footer />
</div>




</section>
</>
  )
}

export default order