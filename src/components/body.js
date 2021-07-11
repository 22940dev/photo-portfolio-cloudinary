import React, {Component, useCallback} from "react";
import {Image, CloudinaryContext} from "cloudinary-react";

import lightGallery from "lightgallery";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';



export default class Body extends Component {
    
    render() {
        const onInit = () => {
            console.log('lightGallery has been initialized');
        }

        const items = [
            {
                id: "1",
                src: "",
                thumb: "https://res.cloudinary.com/philipscloud/image/upload/v1625945739/Analog/Thumbnails/R1-03298-004A_01_thumb_xwr5af.jpg"
            },
            {
                id: "2",
                src: "",
                thumb: "https://res.cloudinary.com/philipscloud/image/upload/v1625945739/Analog/Thumbnails/R1-03298-015A_01_01_thumb_dbkvom.jpg"
            },
            {
                id: "3",
                src: "",
                thumb: "https://res.cloudinary.com/philipscloud/image/upload/v1625945738/Analog/Thumbnails/R1-03298-016A_01_thumb_f4idg1.jpg"
            },
            {
                id: "4",
                src: "",
                thumb: "https://res.cloudinary.com/philipscloud/image/upload/v1625945738/Analog/Thumbnails/R1-03298-020A_01_thumb_zdenzb.jpg" 
            },
            {
                id: "5",
                src: "",
                thumb: "https://res.cloudinary.com/philipscloud/image/upload/v1625945738/Analog/Thumbnails/R1-03298-012A_01_thumb_bz1vbc.jpg" 
            },
            {
                id: "6",
                src: "",
                thumb: "https://res.cloudinary.com/philipscloud/image/upload/v1625945738/Analog/Thumbnails/R1-03298-003A_01_thumb_wedvfg.jpg"
            }
        ];

        function getItems() {
            return items.map((item) => {
                return (
                    <a
                        key={item.id}
                        data-lg-size={item.size}
                        className="gallery-item"
                        data-src={item.src}
                    >
                        <img className="img-responsive" src={item.thumb} />
                    </a>
                );
            });
        }
        return (
            <React.Fragment>
                <CloudinaryContext cloudName="philipscloud">
                <div className="container">
                    <div className="row mt-3"> {/*Start row 1 */}
                        <div className="col mt-3">
                        <Image 
                            publicId="https://res.cloudinary.com/philipscloud/image/upload/v1625945739/Analog/Thumbnails/R1-03298-004A_01_thumb_xwr5af.jpg"
                            width="350" //350 is max for three images for each row in Bootstrap(with 15px paddding)
                            loading="lazy"
                        />
                        </div> 
                        <div className="col mt-3">
                            <Image 
                                publicId="https://res.cloudinary.com/philipscloud/image/upload/v1625945739/Analog/Thumbnails/R1-03298-015A_01_01_thumb_dbkvom.jpg" 
                                width="350"
                                loading="lazy"
                                /> 
                        </div>
                        <div className="col mt-3">
                            <Image 
                                publicId="https://res.cloudinary.com/philipscloud/image/upload/v1625945738/Analog/Thumbnails/R1-03298-016A_01_thumb_f4idg1.jpg" 
                                width="350"
                                loading="lazy"
                            /> 
                        </div>
                    </div> {/*End row 1*/}
                    <div className="row mt-3"> {/*Start row 2*/}
                        <div className="col mt-3">
                            <Image 
                                publicId="https://res.cloudinary.com/philipscloud/image/upload/v1625945738/Analog/Thumbnails/R1-03298-020A_01_thumb_zdenzb.jpg" 
                                width="350"
                                loading="lazy"
                            />
                        </div>
                        <div className="col mt-3">
                            <Image 
                                publicId="https://res.cloudinary.com/philipscloud/image/upload/v1625945738/Analog/Thumbnails/R1-03298-012A_01_thumb_bz1vbc.jpg" 
                                width="350"
                                loading="lazy"
                            />
                        </div>
                        <div className="col mt-3">
                            <Image 
                                publicId="https://res.cloudinary.com/philipscloud/image/upload/v1625945738/Analog/Thumbnails/R1-03298-003A_01_thumb_wedvfg.jpg" 
                                width="350"
                                loading="lazy"
                            />
                        </div>
                    </div> {/*End row 2*/}

                    {/* <lightGallery elementClassNames="custom-class-name" onInit={onInit}>
                        {getItems()}
                    </lightGallery> */}
                </div>

                </CloudinaryContext>
            </React.Fragment>
        )
    }
}