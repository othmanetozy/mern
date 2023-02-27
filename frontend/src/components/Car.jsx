import React from 'react'
import Lightroom from 'react-lightbox-gallery'

const Car = () => {

    const economy = [
        {
            src: "./assets/uploads/page3_img1.jpg",
            desc: 'BMW',
            sub: 'RicpeTaxi'
        },
        {
            src: "./assets/uploads/page3_img2.jpg",
            desc: 'Merceds',
            sub: 'RicpeTaxi'
        },
        {
            src: "./assets/uploads/page3_img3.jpg",
            desc: 'XXX Auto',
            sub: 'RicpeTaxi'
        }
    ]

    const standard = [
        {
            src: "./assets/uploads/page3_img4.jpg",
            desc: 'XXX Auto',
            sub: 'RicpeTaxi'
        },
        {
            src: "./assets/uploads/page3_img5.jpg",
            desc: 'Merceds',
            sub: 'RicpeTaxi'
        },
        {
            src: "./assets/uploads/page3_img6.jpg",
            desc: 'Land Rover',
            sub: 'RicpeTaxi'
        }
    ]

    const lux = [
        {
            src: "./assets/uploads/page3_img7.jpg",
            desc: 'BMW',
            sub: 'RicpeTaxi'
        },
        {
            src: "./assets/uploads/page3_img8.jpg",
            desc: 'BMW',
            sub: 'RicpeTaxi'
        },
        {
            src: "./assets/uploads/page3_img9.jpg",
            desc: 'XXX Auto',
            sub: 'RicpeTaxi'
        }
    ]

    const settings = {
        columnCount: {
            default: 3,
            mobile: 3,
            tab: 4,

        },
        mode: 'dark'
    }

    return (
        <div className='car'>
            <div className="carGroups">
                <div className="carGroup">
                    <h3 className="carTitle">Economie</h3>
                    <div className="carGallery">
                        <Lightroom images={economy} settings={settings} />
                    </div>
                </div>
                <div className="carGroup">
                    <h3 className="carTitle">SUV</h3>
                    <div className="carGallery">
                        <Lightroom images={standard} settings={settings} />
                    </div>
                </div>
                <div className="carGroup">
                    <h3 className="carTitle">Luxe</h3>
                    <div className="carGallery">
                        <Lightroom images={lux} settings={settings} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Car