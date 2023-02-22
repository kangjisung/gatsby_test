import React from 'react';

import PartnerImg1 from "../../assets/images/home-8-9-10/partner/partner-1.png";
import PartnerImg2 from "../../assets/images/home-8-9-10/partner/partner-2.png";
import PartnerImg3 from "../../assets/images/home-8-9-10/partner/partner-3.png";
import PartnerImg4 from "../../assets/images/home-8-9-10/partner/partner-4.png";
import PartnerImg5 from "../../assets/images/home-8-9-10/partner/partner-5.png";
import PartnerImg6 from "../../assets/images/home-8-9-10/partner/partner-6.png";

const Partners = () => {
    return (
        <>
            <div className="dibiz-partner-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                            <div className="dibiz-partner-item">
                                <a href="#" target="_blank">
                                    <img src={PartnerImg1} alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                            <div className="dibiz-partner-item">
                                <a href="#" target="_blank">
                                    <img src={PartnerImg2} alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                            <div className="dibiz-partner-item">
                                <a href="#" target="_blank">
                                    <img src={PartnerImg3} alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                            <div className="dibiz-partner-item">
                                <a href="#" target="_blank">
                                    <img src={PartnerImg4} alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                            <div className="dibiz-partner-item">
                                <a href="#" target="_blank">
                                    <img src={PartnerImg5} alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                            <div className="dibiz-partner-item">
                                <a href="#" target="_blank">
                                    <img src={PartnerImg6} alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners;