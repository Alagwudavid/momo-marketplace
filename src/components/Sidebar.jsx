import { categories } from "../components/constants";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
    return ( 
        <section className="relative h-[870px] w-full bg-[#eceeff] px-5">
            <div className="">
                <h1>Categories</h1>
                <ul>
                {categories.map((category) => (
                    <li key={category.id} className="ml-2 text-[14px] flex gap-3"> <ArrowRightIcon className="h-6 w-4" /> { category.name }</li>
                ))}
                </ul>
            </div>
        </section>
     );
}

export default Sidebar;