import * as React from 'react';
import axios from 'axios'
import { serverUrl } from '../helper/Constants';
interface IFoamContainerProps {
}

const FoamContainer: React.FunctionComponent<IFoamContainerProps> = () => {
  const [fullUrl,setFullUrl]=React.useState<string>("");
const handleSubmitForm=async(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
try{

  axios.post(`${serverUrl}/createShortUrl`,{
    fullUrl:fullUrl
  })
}
catch(error){

}

}
  return (
    <div className="container mx-auto p-2 bg-center ">
<div className='bg-banner my-8 rounded-xl bg-cover' >
  <div className="w-full  h-full rounded-xl p-20 backdrop-brightness-50">

  <h1 className="text-white text-4xl text-center pb-4   font-extralight">
    short url 
  </h1>
  <p className="text-center p-2 text-yellow-950">Paste Your Link Here</p>
  <p className="text-center p-2 text-yellow-100">By this tool you can short url long url into short</p>
  <form onSubmit={handleSubmitForm} action="
  ">
    <div className="flex">
       <div className="relative w-full">
        <div className="absolute inset-0 start-0 flex items-center ps-2 pointer-events-none text-slade-800">url shortner.link </div>
        <input type="text" value={fullUrl} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setFullUrl(e.target.value)}  className='w-full block p-4 ps-4 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg bg-white' placeholder='add your link here' required  />
        <button type='submit' className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300' >url shorten</button>
       </div>
    </div>
  </form>
  </div>


   
</div>
    </div>
  )
};

export default FoamContainer;
