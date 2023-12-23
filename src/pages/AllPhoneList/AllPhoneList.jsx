import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import useAllData from '../../hooks/useAllData';
import NoDataHere from '../../common/NoDataHere';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
import axios from 'axios';

const AllPhoneList = () => {
    const { phone, refetch } = useAllData()
    const [update, setUpdate] = useState({})
    const axiosData = useAxios()
    const [imgUplode, setImageUplode] = useState('')
    const [showImgLode, setShowImageLode] = useState(false)

    const handelEdit = (item) => {
        setUpdate(item)
        document.getElementById('my_modal_4').showModal()
    }

    const uploadImageToImgBB = () => {
        setShowImageLode(false)
        const imgbbApiKey = '48262f7096c971f7f2f1b695ae2a6be0';
        const fileInput = document.getElementById('fileInput');
        const selectedFile = fileInput.files[0];
        const formData = new FormData();
        formData.append('image', selectedFile);
        axios.post('https://api.imgbb.com/1/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            params: {
                key: imgbbApiKey,
            },
        })
            .then(response => {
                const imageUrl = response.data.data.url;
                setImageUplode(imageUrl)
                setShowImageLode(true)
                toast.success('Image upload sucessfylly !')
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handelSubmit = (e) => {
        e.preventDefault()
        const price = e.target.price.value;
        const discount = e.target.discount.value;
        if (price < 0) {
            return toast.success('The price should be more than zero taka ')
        }
        if (discount < 0) {
            return toast.success('The discount should be more than zero taka ')
        }
        const name = e.target.name.value;
        const phonImage = imgUplode || update?.phonImage;
        const type = e.target.type.value || update?.type;
        const processor = e.target.processor.value || update?.processor;
        const memory = e.target.memory.value || update?.memory;
        const os = e.target.os.value || update?.os;
        const description = e.target.description.value;

        const data = { name, price, discount, phonImage, type, processor, memory, os, description }

        axiosData.put(`/api/update/${update?._id}`, data)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You courses successfully upload",
                    icon: "success"
                });
                document.getElementById('my_modal_4').close()
                setImageUplode('')
                e.target.reset()
                refetch()

            })
    }





    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosData.delete(`/api/phone/${id}`)
                    .then(res => {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your product delete successfully",
                            icon: "success"
                        });
                    })
            }
        });
    }


    const phonType = ['Flagship Smartphones', 'Budget/Mid-range Smartphones', 'Foldable Phones', 'Gaming Phones', 'Camera Phones', 'Rugged Phones', 'Phablets (Large-screen Phones)', 'Business/Productivity Phones', 'Budget Feature Phones', 'Fairphone (Sustainable Phones)']

    const processor = ["Snapdragon 888", "Snapdragon 870", "Snapdragon 765", "Snapdragon 778", "Snapdragon 690", "Snapdragon 678", "Snapdragon 480", "Dimensity 1200", "Dimensity 800", "A14 Bionic"]
    const memory = [
        "2GB RAM",
        "3GB RAM",
        "4GB RAM",
        "6GB RAM",
        "8GB RAM",
        "12GB RAM",
        "16GB RAM"
    ]
    const os = [
        "Android",
        "iOS",
        "Samsung One UI",
        "MIUI (Xiaomi)",
        "OxygenOS (OnePlus)",
        "EMUI (Huawei)",
        "ColorOS (OPPO)",
        "Realme UI",
        "Stock Android",
        "Google Fuchsia (experimental)"
    ]





    return (
        <div className='dark:bg-gray-900 min-h-screen'>
            <Header></Header>
            <div>
                {
                    phone?.length > 0 ? <>
                        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-8 mx-auto">

                            <div class="flex flex-col">
                                <div class="-m-1.5 overflow-x-auto">
                                    <div class="p-1.5 min-w-full inline-block align-middle">
                                        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">


                                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead class="bg-gray-50 dark:bg-slate-800">
                                                    <tr className=''>


                                                        <th scope="col" class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                                            <div class="flex items-center gap-x-2">
                                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                    Product
                                                                </span>
                                                            </div>
                                                        </th>

                                                        <th scope="col" class="px-6 py-3 text-center ">
                                                            <div class="flex justify-center items-center gap-x-2">
                                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                    Name
                                                                </span>
                                                            </div>
                                                        </th>

                                                        <th scope="col" class="px-6 py-3 text-start">
                                                            <div class="flex items-center gap-x-2">
                                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                    Processor
                                                                </span>
                                                            </div>
                                                        </th>

                                                        <th scope="col" class="px-6 py-3 text-start">
                                                            <div class="flex items-center gap-x-2">
                                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                    Memory
                                                                </span>
                                                            </div>
                                                        </th>

                                                        <th scope="col" class="px-6 py-3 text-start">
                                                            <div class="flex items-center justify-center gap-x-2">
                                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                    OS
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-start">
                                                            <div class="flex items-center gap-x-2">
                                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                    Price
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-start">
                                                            <div class="flex items-center justify-center gap-x-2">
                                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                    Action
                                                                </span>
                                                            </div>
                                                        </th>

                                                        <th scope="col" class="px-6 py-3 text-end"></th>
                                                    </tr>
                                                </thead>

                                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">

                                                    {
                                                        phone?.map((item, i) => {
                                                            return <tr>
                                                                <td class="h-px w-px whitespace-nowrap">
                                                                    <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                                        <div class="flex items-center gap-x-3">
                                                                            <img class="inline-block h-[2.375rem] w-[2.375rem] rounded-full" src={item?.phonImage} alt="Image Description" />
                                                                            <div class="grow">
                                                                                <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item?.type}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="h-px w-72 whitespace-nowrap">
                                                                    <div class="px-6 py-3 text-center">
                                                                        <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item?.name}</span>
                                                                    </div>
                                                                </td>
                                                                <td class="h-px w-px whitespace-nowrap">
                                                                    <div class="px-6 py-3">
                                                                        <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                                            <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                            </svg>
                                                                            {item?.processor}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td class="h-px w-px whitespace-nowrap">
                                                                    <div class="px-6 py-3">
                                                                        <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                                            <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                            </svg>
                                                                            {item?.memory}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td class="h-px w-px whitespace-nowrap">
                                                                    <div class="px-6 py-3">
                                                                        <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                                            <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                            </svg>
                                                                            {item?.os}
                                                                        </span>
                                                                    </div>
                                                                </td>

                                                                <td class="h-px w-px whitespace-nowrap">
                                                                    <div class="px-6 py-3">
                                                                        <div class="flex items-center gap-x-3">
                                                                            <span class="text-xs text-gray-500">{item?.price} USD</span>
                                                                            <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                                                <div class="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td class="h-px w-px whitespace-nowrap">
                                                                    <div class="px-6 py-1.5">
                                                                        <a onClick={() => handelEdit(item)} class="inline-flex px-5 items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                                                            Edit
                                                                        </a>
                                                                        <a onClick={() => handelDelete(item._id)} class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                                                                            Delete
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>

                                    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto">
                                        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                                            <div className="mb-8">
                                                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                                    Please add your phone
                                                </h2>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Fulfill all documents
                                                </p>
                                            </div>
                                            <form onSubmit={handelSubmit}>
                                                <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                                                    <div className="sm:col-span-3">
                                                        <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                                            Phone Name
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-9">
                                                        <input defaultValue={update?.name} required name='name' type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Product name" />
                                                    </div>


                                                    <div className="sm:col-span-3">
                                                        <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                            Product image
                                                        </label>

                                                    </div>


                                                    <div className="sm:col-span-9">
                                                        {
                                                            imgUplode ? <div ><img className='h-[150px] w-full object-cover bg-center' src={imgUplode} alt="" /></div> :
                                                                <label className="block p-4 text-center border-2 border-gray-200 border-dashed rounded-lg cursor-pointer group sm:p-7 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700">
                                                                    <input onChange={uploadImageToImgBB} id="fileInput" name="af-submit-app-upload-images" type="file" className="sr-only" />

                                                                    {
                                                                        showImgLode ? <svg className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600 animate__swing animate__animated animate__infinite infinite" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                            <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                                                                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                                                        </svg> : <svg className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                            <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                                                                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                                                        </svg>
                                                                    }
                                                                    <span className="block mt-2 text-sm text-gray-800 dark:text-gray-200">
                                                                        Browse your device
                                                                    </span>
                                                                    <span className="block mt-1 text-xs text-gray-500">
                                                                        Please input jpeg/png
                                                                    </span>
                                                                </label>
                                                        }
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                                            Price
                                                        </label>
                                                    </div>

                                                    <div className="sm:col-span-9">
                                                        <input defaultValue={update?.price} required name='price' type="number" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Product price" />
                                                    </div>
                                                    <div className="sm:col-span-3">
                                                        <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                                            Discount
                                                        </label>
                                                    </div>

                                                    <div className="sm:col-span-9">
                                                        <input defaultValue={update?.discount} required name='discount' type="number" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Product price" />
                                                    </div>


                                                    <div className="sm:col-span-3">
                                                        <div className="inline-block">
                                                            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                                                Phone Type
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-9">
                                                        <div className="sm:flex">
                                                            <select name='type' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                                                {
                                                                    phonType?.map((item, i) => {
                                                                        return <option key={i} value={item}>{item}</option>
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <div className="inline-block">
                                                            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                                                Processor
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-9">
                                                        <div className="sm:flex">
                                                            <select name='processor' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                                                {
                                                                    processor?.map((item, i) => {
                                                                        return <option key={i} value={item}>{item}</option>
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <div className="inline-block">
                                                            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                                                Memory
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-9">
                                                        <div className="sm:flex">
                                                            <select name='memory' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                                                {
                                                                    memory?.map((item, i) => {
                                                                        return <option key={i} value={item}>{item}</option>
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <div className="inline-block">
                                                            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                                                Operating systems:
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-9">
                                                        <div className="sm:flex">
                                                            <select name='os' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                                                {
                                                                    os?.map((item, i) => {
                                                                        return <option key={i} value={item}>{item}</option>
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                                            Description
                                                        </label>
                                                    </div>

                                                    <div className="sm:col-span-9">
                                                        <textarea defaultValue={update?.description} required name='description' id="af-account-bio" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" rows="6" placeholder="Enter your description..."></textarea>
                                                    </div>
                                                </div>
                                                <div className="mt-5 flex justify-end gap-x-2">
                                                    <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        Update your product
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </dialog>

                        </div>

                    </> : <NoDataHere></NoDataHere>
                }
            </div>







        </div>
    );
};

export default AllPhoneList;