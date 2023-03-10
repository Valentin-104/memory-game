import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='p-3'>
      <div className='flex items-center space-x-4'>
        <button className='hover:bg-gray-200 active:bg-gray-300 rounded-full p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6 text-gray-500'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
        <Link href='/'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
            alt='Youtube Logo'
            width={100}
            height={10}
          />
        </Link>
      </div>
    </div>
  );
}
