import React, { useEffect } from "react";

const Header = () => {



    useEffect(() => {
        try {
            const btn = document.querySelector("button.mobile-menu-button");
            const menu = document.querySelector(".mobile-menu");
            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });
        } catch (error) {
            handleError(error);
        }
        function handleError(error) {
            console.error(error);
        }
    }, []);
  return (
<>
<nav class="bg-white opacity-80 border-gray-200 px-2 sm:px-4 py-3 rounded" translate='no'>
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <div class="flex md:order-0">
                        <a href="./assest/wrekatt.pdf">
<img 
className="w-6/12 rounded-xl "
src='./assest/logo4.jpg'>
</img>
                        </a>
                        <button class="mobile-menu-button" type="button" >
                            <span class="sr-only">Open main menu</span>
                            <svg class="text-black md:hidden flex w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>                     
                    </div>                    
      <div>
                       
                    
      </div>

                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-2" id="mobile-menu-4">
                        <ul class=" flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-teal-600 md:text-sm md:font-medium">
                        <li>
                                
<button className="px-3 py-2 bg-teal-600 rounded-full ">
    <a href="#Skills" class="cursor-grab hover:scale-110 font-bold block pr-4 pl-3 text-white hover:text-gray-200 md:border-0 md:p-0">
أطلب الآن
    </a>
</button>

</li>
                                <li>
<button className="px-3 py-2">

    <a href="#Projects" class="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-teal-900 md:border-0 md:p-0">
    من نحن ؟
    </a>
</button>
</li>
<li>
<button className="px-3 py-2">
    <a href="#Message" class="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-teal-900 md:border-0 md:p-0">
    تواصل معنا
    </a>
</button>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div translate='no' class='hidden mobile-menu md:hidden w-full bg-white opacity-80 border-gray-200'>
                <ul class="flex flex-col md:flex-row text-teal-600 md:space-x-0 md:mt-0 md:text-sm md:font-medium text-center">
<div className="px-auto">

                <button className="px-4 py-2 bg-teal-600 rounded-full">
    <a href="#Skills" class="text-xs cursor-grab hover:scale-110 font-bold block py-2 pr-4 text-white pl-3  hover:text-gray-200 md:border-0 md:p-0">
    أطلب الآن
    </a>
</button>
</div>

                <button>
    <a href="#Projects" class="text-xs cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-teal-800 md:border-0 md:p-0">
    من نحن ؟
    </a>
</button>

                    <button>
    <a href="#Message" class="cursor-grab text-xs hover:scale-110 font-bold block py-2 pr-4 pl-3 hover:text-teal-800 md:border-0 md:p-0">
    تواصل معنا
    </a>
</button>
                </ul>
            </div>
</>
    )
}

export default Header
