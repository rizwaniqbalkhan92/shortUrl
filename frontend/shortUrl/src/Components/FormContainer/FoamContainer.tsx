import * as React from 'react';

interface IFoamContainerProps {
}

const FoamContainer: React.FunctionComponent<IFoamContainerProps> = () => {
  return (
    <div className="container mx-auto p-2 ">
<div className='bg-banner my-8 rounded-xl bg-cover' >
  <div className="w-full  h-full rounded-xl p-20 backdrop-brightness-50">

  <h1 className="text-white text-4xl text-center pb-4   font-extralight">
    short url 
  </h1>
  <p className="text-center p-2 text-yellow-950">Paste Your Link Here</p>
  <p className="text-center p-2 text-yellow-100">By this tool you can short url long url into short</p>
  </div>
</div>
    </div>
  )
};

export default FoamContainer;
