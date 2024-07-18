import React from 'react';
import ServiceCard from './ServiceCard';
import img1 from '../../../src/Image/services/web.png';
import img2 from '../../../src/Image/services/android.png';
import img3 from '../../../src/Image/services/product.png';
import img4 from '../../../src/Image/services/brand.png';
import img5 from '../../../src/Image/services/design cunslt.png';
import img6 from '../../../src/Image/services/dev consult.png';

function ServiceHero2() {
  return (
    <div className="text-center lg:pt-5 pt-3">
      <p className="text-lg lg:text-xl text-blue-700">OUR SERVICES</p>
      <h2 className="text-xl lg:text-2xl font-bold mb-8">Discover Luxury in Services</h2>

      {/* First row of ServiceCards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 lg:mx-10 mx-1">
        <ServiceCard logo={img1} heading="Web Development" desc="Crafting tailored web solutions to elevate your online presence. From responsive designs to robust backend systems, we ensure seamless user experiences and business growth." />
        <ServiceCard logo={img2} heading="Android Development" desc="Empowering your digital footprint with bespoke Android applications. Our team delivers intuitive interfaces and optimized performance, driving engagement and success in the mobile landscape" />
        <ServiceCard logo={img3} heading="Product Designing" desc="Transforming concepts into user-centric products that captivate and delight. Our approach blends creativity and functionality to deliver innovative designs that resonate with your audience and drive market success." />
      </div>

      {/* Second row of ServiceCards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:mx-10 mx-1">
        <ServiceCard logo={img4} heading="Brand Designing" desc="Crafting compelling brand identities that resonate with your audience. Our designs embody your values, telling your story visually and fostering lasting connections with your customers." />
        <ServiceCard logo={img5} heading="Design Consulting" desc="Elevating your design strategy to unlock your brand's full potential. We offer expert guidance and innovative solutions to enhance user experiences and drive impactful design decisions." />
        <ServiceCard logo={img6} heading="Dev. Consulting" desc="Strategic consulting services tailored to your development needs. From project planning to execution, we provide expert guidance and solutions to maximize efficiency and drive successful outcomes." />
      </div>
    </div>
  );
}

export default ServiceHero2;
