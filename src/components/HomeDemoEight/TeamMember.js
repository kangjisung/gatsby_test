import React from 'react';
import { Link } from "gatsby"

import TeamImg1 from "../../assets/images/home-8-9-10/team/team-1.png";
import TeamImg2 from "../../assets/images/home-8-9-10/team/team-2.png";
import TeamImg3 from "../../assets/images/home-8-9-10/team/team-3.png";
import TeamImg4 from "../../assets/images/home-8-9-10/team/team-4.png";

const TeamMember = () => {
    return (
        <>
            <div className="dibiz-team-area ptb-100">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">OUR TEAM</span>
                        <h2>금융의 힘, 금융의 가치, 금융의 미래에 대해 생각하는 사람들이 모였습니다.</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="dibiz-team-card">
                                <div className="team-image">
                                    <img src={TeamImg3} alt="image" />
                                </div>
                                <div className="team-content">
                                    <h3>김영민(Ian)</h3>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="dibiz-team-card">
                                <div className="team-image">
                                    <img src={TeamImg2} alt="image" />
                                </div>
                                <div className="team-content">
                                    <h3>이정현(Blair)</h3>
                                    <span>COO</span>
                                </div>
                            </div>
                        </div>

                        

                        <div className="col-lg-3 col-sm-6">
                            <div className="dibiz-team-card">
                                <div className="team-image">
                                    <img src={TeamImg4} alt="image" />
                                </div>
                                <div className="team-content">
                                    <h3>강지성(Colin)</h3>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default TeamMember;