import React from 'react';

const PriceRange = ({handelChange}) => {
    // const handelChange = (e) => {
    //     console.log(e)
    // }
    return (
        <div className='pb-10'>
            <h1 className='  py-3 text-sm text-gray-900 hover:text-gray-500 font-medium dark:text-white'>Price</h1>
            <input type="range" min={0} max="100000" onChange={(e) => handelChange(e.target.value)} className="range-xs range dark:bg-white " />
            <div className="w-full flex justify-between text-xs px-2">
                <span className='dark:text-white'>100</span>
                <span className='dark:text-white'>500</span>
                <span className='dark:text-white'>1000</span>
                <span className='dark:text-white'>1500</span>
                <span className='dark:text-white'>100000</span>

            </div>
        </div>
    );
};

export default PriceRange;