import { ChevronDownIcon } from '@heroicons/react/24/outline'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons';

import SubNavbarLarge from './SubNavbarLarge';
import SubNavbarMobile from './SubNavbarMobile';
import Search from './SearchBar';


const Navbar = () => {
  return (
    //  shadow-slate-400 shadow-lg
    <>
    <div className="mx-auto py-4 max-w-screen-2xl px-5 sm:px-6 lg:px-8 bg-white h-[72px]">
        <div className="flex flex-row justify-between mx-auto text-[16px]">
            <div className='flex justify-center items-center cursor-default gap-3'>
                <div className='text-[26px] sm:text-[36px] -mt-3 font-bold text-blue-500'>momo</div>
            </div>
            <div className='hidden sm:block'>
            <Search/>
            </div>
            <div>
                <ul className="flex flex-row gap-2">
                    <a href='#' className='hidden sm:flex flex-row gap-1 p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                    </a>
                    <a href='#' className='flex flex-row gap-1 p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span className='hover:underline'>5</span>
                    </a>
                    <a href='#' className='flex flex-row gap-1 p-2 rounded-lg hover:bg-slate-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>David</span>
                    <ChevronDownIcon className="hidden sm:block h-6 w-6 pt-1"/>
                    </a>
                </ul>
            </div>
        </div>
        </div>
      <div className="sm:hidden block mx-auto py-2 max-w-screen-2xl px-4 bg-white border-[1px]">
          <SubNavbarMobile />
      </div>
      <div className="hidden sm:block mx-auto py-2 max-w-screen-2xl px-4 bg-white border-[1px]">
          <SubNavbarLarge />
      </div>
      </>
  )
}

export default Navbar;