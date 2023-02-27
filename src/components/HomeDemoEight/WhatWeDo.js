import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

import WhatWeDoImg from "../../assets/images/home-8-9-10/what-we-do/what-we-do.png";

const WhatWeDo = () => {
    return (
        <div className="dibiz-what-we-do-area pb-100">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-12">
                        <div className="dibiz-what-we-do-content">
                            <span className='sub-title'>WHY FINANCE</span>
                            <h3 className="title">금융을 아는 것이 중요한 시대, 하지만 우리는 금융을 제대로 배워본 적이 없습니다.</h3>
                            <p>금융교육은 개인의 자산 축적 뿐만 아니라 국가경제와 사회에도 영향을 미칩니다. 금융을 모르는 금융문맹은 신용불량, 과잉부채, 빈곤심화 등의 문제로 이어지고, 금융지능은 이제 생존을 위한 필수 역량이 되어가고 있습니다.</p>

                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            한국의 빈약한 어린이 금융교육
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>글로벌 금융위기 이후 세계 각국은 금융교육에 앞장서고 있으며, 미국, 영국, 캐나다 등 다른 선진국들은 금융을 공교육으로 다루도록 의무화하고 있습니다. 하지만 우리나라 금융교육은 여전히 입시 위주 공부에 밀려나 있고, 한국인의 금융이해력은 OECD가 정한 최소수준에도 미치지 못합니다.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            금융위기와 금융사기에 취약한 청년들
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>금융문맹으로 자라난 아이는 성인이 돼서도 제대로 된 금융교육을 받지 못합니다. 대학생, 취업준비생, 사회초년생과 같은 20~30대 청년층은 각종 금융사기에 쉽게 노출되고, 사회에 진출하기도 전에 큰 빚을 떠안고 취약계층으로 전락하거나 최악의 경우 금융 범죄에 연루되기도 합니다.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                            금융 양극화, 그리고 부의 양극화
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>금융교육은 소득 양극화 및 부의 격차와도 얽혀 있습니다. 금융문맹이 많은 계층은 저소득층이나 노년층처럼 사회적 취약계층과도 일치하기 때문입니다. 부모의 소득이 높을수록 금융이해력이 높고, 금융이해도가 높을수록 가계 자산이 많다는 연구결과도 있습니다. 금융교육의 격차가 결국 삶의 격차로 이어지고 있습니다.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="dibiz-what-we-do-image">
                            <img src={WhatWeDoImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;