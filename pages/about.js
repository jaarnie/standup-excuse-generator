import Link from 'next/link';

import Button from '../components/buttons/Button';
import { TODAY_EXCUSES } from '../constants';

export default function About() {
  return (
    <>
      <div className='flex justify-center items-center h-screen text-3xl'>
        <div className='p-4 mb-8 border rounded-lg bg-white'>
          <p>
            {' '}
            Tired of thinking what to say during standup? Fret no more and let a
            robotic generator do it for you! Comes preloaded with{' '}
            <span className='opacity-80 before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-red-500 relative inline-block'>
              <span className='relative text-white'>
                {' '}
                {TODAY_EXCUSES.length} high-quality excuses
              </span>
            </span>{' '}
            for you to breeze through your morning standup in a
            <span className='opacity-60 before:block before:absolute before:-inset-1 before:-skew-x-2 before:bg-red-500 before:ml-1 relative inline-block'>
              <span className='relative text-white'>
                {' '}
                vague and non-incriminating way.
              </span>
            </span>
            <div className='mt-5'>
              Click the button at the bottom to randomise, or click on each card
              to individually change the excuse.
            </div>
          </p>
          <div className='flex justify-center mt-4'>
            <Link href='/' passHref className='cursor-pointer'>
              <Button title='Back'></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
