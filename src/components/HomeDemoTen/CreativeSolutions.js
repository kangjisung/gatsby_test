import React from 'react';

import SolutionsImg from "../../assets/images/home-8-9-10/solutions/solutions.png"

import Loadable from '@loadable/component'
const ModalVideo = Loadable(() => import('react-modal-video'))

const CreativeSolutions = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="dibiz-solutions-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="dibiz-solutions-image">
                                <img src={SolutionsImg} alt="image" />
         
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn"
                                >
                                    <i className="flaticon-play-button"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="dibiz-solutions-content">
                                <span>DIGITAL MARKETING</span>
                                <h3>Creative Solutions Creative Results</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <div className="solutions-inner-content">
                                    <h4>Core Development</h4>
                                    <p>Quis ipsum suspendisse ultrices gravida sed do eiusmod tempor.</p>
                                </div>
                                <div className="solutions-inner-content color-two">
                                    <h4>Define Your Choices</h4>
                                    <p>Quis ipsum suspendisse ultrices gravida sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default CreativeSolutions;