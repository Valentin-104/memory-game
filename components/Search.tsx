export default function Search() {
  return (
    <div>
      <form className='flex items-center'>
        <input
          type='text'
          placeholder='Search'
          className='w-3/5 px-3 py-2 rounded-l-full border border-gray-300 outline-none'
        />
        <button
          type='submit'
          className='h-[41.6px] px-3 rounded-r-full bg-gray-200'
        >
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
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
