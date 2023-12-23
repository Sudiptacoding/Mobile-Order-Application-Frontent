import React from 'react';
import Header from '../../../components/Header/Header';

const Banner = () => {
    const handelVideo = () => {
        document.getElementById('my_modal_3').showModal()
    }
    return (
        <div>
            <div class="relative pt-48 pb-12  xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
                <header class="absolute inset-x-0 top-0 z-[60] ">
                    <Header></Header>
                </header>

                <div class="absolute inset-0">
                    <img class=" w-full h-full" src="https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

                <div class="relative">
                    <div class="px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
                        <div class="w-full lg:w-2/3 xl:w-1/2">
                            <h1 class="font-sans text-base font-normal tracking-tight text-white text-opacity-70">OrderNexa  Mobile Ordering Application</h1>
                            <p class="mt-6 tracking-tighter text-white">
                                <span class="font-sans font-normal text-7xl">Best Brand for</span><br />
                                <span class="font-serif italic font-normal text-8xl">Mobile Shopping </span>
                            </p>
                            <p class="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">Explore Limitless Possibilities on the Go! Unleash the Power of Mobile Shopping with OrderNexa! Discover Trendsetting Fashion, High-Tech Gadgets, and Must-Have Essentials at Your Fingertips.</p>
                            <p class="mt-8 font-sans text-xl font-normal text-white">Starting at $9.99/month</p>

                            <div class="flex items-center mt-5 space-x-3 sm:space-x-4">
                                <a
                                    onClick={handelVideo}
                                    title=""
                                    class="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                                    role="button"
                                >
                                    <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                                    </svg>
                                    Watch trailer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div class="aspect-video">
                        <iframe  class="w-full h-full" src="https://www.youtube.com/embed/0AiZkv8x8eA?si=yGnUoAzAjVqHjVMK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Banner;