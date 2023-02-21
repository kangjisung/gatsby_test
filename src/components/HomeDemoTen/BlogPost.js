import React from 'react';
import { Link } from "gatsby"

import BlogPotImg1 from "../../assets/images/home-8-9-10/blog/blog-7.jpg";
import BlogPotImg2 from "../../assets/images/home-8-9-10/blog/blog-8.jpg";
import BlogPotImg3 from "../../assets/images/home-8-9-10/blog/blog-9.jpg";

import AuthorImg1 from "../../assets/images/home-8-9-10/blog/image-1.png";
import AuthorImg2 from "../../assets/images/home-8-9-10/blog/image-2.png";
import AuthorImg3 from "../../assets/images/home-8-9-10/blog/image-3.png";

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
                            <div className="dibiz-blog-card without-border-radius">
                                <div className="blog-image">
                                    <Link to="/single-blog-1">
                                        <img src={BlogPotImg1} alt="image" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-info d-flex align-items-center">
                                        <img src={AuthorImg1} alt="image" />
                                        <div className="info">
                                            <h5>Claris Collins</h5>
                                        </div>
                                        <div className="info-date">
                                            <span><i className='bx bxs-calendar'></i> January 20, 2022</span>
                                        </div>
                                    </div>
                                    <h3>
                                        <Link to="/single-blog-1">
                                            Digital Marketing Agency Blogs You Should Read
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-blog-card without-border-radius">
                                <div className="blog-image">
                                    <Link to="/single-blog-1">
                                        <img src={BlogPotImg2} alt="image" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-info d-flex align-items-center">
                                        <img src={AuthorImg2} alt="image" />
                                        <div className="info">
                                            <h5>Adam Moody</h5>
                                        </div>
                                        <div className="info-date">
                                            <span><i className='bx bxs-calendar'></i> January 20, 2022</span>
                                        </div>
                                    </div>
                                    <h3>
                                        <Link to="/single-blog-1">
                                            Digital Marketing Strategies For Lead Generation
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="dibiz-blog-card without-border-radius">
                                <div className="blog-image">
                                    <Link to="/single-blog-1">
                                        <img src={BlogPotImg3} alt="image" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-info d-flex align-items-center">
                                        <img src={AuthorImg3} alt="image" />
                                        <div className="info">
                                            <h5>Melissa Todd</h5>
                                        </div>
                                        <div className="info-date">
                                            <span><i className='bx bxs-calendar'></i> January 20, 2022</span>
                                        </div>
                                    </div>
                                    <h3>
                                        <Link to="/single-blog-1">
                                            Agencies Can Successfully Recover From COVID?
                                        </Link>
                                    </h3>
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