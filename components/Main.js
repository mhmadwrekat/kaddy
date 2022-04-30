import React from 'react';
import Header from './Header';
import Collapse from './Collapse';
import Carosal from './Carosal';
import Footer from './Footer';


const Main = () => {
  
return (
<>
<section className='bg-gradient-to-r from-white to-teal-100 ...'>

<Header />


<Carosal />


<div id="Who?">
<Collapse />
</div>




<Footer />

</section>
</>
    )
}

export default Main
