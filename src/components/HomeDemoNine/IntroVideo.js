import React from 'react';

import VideoThumbImg from '../../assets/images/home-8-9-10/video/video-2.jpg';

import Loadable from '@loadable/component'
const ModalVideo = Loadable(() => import('react-modal-video'))

const IntroVideo = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="dibiz-video-area mb-minus-250px">
                <div className="container">
                    <div className="dibiz-video-content">
                        <img src={VideoThumbImg} alt="image" />       

                        <div
                            onClick={e => {e.preventDefault(); openModal()}}
                            className="video-btn"
                        >
                            <i className="flaticon-play-button"></i>
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

export default IntroVideo;