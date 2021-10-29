import React, {useState} from 'react';

import smileImage from '../../images/icons/smile.png';
import sadImage from '../../images/icons/sad.png';
import withanubisImage from '../../images/withanubis.png';
import withoutanubisImage from '../../images/withoutanubis.png';

import { ReactCompareSlider} from "react-compare-slider";

const WithWithout = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className='w-full mt-20'>
      <div className='space-y-3'>
        <h1 className='text-4xl font-semibold'>One Platform. <span className='text-primary'>All The Features.</span> </h1>
        <p className='text-xl text-gray'> Anubis brings together all the features you need to let your students work without any hiccups.</p>
      </div>

      <div className='flex flex-row items-center justify-between mt-10'>
        <div className='flex flex-row items-center justify-start space-x-10'>
          <div  className={`flex flex-row space-x-2 items-center justify-center cursor-pointer ${tab === 1 ? 'opacity-100': 'opacity-40'}`}>
            <img className='w-6 h-6' src={smileImage} />
            <p className= 'text-2xl'>With Anubis</p>
          </div>
          <div  className={`flex flex-row space-x-2 items-center justify-center cursor-pointer ${tab === 2 ? 'opacity-100': 'opacity-40 hover:opacity-60'}`}>
            <img className='w-8 h-8' src={sadImage} />
            <p className= 'text-2xl'>Without Anubis</p>
          </div>
        </div>
        <p className='text-xl text-gray'>Drag the Slider to see the difference!</p>
      </div>

      <div className='pb-xl pr-xl pl-xl pt-lg mt-5 rounded-md text-center' style={{height: '600px', border: '1px solid #89929b'}}>

        <ReactCompareSlider
          className='h-full mt-5'
          onPositionChange={(position) => {
            setTab(position >= 50 ? 1 : 2);
          }}
          itemOne={
            <div className='h-full bg-black'>
              <img src={withanubisImage} />
            </div>
          }
          itemTwo={<img src={withoutanubisImage} />} />
      </div>
    </div>
  )
}

export default WithWithout;