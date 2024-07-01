import * as React from 'react';
import FoamContainer from '../FormContainer/FoamContainer';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  return (
<div className="h-full w-full container mx-auto ">

    <FoamContainer/>
</div>

  )
};

export default Container;
