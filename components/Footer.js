import Link from 'next/link';

import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { GoMarkGithub } from 'react-icons/go';

export default function Footer() {
  return (
    <div className='flex justify-between'>
      <div className=''>
        <Link href='/about' passHref>
          <HiOutlineQuestionMarkCircle className='w-10 h-10 text-pink-500 cursor-pointer' />
        </Link>
      </div>
      <div>
        <a
          target='_blank'
          href='https://codehelpr.com/'
          rel='noopener noreferrer'
        >
          <p className='text-pink-500'>AI Generated &quot;Codehelpr&quot;</p>
        </a>
      </div>
      <div>
        <a
          target='_blank'
          href='https://github.com/jaarnie/standup-excuse-generator'
          rel='noopener noreferrer'
        >
          <GoMarkGithub className='w-10 h-10 text-pink-500 cursor-pointer' />
        </a>
      </div>
    </div>
  );
}
