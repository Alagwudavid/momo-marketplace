import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Search from './SearchBar';
  const SubNavbarMobile = () => {
  return (
      <div className="flex flex-row justify-between"><button
      // onClick={handleCategoryClose}
      className="sm:hidden block text-black"
    >
      <Bars3Icon className="h-7 w-7" />
    </button>
            <Search />
      </div>
    );
  };
  
  export default SubNavbarMobile;