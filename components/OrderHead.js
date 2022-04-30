import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import Nav from "./Nav";
const OrderHead = () => {
    return (
        <>
            <Nav />

            <nav class="bg-white opacity-80 border-gray-200 px-2 sm:px-4 py-3 rounded" translate='no'>
                <div class="mx-auto container flex flex-wrap md:justify-between lg:justify-between justify-center items-center ...">
                    <Link href="/">
                        <img
                            className="w-5/12 cursor-grab hover:scale-110 md:w-3/12 lg:w-40 rounded-xl "
                            src='./assest/logo4.jpg'>
                        </img>
                    </Link>
                    <div>
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-2" id="mobile-menu-4">
                        <ul class=" flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-teal-600 md:text-sm md:font-medium">
                            <Slide cascade triggerOnce>
                                <Slide>
                                    <li>
                                        <Link href="/">
                                            <button className="px-3 py-2 bg-teal-600 rounded-full ">
                                                <a class="cursor-grab hover:scale-110 font-bold block pr-4 pl-3 text-white hover:text-gray-200 md:border-0 md:p-0">
                                                    الرئيسية
                                                </a>
                                            </button>
                                        </Link>
                                    </li>
                                </Slide>
                                <Slide>
                                    <li>
                                        <Link href="/#Who?">
                                            <button className="px-3 py-2">
                                                <a class="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-teal-900 md:border-0 md:p-0">
                                                    من نحن ؟
                                                </a>
                                            </button>
                                        </Link>
                                    </li>
                                </Slide>
                                <Slide>
                                    <li>
                                        <button className="px-3 py-2">
                                            <a href="#Contact" class="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-teal-900 md:border-0 md:p-0">
                                                تواصل معنا
                                            </a>
                                        </button>
                                    </li>
                                </Slide>
                            </Slide>
                        </ul>
                    </div>
                </div>
            </nav>
            <div translate='no' class='mobile-menu md:hidden w-full bg-white opacity-80 border-gray-200'>
                <ul class="flex flex-row justify-between md:flex-row text-teal-600 text-center">
                    <Slide cascade triggerOnce>
                        <Slide>
                            <Link href="/#Who?">
                                <button className="my-1">
                                    <a class="text-xs cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3 hover:text-teal-800 md:border-0 md:p-0">
                                        من نحن ؟
                                    </a>
                                </button>
                            </Link>
                        </Slide>
                        <Slide>
                            <div className="px-auto">
                                <Link href="/">
                                    <button className="px-5 py-0.5 my-1 bg-teal-600 rounded-full hover:bg-teal-800">
                                        <a class="text-xs cursor-grab hover:scale-110 font-bold block py-2 pr-4 text-white pl-3  hover:text-gray-200 md:border-0 md:p-0">
                                            الرئيسيه
                                        </a>
                                    </button>
                                </Link>
                            </div>
                        </Slide>
                        <Slide>
                            <button className="my-1">
                                <a href="#Contact" class="cursor-grab text-xs hover:scale-110 font-bold block py-2 pr-4 pl-3 hover:text-teal-800 md:border-0 md:p-0">
                                    تواصل معنا
                                </a>
                            </button>
                        </Slide>
                    </Slide>
                </ul>
            </div>
        </>
    )
}
export default OrderHead