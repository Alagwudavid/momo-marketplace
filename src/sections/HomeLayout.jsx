import React from "react";
import { categories, FeaturedProducts, Offers } from "../components/constants";
import { ArrowDownIcon, ChevronDownIcon, SparklesIcon } from "@heroicons/react/24/outline";
import SidebarCategory from "../components/SidebarCategory";
import banner1 from "../assets/Magic-banner1.jpg"
import banner2 from "../assets/Magic-deals.jpg"

const HomeLayout = () => {
    return (
        <div className="mx-auto max-w-screen-2xl flex flex-row overflow-x-hidden overflow-y-hidden ">
            <div className="hidden sm:block min-w-[230px] bg-white">
                <SidebarCategory/>
            </div>
            <div className="py-5 w-full px-4 bg-white overflow-x-auto overflow-y-auto h-full">
            <div className="max-w-screen-2xl grid max-md:grid-cols-1 grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="w-full h-full">
                        <ul className="flex flex-col gap-3 justify-between">
                            <li className="rounded-[32px]"
                            >
                                <img src={banner1} style={{
                                // aspectRatio: `3/1`,
                                borderRadius: `32px`
                              }} />
                            </li>
                            <li className="rounded-[32px]"
                            >
                                <img src={banner2} style={{
                                // aspectRatio: `3/1`,
                                borderRadius: `32px`
                              }} />
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {Offers.map((offer) => (
                        <a href="#" key={offer.id} className="flex flex-col items-center justify-center flex-wrap">
                        <div className="flex-shrink-0 flex justify-center">
                        <img src={offer.bg} style={{
                                aspectRatio: `2/2`,
                                borderRadius: `16px`
                              }} />
                        </div>
                        <span className="text-center">{offer.name}</span>
                        </a>
                    ))}
                    </div>
                </div>
                <div className="max-w-screen-2xl">
                    <div className="w-full my-3 py-1 rounded bg-blue-200 text-center">Trending Products</div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-4 justify-center">
                    {FeaturedProducts.map((product) => (
                        <div key={product.id} className="p-2 flex-shrink-0 hover:border-[2px] hover:border-[#635ef7] rounded-2xl cursor-grab">
                            <div className="bg-[#635ef7] w-full rounded border-[1px] p-1">
                                <img src={product.bg} style={{
                                aspectRatio: `2/2`,
                                // borderRadius: `4px`
                              }} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div>{product.storeName}</div>
                                <span className="font-bold">{product.name}</span>
                                <div className="flex justify-between">
                                <span>{product.price}</span>
                                <div className="bg-[#e14d4d] text-white rounded px-1 py-1 text-[14px] flex-row flex-wrap items-center"
                                style={{ display: product.offer ? 'flex' : 'none' }}
                                ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                              </svg> 
                              <span>                           
                                {product.offer}
                            </span>  
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="w-full my-3 py-1 rounded flex justify-center"><button className="flex bg-blue-500 text-white px-3 py-1 flex-row">Show more <ChevronDownIcon className="w-6 h-6" /> </button></div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeLayout;