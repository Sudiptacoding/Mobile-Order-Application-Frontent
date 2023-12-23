import React from 'react';
import useAllData from '../../hooks/useAllData';
import Banner from './Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Loader from '../../common/Loader';
import CategorySection from './CategorySection/CategorySection';
import ShopCategory from './ShopCategory/ShopCategory';
import TopPopulation from './TopPopulation/TopPopulation';

const Home = () => {
    const { isPending, error, course } = useAllData();
    if (isPending) return <Loader></Loader>
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='dark:bg-gray-900'>
            <Banner></Banner>
            <CategorySection></CategorySection>
            <ShopCategory></ShopCategory>
            <TopPopulation></TopPopulation>

            <div className='pt-10'>
                <Footer></Footer>
            </div>
        </div >
    );
}


export default Home;