import React from 'react';
import salesData from './data/sales.json';
const Sales = () => {
  return (
<>

<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b bg-gray-800">
            <tr>
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
              Details
              </th>
            </tr>
          </thead>
          <tbody>

{
salesData.map(item => {
return <>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {item.date}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {item.bottle}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {item.price}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.through}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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