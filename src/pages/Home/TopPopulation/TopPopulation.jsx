import React from 'react';
import { Link } from 'react-router-dom';

const TopPopulation = () => {
    return (
        <div>

            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Top Most Category</h2>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">Show more details</p>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <img class="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-s22-ultra/galaxy-s22-ultra-black-500x500.webp" alt="Image Description" />
                            <span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                                Sponsored
                            </span>
                        </div>

                        <div class="mt-7">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                                amsung Galaxy S22 Ultra Smartphone (12/256GB)
                            </h3>
                            <p class="mt-3 text-gray-800 dark:text-gray-200">
                                Samsung Galaxy S22 Ultra Smartphone (12/256GB) The Samsung Galaxy S22 Ultra features a 6.8-inch Quad HD+ Dynamic AMOLED 2X screen. It has a front-facing camera with a punch-hole design.
                            </p>
                            <Link to={`/moredetails/65874aa3da8ebc4d5e38c0ab`} class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                Read more
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </Link>
                        </div>
                    </a>

                    <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <img class="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-z-fold4/galaxy-z-fold4-graygreen-01-500x500.png" alt="Image Description" />
                        </div>

                        <div class="mt-7">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                                Samsung Galaxy Z Fold4 Smartphone (12/256GB)
                            </h3>
                            <p class="mt-3 text-gray-800 dark:text-gray-200">
                                Samsung Galaxy Z Fold4 Smartphone (12/256GB) The Samsung Galaxy Z Fold4 has a 7.6-inch (unfolded) Full HD+, premium Dynamic AMOLED 2X display.
                            </p>
                            <Link to={`/moredetails/65874c05da8ebc4d5e38c0ac`} class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                Read more
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </Link>
                        </div>
                    </a>

                    <a class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div class="flex-auto p-4 md:p-6">
                            <h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">OnePlus</span> OnePlus 11 5G Smartphone (16/256GB)</h3>
                        </div>
                        <div class="pt-0 p-4 md:p-6">
                            <Link to={`/moredetails/65874cdbda8ebc4d5e38c0ad`}  class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                                Visit the site
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </Link>
                        </div>
                    </a>

                </div>

            </div>

        </div>
    );
};

export default TopPopulation;