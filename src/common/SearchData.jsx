import React, { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import useAllData from '../hooks/useAllData'
import Loader from './Loader'
import { Link } from 'react-router-dom'

function SearchData() {
    const { isPending, error, phone: items, refetch } = useAllData()
    const [data, setData] = useState({})
    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message

    const handelAddCard = () => {

    }
    const handleOnSearch = (string, results) => {
    }

    const handleOnHover = (result) => {
    }

    const handleOnSelect = (item) => {
        setData(item)
        document.getElementById('my_modal_7').showModal()
    }

    const handleOnFocus = () => {
    }

    const formatResult = (item) => {
        return (
            <div className='cursor-pointer'>
                <div >
                    <a ><div><p>{item?.name}</p></div></a>
                </div>
            </div>
        )
    }


    return (
        <div className="App">
            <header className="App-header">
                <div className='relative lg:w-[450px] md:w-[350px] w-[270px]'>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                        fuseOptions={{ keys: ["name", "price", "memory", "os", "processor"] }}
                        resultStringKeyName="name"
                        placeholder='Search your products'
                    />
                </div>
            </header>
            <dialog id="my_modal_7" className="modal">
                <div className="modal-box w-11/12 max-w-5xl dark:bg-gray-800">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white">✕</button>
                    </form>
                    <div className=''>
                        <div class="bg-gray-100 dark:bg-gray-800 py-8">
                            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div class="flex flex-col md:flex-row -mx-4">
                                    <div class="md:flex-1 px-4">
                                        <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                            <img class="w-full h-full object-cover" src={data?.phonImage} alt="Product Image" />
                                        </div>
                                        <div class="flex -mx-2 mb-4">
                                            <Link onClick={() => document.getElementById('my_modal_7').close()} to='/' class="w-full">
                                                <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Go to Homepage</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="md:flex-1 px-4">
                                        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data?.name}</h2>
                                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                            You can use this {data?.type}. It is a beautiful phone. It is very good for every user. You can buy and use the phone if you want.
                                        </p>
                                        <div class="flex mb-4">
                                            <div class="mr-4">
                                                <span class="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                                <span class="text-gray-600 dark:text-gray-300 font-bold">${data?.price}</span>
                                            </div>
                                            <div>
                                                <span class="font-bold text-gray-700 dark:text-gray-300">Discount: </span>
                                                <span class="text-gray-600 dark:text-gray-300 text-sm font-bold">{data?.discount}% OFF</span>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <span class="font-bold text-gray-700 dark:text-gray-300">processor:</span>
                                            <div class="flex items-center mt-2">
                                                <button class="rounded-full bg-gray-800 dark:bg-gray-200 text-white px-4 py-2 text-sm">{data?.processor}</button>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <span class="font-bold text-gray-700 dark:text-gray-300">Operating system:</span>
                                            <div class="flex items-center mt-2">
                                                <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{data?.os}</button>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <span class="font-bold text-gray-700 dark:text-gray-300">Memory:</span>
                                            <div class="flex items-center mt-2">
                                                <button class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{data?.memory}</button>
                                            </div>
                                        </div>
                                        <div>
                                            <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                            <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                                {data?.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </dialog>
        </div>
    )
}

export default SearchData
