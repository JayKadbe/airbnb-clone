import React from 'react'
import './Home.css';
import Banner from './Banner'
import Card from './Card';

function Home() {
    return (
        <div className='home'>
           
            <Banner/>
            <div className='home__section'>
                <Card
                    src='https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720'
                    title="Online Experiance"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
                    title= 'Unique Stays'
                    description='Unique Activities we can do together led by a world of hosts.'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
                    title='Entire Homes'
                    description='Comfortable private places with room for friends and family.'
                />
            </div>
            <div className='home__section'>
                <Card
                    src='https://cdn.thespaces.com/wp-content/uploads/2020/11/MITCHELLSSTR%C3%86DE-30-2820-GENTOFTE-COTTAGE-FOR-SALE-VIA-ADAM-SCHNACK-HOME-495x321.jpg'
                    title='3 Bedroom flat in Bournemouth'
                    description='Superhost with a stunning view of beachside in sunny Bournemouth.'
                    price="40$/night"
                />
                <Card
                    src='https://cdn.thespaces.com/wp-content/uploads/2020/11/Chojaya-a-250-year-old-thatched-roof-farmhouse-in-Hiroshima-credit-Setouchi-Cominca-Stays___-1-hero-crop-495x321.jpg'
                    title='Penthouse in London'
                    description='Enjoy the amazing sights of london with this stunning penthouse'
                    price="35$/night"
                />
                <Card
                    src='https://cdn.thespaces.com/wp-content/uploads/2020/11/caffettiera-montreal-menard-dworkin-085-495x321.jpg'
                    title='1 Bedroom apartment'
                    description='Superhost with great amenities and a fabulous shoping complex nearby'
                    price='60$/night'
                />
            </div>
        </div>
    )
}

export default Home
