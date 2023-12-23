
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import PriceRange from '../../../components/PriceRange/PriceRange'
import useAllData from '../../../hooks/useAllData'
import useAxios from '../../../hooks/useAxios'
import NoDataHere from '../../../common/NoDataHere'
import { MdOutlineReadMore } from "react-icons/md";
import { Link } from 'react-router-dom'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const subCategories = [
    { name: 'Flagship Smartphones', href: '#' },
    { name: 'Budget/Mid-range Smartphones', href: '#' },
    { name: 'Foldable Phones', href: '#' },
    { name: 'Gaming Phones', href: '#' },
    { name: 'Camera Phones', href: '#' },
    { name: 'Rugged Phones', href: '#' },
    { name: 'Phablets (Large-screen Phones)', href: '#' },
    { name: 'Business/Productivity Phones', href: '#' },
    { name: 'Budget Feature Phones', href: '#' },
    { name: 'Fairphone (Sustainable Phones)', href: '#' },
]

const filters = [
    {
        id: 'Processor',
        name: 'Processor',
        options: [
            { value: 'Snapdragon 888', label: 'Snapdragon 888', checked: false },
            { value: 'Snapdragon 870', label: 'Snapdragon 870', checked: false },
            { value: 'Snapdragon 765', label: 'Snapdragon 765', checked: false },
            { value: 'Snapdragon 778', label: 'Snapdragon 778', checked: false },
            { value: 'Snapdragon 690', label: 'Snapdragon 690', checked: false },
            { value: 'Snapdragon 678', label: 'Snapdragon 678', checked: false },
            { value: 'Snapdragon 480', label: 'Snapdragon 480', checked: false },
            { value: 'Dimensity 1200', label: 'Dimensity 1200', checked: false },
            { value: 'Dimensity 800', label: 'Dimensity 800', checked: false },
            { value: 'A14 Bionic', label: 'A14 Bionic', checked: false },
        ],
    },
    {
        id: 'Memory',
        name: 'Memory',
        options: [
            { value: '2GB RAM', label: '2GB RAM', checked: false },
            { value: '3GB RAM', label: '3GB RAM', checked: false },
            { value: '4GB RAM', label: '4GB RAM', checked: false },
            { value: '6GB RAM', label: '6GB RAM', checked: false },
            { value: '8GB RAM', label: '8GB RAM', checked: false },
            { value: '12GB RAM', label: '12GB RAM', checked: false },
            { value: '16GB RAM', label: '16GB RAM', checked: false },
        ],
    },
    {
        id: 'OS',
        name: 'OS',
        options: [
            { value: 'Android', label: 'Android', checked: false },
            { value: 'iOS', label: 'iOS', checked: false },
            { value: 'Samsung One UI', label: 'Samsung One UI', checked: false },
            { value: 'MIUI (Xiaomi)', label: 'MIUI (Xiaomi)', checked: false },
            { value: 'OxygenOS (OnePlus)', label: 'OxygenOS (OnePlus)', checked: false },
            { value: 'EMUI (Huawei)', label: 'EMUI (Huawei)', checked: false },
            { value: 'ColorOS (OPPO)', label: 'ColorOS (OPPO)', checked: false },
            { value: 'Realme UI', label: 'Realme UI', checked: false },
            { value: 'Stock Android', label: 'Stock Android', checked: false },
            { value: 'Google Fuchsia (experimental)', label: 'Google Fuchsia (experimental)', checked: false },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CategorySection() {
    const { isPending, error, phone, refetch } = useAllData()

    const axiosData = useAxios();

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const [phoneData, setPhoneData] = useState(phone)

    const handelChange = (e) => {
        axiosData.get(`/api/phonPrice?price=${e}`)
            .then(res => {
                setPhoneData(res.data)
            })
    }

    const handelPhonName = (name) => {
        axiosData.get(`/api/filterPhon?type=${name}&processor=${name}&memory=${name}&os=${name}`)
            .then(res => {
                setPhoneData(res.data)
            })

    }
    const handelAllPhon = () => {
        setPhoneData(phone)
    }



    return (
        <div className="">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200 dark:bg-gray-900 dark:text-white">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900 cursor-pointer dark:bg-gray-900 dark:text-white">
                                            {subCategories.map((category) => (
                                                <li onClick={() => handelPhonName(category.name)} key={category.name}>
                                                    <a className="block px-2 py-3">
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                            <li onClick={() => handelAllPhon()}>
                                                <a className="block px-2 py-3">
                                                    All Phone list
                                                </a>
                                            </li>
                                        </ul>

                                        {filters.map((section) => (
                                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value} className="flex items-center">
                                                                        <input
                                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="radio"
                                                                            defaultChecked={option.checked}
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                        <div className='px-4'><PriceRange handelChange={handelChange}></PriceRange></div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">New Arrivals</h1>

                        <div className="flex items-center">

                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className=" pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
                                    {subCategories.map((category) => (
                                        <li onClick={() => handelPhonName(category.name)} key={category.name}>
                                            <a className="block px-2 ">
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                    <li onClick={() => handelAllPhon()}>
                                        <a className="block px-2 ">
                                            All Phone list
                                        </a>
                                    </li>
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) : (
                                                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    defaultValue={option.value}
                                                                    type="radio"
                                                                    onChange={(e) => handelPhonName(e.target.value)}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-gray-600 dark:text-white"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                                <div className=''>
                                    <PriceRange handelChange={handelChange}></PriceRange>
                                </div>
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {
                                    phoneData?.length > 0 ? <div className='flex flex-wrap gap-4 w-full items-center justify-center'>
                                        {
                                            phoneData?.map((item, i) => {
                                                return <div key={i} className='md:w-[202px] w-full  p-4 border border-[#E4E7E9] rounded-sm relative '>
                                                    <span className='absolute top-2 z-20 bg-[#EFD33D] rounded-sm left-2 px-3 text-[#191C1F] text-[12px] py-1 font-semibold'>{item?.discount}% OFF</span>
                                                    <div className="relative overflow-hidden">
                                                        <div className="group relative">
                                                            <img src={item?.phonImage} alt="Image" className="lg:w-[202px] lg:h-[172px] w-full transform transition-transform duration-300 group-hover:scale-110" />
                                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                                                <Link to={`/moredetails/${item?._id}`} className=''>
                                                                    <span class="mt-2 inline-flex items-center gap-x-1 text-sm text-white  decoration-2 cursor-pointer font-medium">
                                                                        Learn more
                                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                                    </span>

                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='py-2'>
                                                        <h1 className='text-[#191C1F] text-sm font-semibold dark:text-white'>{item?.type}</h1>
                                                    </div>
                                                    <div>
                                                        <h3 className='text-gray-900 text-sm font-bold'>${item?.price} USD</h3>
                                                    </div>

                                                </div>
                                            })
                                        }
                                    </div> : <NoDataHere></NoDataHere>
                                }


                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
