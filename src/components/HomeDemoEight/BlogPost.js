import React from 'react';
import { Link } from "gatsby"

import BlogPotImg1 from "../../assets/images/home-8-9-10/blog/blog-1.png";
import BlogPotImg2 from "../../assets/images/home-8-9-10/blog/blog-2.png";
import BlogPotImg3 from "../../assets/images/home-8-9-10/blog/blog-3.png";

import AuthorImg1 from "../../assets/images/home-8-9-10/blog/image-1.png";
import AuthorImg2 from "../../assets/images/home-8-9-10/blog/image-2.png";
import AuthorImg3 from "../../assets/images/home-8-9-10/blog/image-3.png";
import AuthorImg4 from "../../assets/images/home-8-9-10/blog/image-4.png";

const BlogPost = () => {
    return (
        <>
            <div className="dibiz-blog-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">OUR BLOG</span>
                        <h2>Our Latest Media</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-blog-card">
                                <div className="blog-image">
                                    <Link to="/single-blog-1">
                                        <img src={BlogPotImg1} alt="image" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                            피낭시에(FINANCIER)는 프랑스어로 금융(FINANCE)이라는 뜻을 지닌 디저트입니다. 
                                        </Link>
                                    </h3>
                                    <div className="blog-info d-flex align-items-center">
                                        <img src={AuthorImg4} alt="image" />
                                        <div className="info">
                                            <h5>FINANCIER(Colin)</h5>
                                        </div>
                                        <div className="info-date">
                                            <span><i className='bx bxs-calendar'></i> February 3, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-blog-card">
                                <div className="blog-image">
                                    <Link to="/single-blog-1">
                                        <img src={BlogPotImg2} alt="image" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                        금융교육, 어떻게 하고 계신가요?
                                        </Link>
                                    </h3>

                                    <div className="blog-info d-flex align-items-center">
                                        <img src={AuthorImg2} alt="image" />
                                        <div className="info">
                                            <h5>FINANCIER(Blair)</h5>
                                        </div>
                                        <div className="info-date">
                                            <span><i className='bx bxs-calendar'></i> February 3, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-blog-card ">
                                <div className="blog-image">
                                    <Link to="/single-blog-1">
                                        <img src={BlogPotImg3} alt="image" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                        세계 11번째로 ‘슈퍼리치’가 많은 한국입니다.
                                        </Link>
                                    </h3>

                                    <div className="blog-info d-flex align-items-center">
                                        <img src={AuthorImg3} alt="image" />
                                        <div className="info">
                                            <h5>FINANCIER(Ian)</h5>
                                        </div>
                                        <div className="info-date">
                                            <span><i className='bx bxs-calendar'></i> February 3, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPost;