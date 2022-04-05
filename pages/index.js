import ReactGA from 'react-ga4';

import { useState } from 'react';
import { HiOutlineLightBulb, HiRefresh } from 'react-icons/hi';

import Button from '../components/buttons/Button';
import ExcuseCard from '../components/ExcuseCard';

import { TODAY_EXCUSES, YESTERDAY_EXCUSES, randomNumber } from '../constants';

export default function Home() {
  ReactGA.initialize(`${process.env.REACT_APP_GA}`);
  ReactGA.send('pageview');

  const [excuse, setExcuse] = useState({
    today: TODAY_EXCUSES[randomNumber()],
    yesterday: YESTERDAY_EXCUSES[randomNumber()],
  });

  const handleCardClick = (day) => {
    setExcuse({
      today: day === 'today' ? TODAY_EXCUSES[randomNumber()] : excuse.today,
      yesterday:
        day === 'yesterday'
          ? YESTERDAY_EXCUSES[randomNumber()]
          : excuse.yesterday,
    });
  };

  const handleClick = () => {
    setExcuse({
      today: TODAY_EXCUSES[randomNumber()],
      yesterday: YESTERDAY_EXCUSES[randomNumber()],
    });
  };

  return (
    <>
      <div className='flex flex-col my-5 items-center'>
        <span>
          <HiOutlineLightBulb className='w-10 h-10 text-white' />
        </span>
        <h1 className='text-center font-bold break-normal text-3xl md:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500'>
          Standup Excuse Generator
        </h1>
      </div>
      <div onClick={() => handleCardClick('yesterday')}>
        <ExcuseCard today={false} excuse={excuse.yesterday} />
      </div>
      <div onClick={() => handleCardClick('today')}>
        <ExcuseCard today excuse={excuse.today} />
      </div>
      <div className='flex justify-center pb-5'>
        <Button onClick={handleClick} title='Randomise'>
          <div className='flex justify-center mb-1'>
            <HiRefresh className='h-6 w-6' />
          </div>
        </Button>
      </div>
    </>
  );
}
