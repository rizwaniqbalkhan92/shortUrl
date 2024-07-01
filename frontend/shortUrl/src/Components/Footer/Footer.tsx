import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-800'>
         <div className='text-base mx-auto text-white'>
                    Copy Right @RizCode
                </div>
    </div>
  )
};

export default Footer;
