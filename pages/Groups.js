import React from 'react'
import { Tab } from '@headlessui/react'
import Home from '../components/Groups/Home'
import Saloon from '../components/Groups/Saloon'
import Odai from '../components/Groups/Odai'
import { useRouter } from 'next/router'

const Groups = () => {
  const router = useRouter()
  const tabs = ['Home', 'Saloon', 'Odai']
  const tabsContent = [<Home />, <Saloon />, <Odai />]
  return (
    <>
      <img
        src="./assest/ChevronBackIcon.svg"
        className="absolute top-20 rounded bg-gray-600  font-bold text-gray-100"
        onClick={() => {
          router.push('/Sales')
        }}
      />

      <Tab.Group>
        <Tab.List className="bg-gray-800">
          <section className="flex justify-between p-4">
            {tabs.map((item) => {
              return (
                <Tab className="rounded bg-gray-600 py-2 px-7 font-bold text-gray-100">
                  {item}
                </Tab>
              )
            })}
          </section>
        </Tab.List>
        <Tab.Panels>
          {tabsContent.map((item) => {
            return <Tab.Panel>{item}</Tab.Panel>
          })}
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}

export default Groups
