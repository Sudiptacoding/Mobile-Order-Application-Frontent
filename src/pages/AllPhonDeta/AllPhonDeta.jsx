import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import useAllData from '../../hooks/useAllData';
import NoDataHere from '../../common/NoDataHere';
import { Link } from 'react-router-dom';

const AllPhonDeta = () => {
    const { phone } = useAllData();
    const [search, setSearch] = useState('');
    return (
        <div>
            <Header></Header>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto">
                <div class="max-w-2xl mx-auto text-center ">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white shop">All Product</h2>
                </div>
                <div class="relative overflow-hidden">
                    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:pt-0 sm:pb-20">
                        <div class="text-center">
                            <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                                <form>
                                    <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                                        <div class="flex-[1_0_0%]">
                                            <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium dark:text-white"><span class="sr-only">Search article</span></label>
                                            <input onChange={(e) => setSearch(e.target.value)} type="text" name="hs-search-article-1" id="hs-search-article-1" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search your product " />
                                        </div>
                                        <div class="flex-[0_0_auto]">
                                            <a class="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </form>

                                <div class="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                                    <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                    </svg>
                                </div>

                                <div class="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                                    <svg class="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        phone?.length > 0 ? <>
                            {
                                phone?.filter((user) => {
                                    return search.toLowerCase() === '' ? user : (user.name.toLowerCase().includes(search))
                                }).map((item, i) => {
                                    return <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                            <img class="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={item?.phonImage} alt="Image Description" />
                                            <span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                                                {item?.discount}% OFF
                                            </span>
                                        </div>

                                        <div class="mt-7">
                                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                                                {item?.type}
                                            </h3>
                                            <p class="mt-3 text-gray-800 dark:text-gray-200">
                                                {item?.name}
                                            </p>
                                            <Link to={`/moredetails/${item._id}`} class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                                Read more
                                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                            </Link>
                                        </div>
                                    </a>
                                })
                            }
                        </> : <NoDataHere></NoDataHere>
                    }
                </div>

            </div>

        </div>
    );
};

export default AllPhonDeta;