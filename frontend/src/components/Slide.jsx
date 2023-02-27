import React from 'react'
import Carousel from 'nuka-carousel'

const Slide = () => {
    return (
        <div className='slide'>
            <Carousel animation='fade' autoplayInterval={2000} autoplay={true} speed={7000} wrapAround={true}>
                <img src="./assets/uploads/slide.jpg" alt="" />
                <img src="./assets/uploads/slide1.jpg" alt="" />
                <img src="./assets/uploads/slide2.jpg" alt="" />
            </Carousel>
        </div>
    )
}

export default Slide