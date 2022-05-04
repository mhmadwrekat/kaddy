import React from 'react';
import Header from './Header';
import Collapse from './Collapse';
import Carosal from './Carosal';
import Footer from './Footer';
const Main = () => {  
return (
<>
<section className='bg-white'>

{/* Header */}
<Header />


{/* Carosal */}
<Carosal />

{/* Collapse */}
<div id="Who?">
<Collapse />
</div>

{/* Footer */}
<div className="lg:ml-20">
<Footer />
</div>

</section>
</>
    )
}
export default Main