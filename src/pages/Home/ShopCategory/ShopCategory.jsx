import React from 'react';
import useAllData from '../../../hooks/useAllData';
import NoDataHere from '../../../common/NoDataHere';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';

const ShopCategory = () => {
    const {  phone } = useAllData();
    const navigate = useNavigate()
    const handelMore = (id) => {
        navigate(`/moredetails/${id}`)
    }
    return (
        <div>
            <h1 className='text-[#191C1F] text-center text-3xl font-semibold dark:text-white shop'>Shop with Categorys</h1>
            <div className='px-10 pt-10'>
                {
                    phone?.length > 0 ? <Marquee>
                        {
                            phone?.map((item, i) => {
                                return <div onClick={() => handelMore(item._id)} key={i} className='w-[205px] h-[236px] mr-3 px-3 py-6 bg-[#E4E7E9] dark:bg-gray-700 rounded-sm cursor-pointer'>
                                    <div className='flex items-center justify-center'> <img className='w-[148px] h-[148px]' src={item?.phonImage} alt="dsf" /></div>
                                    <h1 className='text-[#191C1F] font-medium textarea-md text-center dark:text-white'>{item?.type}</h1>
                                </div>
                            })
                        }
                    </Marquee> : <NoDataHere></NoDataHere>
                }
            </div>
        </div>
    );
};

export default ShopCategory;