import React from 'react'
import OdaiData from './Data/OdaiData.json'

const Odai = () => {
  let counter = OdaiData.length

  let industry = 18

  let sale = 10

  let free = 1

  let available = industry - (sale + free)
  return (
    <>
      <section className="flex justify-between bg-gray-200 px-5 py-5 font-mono text-lg font-extrabold lg:mx-20 lg:text-4xl">
        {/* الانتاج */}
        {/* الانتاج */}
        <div>
          <img
            src="./assest/industry.png"
            class="w-16 rounded-full lg:w-32"
            alt="kaddy"
          />
          <p className="mt-2 text-center">{industry}</p>
        </div>
        {/* المباااااع */}
        {/* المباااااع */}
        <div>
          <img
            src="./assest/sales.png"
            class="w-16 rounded-full lg:w-32"
            alt="Kaddy"
          />
          <p className="mt-2 text-center">{sale}</p>
        </div>
        {/* المجااااني */}
        {/* المجااااني */}
        <div>
          <img
            src="./assest/free.png"
            class="w-16 rounded-full lg:w-32"
            alt="kaddy oil"
          />
          <p className="mt-2 text-center">{free}</p>
        </div>
        {/* المتبقي */}
        {/* المتبقي */}
        <div>
          <img
            src="./assest/available.png"
            class="w-16 rounded-full lg:w-32"
            alt="kaddy-oil"
          />
          <p className="mt-2 text-center">{available}</p>
        </div>
      </section>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                    >
                      Bottle
                    </th>
                    <th
                      scope="col"
                      class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                    >
                      Through
                    </th>
                    <th
                      scope="col"
                      class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                    >
                      Account
                    </th>
                    <th
                      scope="col"
                      class="px-1 py-4 text-xs font-medium text-white lg:text-sm"
                    >
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
                  {OdaiData.map((item) => {
                    return (
                      <>
                        <tr class="border-b bg-white">
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            {counter--}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            {item.date}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            {item.bottle}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            {item.price}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            {item.through}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            {item.account}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            {item.details}
                          </td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Odai
