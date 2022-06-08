import { setDate } from '../constants';

export default function ExcuseCard({ today, excuse }) {
  return (
    <>
      <div className='flex justify-center'>
        <small className='text-pink-800'>
          {setDate(today ? 'today' : 'yesterday')}
        </small>
      </div>
      <div className='h-48 justify-center items-center p-4 mb-8 border-2 border-pink-400 rounded-lg bg-white'>
        <div className='text-center'>
          <p className='uppercase font-bold text-pink-500 mb-2'>
            {today ? 'and today...' : 'yesterday i...'}
          </p>
        </div>
        <div className='flex justify-center z-10'>
          <p className='m-auto text-2xl'>{excuse}</p>
        </div>
      </div>
    </>
  );
}
