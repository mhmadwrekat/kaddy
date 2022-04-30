import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import Nav from "./Nav";
const Header = () => {
    return (
        <>
            <Nav />

            <nav class="bg-white opacity-80 border-gray-200 px-2 sm:px-4 py-3 rounded" translate='no'>
                <div class=" mx-auto container flex flex-wrap md:justify-between lg:justify-between justify-center items-center ...">
                    <Link href="/">
                        <img
                            className="w-5/12 cursor-grab hover:scale-110 md:w-3/12 lg:w-40 rounded-xl "
                            src='./assest/logo4.jpg'>
                        </img>
                    </Link>
                    {/*     <button class="mobile-menu-button" type="button" >
                            <span class="sr-only">Open main menu</span>
                            <svg class="text-black md:hidden flex w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>*/}
                    <div>
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-2" id="mobile-menu-4">
                        <ul class=" flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-teal-600 md:text-sm md:font-medium">
                            <Slide cascade triggerOnce>
                                <Slide>
                                    <li>
                                        <Link href="/order">
                                            <button className="px-3 py-2 bg-teal-600 rounded-full animate-bounce ">
                                                <a class="cursor-grab hover:scale-110 font-bold block pr-4 pl-3 text-white hover:text-gray-200 md:border-0 md:p-0">
                                                    أطلب الآن
                                                </a>
                                            </button>
                                        </Link>
                                    </li>
                                </Slide>
                                <Slide>
                                    <li>
                                        <button className="px-3 py-2">
                                            <a href="#Who?" class="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-teal-900 md:border-0 md:p-0">
                                                من نحن ؟
                                            </a>
                                        </button>
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
                            <button className="my-1">
                                <a href="#Who?" class="text-xs cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3 hover:text-teal-800 md:border-0 md:p-0">
                                    من نحن ؟
                                </a>
                            </button>
                        </Slide>
                        <Slide>
                            <div className="px-auto">
                                <Link href="/order">
                                    <button className="animate-bounce    px-5 py-0.5 my-1 bg-teal-600 rounded-full hover:bg-teal-800">
                                        <a class="text-xs cursor-grab hover:scale-110 font-bold block py-2 pr-4 text-white pl-3  hover:text-gray-200 md:border-0 md:p-0">
                                            أطلب الآن
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
export default Header
/*hover:animate-spin*/