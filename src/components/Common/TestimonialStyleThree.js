import React from 'react';

import ClientImg1 from '../../assets/images/home-8-9-10/clients/clients-1.png'
import ClientImg2 from '../../assets/images/home-8-9-10/clients/clients-2.png'
import ClientImg3 from '../../assets/images/home-8-9-10/clients/clients-3.png'
import ClientImg4 from '../../assets/images/home-8-9-10/clients/clients-4.png'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 25,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 3,
        }
    }
};

const TestimonialStyleThree = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className="dibiz-clients-area ptb-100">
                <div className="container">
                    <div className="section-title with-gradient-color">
                        <span className="sub-title">Voice of Customer</span>
                        <h2>우리는 지금도 금융이 어렵다</h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="dibiz-clients-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="dibiz-clients-card wow fadeInUp">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg2} alt="image" />
                                    <div className="title">
                                        <h3>권유진</h3>
                                        <span>대출이 어려워</span>
                                    </div>
                                </div>
                            </div>
                            <p>“이번에 취업하고 독립을 하게 되면서 집을 구하러 다니는데, 처음 받는 대출이라 겁이 나기도하고 상품이 너무 다양해서 뭐가 저한테 맞는 건지 잘 모르겠더라구요.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg4} alt="image" />
                                    <div className="title">
                                        <h3>안진우</h3>
                                        <span>청약이 어려워</span>
                                    </div>
                                </div>
                            </div>
                            <p>“내 집 마련의 꿈을 위해 여기저기 청약을 넣고 있는데, 청약 가점이 너무 모자라네요. 진즉에 가입해서 청약을 부었다면 훨씬 좋았을 텐데 말이죠.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg2} alt="image" />
                                    <div className="title">
                                        <h3>김효은</h3>
                                        <span>주식이 어려워</span>
                                    </div>
                                </div>
                            </div>
                            <p>“얼마 전 주식 열풍이 불었을 때 주변에서 다들 해보라 해서 주식에 처음으로 도전했지만 손해만 보고 나왔어요. 저는 주식이랑은 안 맞는 사람인가 봐요. ㅠㅠ”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg1} alt="image" />
                                    <div className="title">
                                        <h3>이상효</h3>
                                        <span>환율이 어려워</span>
                                    </div>
                                </div>
                            </div>
                            <p>“여행을 가려고 환전을 했는데요. 같은 날 친구랑 환전을 했는데 환율이 다르더라구요. 왜 은행마다, 사람마다 적용 환율은 다른 거죠?”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg3} alt="image" />
                                    <div className="title">
                                        <h3>김동환</h3>
                                        <span>금리가 어려워</span>
                                    </div>
                                </div>
                            </div>
                            <p>“미국이 기준 금리를 계속해서 올리고 있는데요. 거기에 대응해서 한국도 금리를 올리고 있다고 알고 있어요. 근데 관련이 있다고만 들었지 어떻게 두 나라 금리가 연관되는지 모르겠어요.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg2} alt="image" />
                                    <div className="title">
                                        <h3>이소정</h3>   
                                        <span>재테크가 어려워</span>
                                    </div>
                                </div>
                            </div>
                            <p>“저도 부자가 되고 싶어요. 집도 사고 싶어요. 차도 사고 싶어요. 누가 저 부자 되는 방법 좀 알려 주실래요? ”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg1} alt="image" />
                                    <div className="title">
                                        <h3>이창민</h3>
                                        <span>금융상품이 어려워</span>
                                    </div>
                                </div>
                            </div>
                            <p>“은행에서 문자 광고로 상품 소개를 종종 해주고는 하는데요. 비과세 혜택을 받아보라고 하는데 그런 용어들이나 개념들이 너무 낯설어요. 진짜 좋은 게 맞나요?”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg2} alt="image" />
                                    <div className="title">
                                        <h3>박유진</h3>
                                        <span>과대광고가 싫어요</span>
                                    </div>
                                </div>
                            </div>
                            <p>“요즘 우리 애들이 유튜브를 끼고 사는데요, 큰 수익을 얻을 수 있다고 현혹하는 광고나 채널들이 눈에 띄더라구요. 애들이 그런 유혹에 빠질까 봐 걱정이에요.”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>

                        <div className="dibiz-clients-card">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <img src={ClientImg3} alt="image" />
                                    <div className="title">
                                        <h3>강동우</h3>
                                        <span>과소비가 싫어요</span>
                                    </div>
                                </div>
                            </div>
                            <p>“인생을 즐기며 살자는 신념으로 YOLO의 삶을 고수하고 있습니다. 그런데 나이가 들수록 소비와 재테크의 균형에 대해서 고민하게 되네요. YOLO로 살다가 골로 간다는데 어떡하죠?”</p>
                            <div className="icon">
                                <i className="flaticon-quote"></i>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default TestimonialStyleThree;