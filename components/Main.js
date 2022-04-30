import React from 'react';
import Header from './Header';
import Collapse from './Collapse';
import Carosal from './Carosal';
import Dcarosal from './Dcarosal';
import Footer from './Footer';


const Main = () => {
  
return (
<>
<section className='bg-gradient-to-r from-white to-teal-100 ...'>

<Header />


{/* Mobile Carosal */}
<section className='block md:hidden lg:hidden'>
<Carosal />
</section>
{/* Desktop Carosal */}
<section className='hidden md:block lg:block'>
<Dcarosal />
</section>





<div id="Who?">
<Collapse />
</div>








<Footer />

</section>
</>
    )
}

export default Main
