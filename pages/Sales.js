import React from 'react';
import salesData from './data/sales.json';
import Nav from '../components/Nav';
const Sales = () => {

  let counter = salesData.length ;

  let industry = 30 ;

  let sale = 10 ;

  let free = 5 ;

  let available = industry - (sale + free);


return (
<>
<Nav />
<section className='font-mono lg:text-4xl text-lg font-extrabold flex mx-5 my-5 lg:mx-20 justify-between ...'>

{/* الانتاج */}
{/* الانتاج */}

<div className=''>
<img
  src="./assest/industry.png"
  class="rounded-full lg:w-32 w-16"
  alt="kaddy"
/>
<p className='mt-2 text-center'>
     {industry}
</p>
</div>

{/* المباااااع */}
{/* المباااااع */}

<div>
<img
  src="./assest/sales.png"
  class="rounded-full lg:w-32 w-16"
  alt="Kaddy"
/>
<p className='mt-2 text-center'>
   {sale}
</p>
</div>
{/* المجااااني */}
{/* المجااااني */}
<div>
<img
  src="./assest/free.png"
  class="rounded-full lg:w-32 w-16"
  alt="kaddy oil"
/>
<p className='mt-2 text-center'>
    {free}
</p>
</div>

{/* المتبقي */}
{/* المتبقي */}

<div>
<img
  src="./assest/available.png"
  class="rounded-full lg:w-32 w-16"
  alt="kaddy-oil"
/>
<p className='mt-2 text-center'>
    {available}
</p>
</div>
</section>


<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b bg-gray-800">
            <tr>
            <th scope="col" class="text-xs lg:text-sm font-medium text-white px-1 py-4">
              #
              </th>
              <th scope="col" class="text-xs lg:text-sm font-medium text-white px-1 py-4">
                Date
              </th>
              <th scope="col" class="text-xs lg:text-sm font-medium text-white px-1 py-4">
                Bottle
              </th>
              <th scope="col" class="text-xs lg:text-sm font-medium text-white px-1 py-4">
                Price
              </th>
              <th scope="col" class="text-xs lg:text-sm font-medium text-white px-1 py-4">
              Through
              </th>
            <th scope="col" class="text-xs lg:text-sm font-medium text-white px-1 py-4">
              Account
              </th>
<th scope="col" class="text-xs lg:text-sm font-medium text-white px-1 py-4">
              Details
              </th>
            </tr>
          </thead>
          <tbody>
{/*
Account
❌
✅
✔️
*/}
{
salesData.map(item => {
return <>
            <tr class="bg-white border-b">
            <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-medium">
              {counter--}
              </td>
              <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-medium">
              {item.date}
              </td>
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {item.bottle}
              </td>
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {item.price}
              </td>
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {item.through}
              </td>
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {item.account}
              </td>
<td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {item.details}
              </td>
            </tr>
</>
                                })
                            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</>  
)
}
export default Sales
