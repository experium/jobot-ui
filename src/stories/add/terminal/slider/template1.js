import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import "../../../style.css";
import {
    Box, TerminalSliderWrap,
    TerminalSliderTitle, TerminalSliderRow,
    TerminalCompanyLogoBox, TerminalSliderBg,
    TerminalSliderContentColumn, TerminalSliderQRBtn,
    TerminalSliderBoxFloat,
    TerminalSliderFlex, TerminalSliderFooterBg,
    TerminalCompanyLogo, TerminalSliderList,
    TerminalQRCodeImg, TerminalQRCodeBox,
    TerminalButton, TerminalButtonTextfit
} from '../../../ui';
import logo from "../../../../assets/img/slider/logo.png";
import logoRed from "../../../../assets/img/slider/logo_red.png";
import logoBlue from "../../../../assets/img/slider/logo_blue.png";
import logoGreen from "../../../../assets/img/slider/logo_green.png";
import logoOrange from "../../../../assets/img/slider/logo_orange.png";
import qr from "../../../../assets/img/slider/qr.svg";
import bg1 from "../../../../assets/img/slider/1.png";
import bg2 from "../../../../assets/img/slider/2.png";
import bg3 from "../../../../assets/img/slider/3.png";
import bg4 from "../../../../assets/img/slider/4.png";
import bg5 from "../../../../assets/img/slider/5.png";
import bg6 from "../../../../assets/img/slider/6.png";
import bg7 from "../../../../assets/img/slider/7.png";
import bg8 from "../../../../assets/img/slider/8.png";
import bg9 from "../../../../assets/img/slider/9.png";
import bg10 from "../../../../assets/img/slider/10.png";

const TerminalSliderTemplate1 = () => (
    <Box>
        <Tabs>
            <TabList>
                <Tab>th 1</Tab>
                <Tab>th 2</Tab>
                <Tab>th 3</Tab>
                <Tab>th 4</Tab>
                <Tab>th 5</Tab>
                <Tab>th 6</Tab>
                <Tab>th 7</Tab>
                <Tab>th 8</Tab>
                <Tab>th 9</Tab>
                <Tab>th 10</Tab>
            </TabList>

            {/*Theme1 start*/}

            <TabPanel>
                <Tabs className='tabs-example'>
                    <TabList>
                        <Tab>Example 1</Tab>
                        <Tab>Example 2</Tab>
                        <Tab>Example 3</Tab>
                    </TabList>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderRow>
                                <TerminalCompanyLogoBox>
                                    <TerminalCompanyLogo image={logoRed}></TerminalCompanyLogo>
                                </TerminalCompanyLogoBox>
                            </TerminalSliderRow>
                            <TerminalSliderBg flex={4} image={bg1}>
                                <TerminalSliderContentColumn backgroundColor='rgba(189,16,44,0.8)'>
                                    <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>
                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderRow>
                                <TerminalCompanyLogoBox>
                                    <TerminalCompanyLogo image={logoRed}></TerminalCompanyLogo>
                                </TerminalCompanyLogoBox>
                            </TerminalSliderRow>
                            <TerminalSliderBg flex={4} image={bg1}>
                                <TerminalSliderContentColumn backgroundColor='rgba(189,16,44,0.8)'>
                                    <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalButton themes='white'><TerminalButtonTextfit mode="single" max={40}>Подробнее ❯</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>
                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderRow>
                                <TerminalCompanyLogoBox>
                                    <TerminalCompanyLogo image={logoRed}></TerminalCompanyLogo>
                                </TerminalCompanyLogoBox>
                            </TerminalSliderRow>
                            <TerminalSliderBg flex={4} image={bg1}>
                                <TerminalSliderContentColumn backgroundColor='rgba(189,16,44,0.8)'>
                                    <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList>
                                        <span>Продавца-кассира</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>
                </Tabs>
            </TabPanel>

            {/*Theme1 end Theme2 start*/}
            <TabPanel>
                <Tabs className={'tabs-example'}>
                    <TabList>
                        <Tab>Example 1</Tab>
                        <Tab>Example 2</Tab>
                        <Tab>Example 3</Tab>
                    </TabList>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderFlex>
                                <TerminalSliderContentColumn backgroundColor='#fff'>
                                    <TerminalCompanyLogoBox>
                                        <TerminalCompanyLogo image={logoBlue} backgroundPosition='left'></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderTitle color='#93b011'>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList color='#93b011'>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} backgroundColor='#eef1f7' alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                                <TerminalSliderBg image={bg2} width='50%'></TerminalSliderBg>
                            </TerminalSliderFlex>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderFlex flex='4'>
                                <TerminalSliderContentColumn backgroundColor='#fff'>
                                    <TerminalCompanyLogoBox>
                                        <TerminalCompanyLogo image={logoBlue} backgroundPosition='left'></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderTitle color='#93b011'>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList color='#93b011'>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalButton themes={'blue'}><TerminalButtonTextfit mode="single" max={40}>Подробнее ❯</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                                <TerminalSliderBg image={bg2} width='50%'></TerminalSliderBg>
                            </TerminalSliderFlex>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderFlex flex='4'>
                                <TerminalSliderContentColumn backgroundColor='#fff'>
                                    <TerminalCompanyLogoBox>
                                        <TerminalCompanyLogo image={logoBlue} backgroundPosition='left'></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderTitle color='#93b011'>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList color='#93b011'>
                                        <span>Продавца-кассира</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalButton themes={'blue'}><TerminalButtonTextfit mode="single" max={40}>Подробнее ❯</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                                <TerminalSliderBg image={bg2} width='50%'></TerminalSliderBg>
                            </TerminalSliderFlex>
                        </TerminalSliderWrap>
                    </TabPanel>
                </Tabs>
            </TabPanel>

            {/*Theme2 end Theme3 start*/}
            <TabPanel>
               <Tabs className='tabs-example'>
                   <TabList>
                       <Tab>Example 1</Tab>
                       <Tab>Example 2</Tab>
                       <Tab>Example 3</Tab>
                   </TabList>

                   <TabPanel>
                       <TerminalSliderWrap image={bg3}>
                           <TerminalSliderBg flex={6}>
                               <Box display='flex' width='50%' flexDirection='column'>
                                   <Box flex={5} display='flex' p='4%'></Box>
                                   <TerminalCompanyLogoBox flex={1} backgroundColor='#fff' width='100%'>
                                       <TerminalCompanyLogo image={logo}></TerminalCompanyLogo>
                                   </TerminalCompanyLogoBox>
                               </Box>
                               <TerminalSliderContentColumn p={0}>
                                   <TerminalSliderBoxFloat flex={3} backgroundColor='#2b9c4a'>
                                       <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                       <TerminalSliderList>
                                           <span>Продавца-кассира</span><br/>
                                           <span>Администратора зала</span><br/>
                                           <span>Грузчика</span><br/>
                                           <span>еще 50 вакансий</span><br/>
                                       </TerminalSliderList>
                                   </TerminalSliderBoxFloat>
                                   <Box display='flex' flex={2}></Box>
                                   <TerminalSliderFooterBg>
                                       <TerminalSliderQRBtn height='200%' alignSelf='flex-end'>
                                           <TerminalQRCodeBox>
                                               <TerminalQRCodeImg src={qr} alt="" />
                                           </TerminalQRCodeBox>
                                       </TerminalSliderQRBtn>
                                   </TerminalSliderFooterBg>
                               </TerminalSliderContentColumn>
                           </TerminalSliderBg>
                       </TerminalSliderWrap>
                   </TabPanel>

                   <TabPanel>
                       <TerminalSliderWrap image={bg3}>
                           <TerminalSliderBg flex={6}>
                               <Box display='flex' width='50%' flexDirection='column'>
                                   <Box flex={5} display='flex' p='4%'></Box>
                                   <TerminalCompanyLogoBox flex={1} backgroundColor='#fff' width='100%'>
                                       <TerminalCompanyLogo image={logo}></TerminalCompanyLogo>
                                   </TerminalCompanyLogoBox>
                               </Box>
                               <TerminalSliderContentColumn p={0}>
                                   <TerminalSliderBoxFloat flex={3} backgroundColor='#2b9c4a'>
                                       <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                       <TerminalSliderList>
                                           <span>Продавца-кассира</span><br/>
                                           <span>Администратора зала</span><br/>
                                           <span>Грузчика</span><br/>
                                           <span>еще 50 вакансий</span><br/>
                                       </TerminalSliderList>
                                   </TerminalSliderBoxFloat>
                                   <Box display='flex' flex={2}></Box>
                                   <TerminalSliderFooterBg>
                                       <TerminalSliderQRBtn>
                                           <TerminalButton themes='green'><TerminalButtonTextfit mode="single" max={40}>Подробнее ❯</TerminalButtonTextfit></TerminalButton>
                                       </TerminalSliderQRBtn>
                                   </TerminalSliderFooterBg>
                               </TerminalSliderContentColumn>
                           </TerminalSliderBg>
                       </TerminalSliderWrap>
                   </TabPanel>

                   <TabPanel>
                       <TerminalSliderWrap image={bg3}>
                           <TerminalSliderBg flex={6}>
                               <Box display='flex' width='50%' flexDirection='column'>
                                   <Box flex={5} display='flex' p='4%'></Box>
                                   <TerminalCompanyLogoBox flex={1} backgroundColor='#fff' width='100%'>
                                       <TerminalCompanyLogo image={logo}></TerminalCompanyLogo>
                                   </TerminalCompanyLogoBox>
                               </Box>
                               <TerminalSliderContentColumn p={0}>
                                   <TerminalSliderBoxFloat flex={3} backgroundColor='#2b9c4a'>
                                       <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                       <TerminalSliderList>
                                           <span>Продавца-кассира</span><br/>
                                       </TerminalSliderList>
                                   </TerminalSliderBoxFloat>
                                   <Box display='flex' flex={2}></Box>
                                   <TerminalSliderFooterBg>
                                       <TerminalSliderQRBtn>
                                           <TerminalButton themes='green'><TerminalButtonTextfit mode="single" max={40}>Подробнее ❯</TerminalButtonTextfit></TerminalButton>
                                       </TerminalSliderQRBtn>
                                   </TerminalSliderFooterBg>
                               </TerminalSliderContentColumn>
                           </TerminalSliderBg>
                       </TerminalSliderWrap>
                   </TabPanel>
               </Tabs>
            </TabPanel>

            {/*Theme3 end Theme4 start*/}
            <TabPanel>
                <Tabs className='tabs-example'>
                    <TabList>
                        <Tab>Example 1</Tab>
                        <Tab>Example 2</Tab>
                        <Tab>Example 3</Tab>
                    </TabList>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderFlex>
                                <Box display='flex' width='50%' flexDirection='column'>
                                    <TerminalCompanyLogoBox flex={1} width='100%'>
                                        <TerminalCompanyLogo image={logo}></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderBg flex={5} image={bg4} backgroundSize='contain' backgroundPosition='center'></TerminalSliderBg>
                                </Box>
                                <TerminalSliderContentColumn backgroundColor='#EB0E15'>
                                    <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} backgroundColor='#eef1f7' alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderFlex>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderFlex>
                                <Box display='flex' width='50%' flexDirection='column'>
                                    <TerminalCompanyLogoBox flex={1} width='100%'>
                                        <TerminalCompanyLogo image={logo}></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderBg flex={5} image={bg4} backgroundSize='contain' backgroundPosition='center'></TerminalSliderBg>
                                </Box>
                                <TerminalSliderContentColumn backgroundColor='#EB0E15'>
                                    <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalButton themes='white'><TerminalButtonTextfit mode="single" max={40}>Подробнее ❯</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderFlex>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderFlex>
                                <Box display='flex' width='50%' flexDirection='column'>
                                    <TerminalCompanyLogoBox flex={1} width='100%'>
                                        <TerminalCompanyLogo image={logo}></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderBg flex={5} image={bg4} backgroundSize='contain' backgroundPosition='center'></TerminalSliderBg>
                                </Box>
                                <TerminalSliderContentColumn backgroundColor='#EB0E15'>
                                    <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList>
                                        <span>Продавца-кассира</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} backgroundColor='#eef1f7' alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderFlex>
                        </TerminalSliderWrap>
                    </TabPanel>
                </Tabs>
            </TabPanel>

            {/*Theme4 end Theme5 start*/}
            <TabPanel>
                <Tabs className='tabs-example'>
                    <TabList>
                        <Tab>Example 1</Tab>
                        <Tab>Example 2</Tab>
                        <Tab>Example 3</Tab>
                    </TabList>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg flex={4} image={bg5}>
                                <Box width='50%'></Box>
                                <TerminalSliderContentColumn backgroundColor='rgba(255,255,255,0.6)'>
                                    <TerminalCompanyLogoBox>
                                        <TerminalCompanyLogo image={logoRed}></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderTitle color='#000'>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList noCheck='true' color='#b23249'>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg flex={4} image={bg5}>
                                <Box width='50%'></Box>
                                <TerminalSliderContentColumn backgroundColor='rgba(255,255,255,0.6)'>
                                    <TerminalCompanyLogoBox>
                                        <TerminalCompanyLogo image={logoRed}></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderTitle color='#000'>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList noCheck='true' color='#b23249'>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalButton themes='red'><TerminalButtonTextfit mode="single" max={40}>Подробнее</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg flex={4} image={bg5}>
                                <Box width='50%'></Box>
                                <TerminalSliderContentColumn backgroundColor='rgba(255,255,255,0.6)'>
                                    <TerminalCompanyLogoBox>
                                        <TerminalCompanyLogo image={logoRed}></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderTitle color='#000'>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList noCheck='true' color='#b23249'>
                                        <span>Продавца-кассира</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalButton themes='red'><TerminalButtonTextfit mode="single" max={40}>Подробнее</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>
                </Tabs>
            </TabPanel>

            {/*Theme5 end Theme6 start*/}
            <TabPanel>
                <Tabs className='tabs-example'>
                    <TabList>
                        <Tab>Example 1</Tab>
                        <Tab>Example 2</Tab>
                        <Tab>Example 3</Tab>
                    </TabList>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderRow backgroundColor='#fff'>
                                <TerminalCompanyLogoBox>
                                    <Box display='flex' flex={1} alignItems='center'>
                                        <TerminalCompanyLogo image={logoBlue} width='100%'></TerminalCompanyLogo>
                                    </Box>
                                    <Box display='flex' flex={1}></Box>
                                </TerminalCompanyLogoBox>
                                <TerminalSliderContentColumn p='2% 0'>
                                    <TerminalSliderTitle color='#1a5286' flex={1} fontWeight='bold' textTransform='uppercase'>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList color='#1a5286' flex={3}>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                </TerminalSliderContentColumn>
                            </TerminalSliderRow>
                            <TerminalSliderBg flex={2} image={bg6}>
                                <Box display='flex' width='50%'>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </Box>
                                <Box width='50%'></Box>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderRow backgroundColor='#fff'>
                                <TerminalCompanyLogoBox>
                                    <Box display='flex' flex={1} alignItems='center'>
                                        <TerminalCompanyLogo image={logoBlue} width='100%'></TerminalCompanyLogo>
                                    </Box>
                                    <Box display='flex' flex={1}></Box>
                                </TerminalCompanyLogoBox>
                                <TerminalSliderContentColumn p='2% 0'>
                                    <TerminalSliderTitle color='#1a5286' flex={1} fontWeight='bold' textTransform='uppercase'>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList color='#1a5286' flex={3}>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                </TerminalSliderContentColumn>
                            </TerminalSliderRow>
                            <TerminalSliderBg flex={2} image={bg6}>
                                <Box display='flex' width='50%' p='4%'>
                                    <TerminalSliderQRBtn flex={3} alignSelf='flex-end'>
                                        <TerminalButton themes='blue' width='auto'><TerminalButtonTextfit mode="single" max={40}>Подробнее</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </Box>
                                <Box width='50%'></Box>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderRow backgroundColor='#fff'>
                                <TerminalCompanyLogoBox>
                                    <Box display='flex' flex={1} alignItems='center'>
                                        <TerminalCompanyLogo image={logoBlue} width='100%'></TerminalCompanyLogo>
                                    </Box>
                                    <Box display='flex' flex={1}></Box>
                                </TerminalCompanyLogoBox>
                                <TerminalSliderContentColumn p='2% 0'>
                                    <TerminalSliderTitle color='#1a5286' flex={1} fontWeight='bold' textTransform='uppercase'>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList color='#1a5286' flex={3}>
                                        <span>Продавца-кассира</span><br/>
                                    </TerminalSliderList>
                                </TerminalSliderContentColumn>
                            </TerminalSliderRow>
                            <TerminalSliderBg flex={2} image={bg6}>
                                <Box display='flex' width='50%'>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </Box>
                                <Box width='50%'></Box>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>
                </Tabs>
            </TabPanel>

            {/*Theme6 end Theme7 start*/}
            <TabPanel>
                <Tabs className='tabs-example'>
                    <TabList>
                        <Tab>Example 1</Tab>
                        <Tab>Example 2</Tab>
                        <Tab>Example 3</Tab>
                    </TabList>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg flex={3} image={bg7} flexDirection='column'>
                                <TerminalSliderRow flex={2}>
                                    <TerminalCompanyLogoBox>
                                        <TerminalCompanyLogo image={logoBlue}></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                </TerminalSliderRow>
                                <Box display='flex' flex={3}></Box>
                                <TerminalSliderContentColumn width='100%' flex={1} backgroundColor='#b0b41f' p='2%'>
                                    <TerminalSliderTitle flex={1} fontWeight='bold' textTransform='uppercase' height='100%'mode='single' color='#fff' alignItems='center' p='0' justifyContent='center'>Карьера начинается здесь!</TerminalSliderTitle>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                            <TerminalSliderRow backgroundColor='#fafafa' p='2%' flex={1}>
                                <TerminalSliderContentColumn p={0}>
                                    <TerminalSliderList color='#1a5286' flex={3}>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                </TerminalSliderContentColumn>
                                <TerminalCompanyLogoBox>
                                    <TerminalSliderQRBtn flex={3} width='100%' flexDirection='column'>
                                        <TerminalQRCodeBox height='100%'>
                                            <TerminalQRCodeImg src={qr} backgroundColor='#fafafa' alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalCompanyLogoBox>
                            </TerminalSliderRow>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg flex={3} image={bg7} flexDirection='column'>
                                <TerminalSliderRow flex={2}>
                                    <TerminalCompanyLogoBox>
                                        <TerminalCompanyLogo image={logoBlue}></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                </TerminalSliderRow>
                                <Box display='flex' flex={3}></Box>
                                <TerminalSliderContentColumn width='100%' flex={1} backgroundColor='#b0b41f' p='2%'>
                                    <TerminalSliderTitle flex={1} fontWeight='bold' textTransform='uppercase' height='100%'mode='single' color='#fff' alignItems='center' p='0' justifyContent='center'>Карьера начинается здесь!</TerminalSliderTitle>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                            <TerminalSliderRow backgroundColor='#fafafa' p='2%' flex={1}>
                                <TerminalSliderContentColumn p={0}>
                                    <TerminalSliderList color='#1a5286' flex={3}>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                </TerminalSliderContentColumn>
                                <TerminalCompanyLogoBox>
                                    <TerminalSliderQRBtn flex={3} width='100%' flexDirection='column'>
                                        <TerminalButton themes='blue' width='auto'><TerminalButtonTextfit mode="single" max={40}>Подробнее</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </TerminalCompanyLogoBox>
                            </TerminalSliderRow>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg flex={3} image={bg7} flexDirection='column'>
                                <TerminalSliderRow flex={2}>
                                    <TerminalCompanyLogoBox>
                                        <TerminalCompanyLogo image={logoBlue}></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                </TerminalSliderRow>
                                <Box display='flex' flex={3}></Box>
                                <TerminalSliderContentColumn width='100%' flex={1} backgroundColor='#b0b41f' p='2%'>
                                    <TerminalSliderTitle flex={1} fontWeight='bold' textTransform='uppercase' height='100%'mode='single' color='#fff' alignItems='center' p='0' justifyContent='center'>Карьера начинается здесь!</TerminalSliderTitle>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                            <TerminalSliderRow backgroundColor='#fafafa' p='2%' flex={1}>
                                <TerminalSliderContentColumn p={0}>
                                    <TerminalSliderList color='#1a5286' flex={3}>
                                        <span>Продавца-кассира</span><br/>
                                    </TerminalSliderList>
                                </TerminalSliderContentColumn>
                                <TerminalCompanyLogoBox>
                                    <TerminalSliderQRBtn flex={3} width='100%' flexDirection='column'>
                                        <TerminalQRCodeBox height='100%'>
                                            <TerminalQRCodeImg src={qr} backgroundColor='#fafafa' alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalCompanyLogoBox>
                            </TerminalSliderRow>
                        </TerminalSliderWrap>
                    </TabPanel>
                </Tabs>
            </TabPanel>

            {/*Theme7 end Theme8 start*/}
            <TabPanel>
                <Tabs className='tabs-example'>
                    <TabList>
                        <Tab>Example 1</Tab>
                        <Tab>Example 2</Tab>
                        <Tab>Example 3</Tab>
                    </TabList>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderRow>
                                <Box width='50%'></Box>
                                <TerminalCompanyLogoBox>
                                    <TerminalCompanyLogo image={logoGreen} backgroundPosition='left'></TerminalCompanyLogo>
                                </TerminalCompanyLogoBox>
                            </TerminalSliderRow>
                            <TerminalSliderBg flex={4} backgroundColor='#3C9628'>
                                <Box width='50%' alignItems='flex-end' display='flex'>
                                    <TerminalSliderBg image={bg8} backgroundSize='contain' backgroundPosition='center' height='95vh'></TerminalSliderBg>
                                </Box>
                                <TerminalSliderContentColumn p='2% 2% 2% 0'>
                                    <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderRow>
                                <Box width='50%'></Box>
                                <TerminalCompanyLogoBox>
                                    <TerminalCompanyLogo image={logoGreen} backgroundPosition='left'></TerminalCompanyLogo>
                                </TerminalCompanyLogoBox>
                            </TerminalSliderRow>
                            <TerminalSliderBg flex={4} backgroundColor='#3C9628'>
                                <Box width='50%' alignItems='flex-end' display='flex'>
                                    <TerminalSliderBg image={bg8} backgroundSize='contain' backgroundPosition='center' height='95vh'></TerminalSliderBg>
                                </Box>
                                <TerminalSliderContentColumn p='2% 2% 2% 0'>
                                    <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalButton themes='lightGreen' width='auto'><TerminalButtonTextfit mode="single" max={40}>Подробнее</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderRow>
                                <Box width='50%'></Box>
                                <TerminalCompanyLogoBox>
                                    <TerminalCompanyLogo image={logoGreen} backgroundPosition='left'></TerminalCompanyLogo>
                                </TerminalCompanyLogoBox>
                            </TerminalSliderRow>
                            <TerminalSliderBg flex={4} backgroundColor='#3C9628'>
                                <Box width='50%' alignItems='flex-end' display='flex'>
                                    <TerminalSliderBg image={bg8} backgroundSize='contain' backgroundPosition='center' height='95vh'></TerminalSliderBg>
                                </Box>
                                <TerminalSliderContentColumn p='2% 2% 2% 0'>
                                    <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                    <TerminalSliderList>
                                        <span>Продавца-кассира</span><br/>
                                    </TerminalSliderList>
                                    <TerminalSliderQRBtn flex={3}>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>
                </Tabs>
            </TabPanel>

            {/*Theme8 end Theme9 start*/}
            <TabPanel>
                <Tabs className='tabs-example'>
                    <TabList>
                        <Tab>Example 1</Tab>
                        <Tab>Example 2</Tab>
                        <Tab>Example 3</Tab>
                    </TabList>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg flex={4} image={bg9} backgroundSize='contain' backgroundPosition='right' height='95vh'>
                                <TerminalSliderContentColumn p={0}>
                                    <TerminalCompanyLogoBox p='5%'>
                                        <TerminalCompanyLogo image={logo} backgroundPosition='left'></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderBoxFloat flex={3} backgroundColor='#0083c5' p='5%' borderRadius={0}>
                                        <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                        <TerminalSliderList>
                                            <span>Продавца-кассира</span><br/>
                                            <span>Администратора зала</span><br/>
                                            <span>Грузчика</span><br/>
                                            <span>еще 50 вакансий</span><br/>
                                        </TerminalSliderList>
                                    </TerminalSliderBoxFloat>
                                    <TerminalSliderQRBtn flex={2} width='100%' justifyContent='left' p='5%'>
                                        <TerminalQRCodeBox height='100%'>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                                <Box width='50%' alignItems='flex-end' display='flex'>
                                    <TerminalSliderBg></TerminalSliderBg>
                                </Box>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg flex={4} image={bg9} backgroundSize='contain' backgroundPosition='right' height='95vh'>
                                <TerminalSliderContentColumn p={0}>
                                    <TerminalCompanyLogoBox p='5%'>
                                        <TerminalCompanyLogo image={logo} backgroundPosition='left'></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderBoxFloat flex={3} backgroundColor='#0083c5' p='5%' borderRadius={0}>
                                        <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                        <TerminalSliderList>
                                            <span>Продавца-кассира</span><br/>
                                            <span>Администратора зала</span><br/>
                                            <span>Грузчика</span><br/>
                                            <span>еще 50 вакансий</span><br/>
                                        </TerminalSliderList>
                                    </TerminalSliderBoxFloat>
                                    <TerminalSliderQRBtn flex={2} width='100%' justifyContent='left' p='5%'>
                                        <TerminalButton themes='lightBlue' width='auto'><TerminalButtonTextfit mode="single" max={40}>Подробнее</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                                <Box width='50%' alignItems='flex-end' display='flex'>
                                    <TerminalSliderBg></TerminalSliderBg>
                                </Box>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg flex={4} image={bg9} backgroundSize='contain' backgroundPosition='right' height='95vh'>
                                <TerminalSliderContentColumn p={0}>
                                    <TerminalCompanyLogoBox p='5%'>
                                        <TerminalCompanyLogo image={logo} backgroundPosition='left'></TerminalCompanyLogo>
                                    </TerminalCompanyLogoBox>
                                    <TerminalSliderBoxFloat flex={3} backgroundColor='#0083c5' p='5%' borderRadius={0}>
                                        <TerminalSliderTitle>Приглашаем на работу</TerminalSliderTitle>
                                        <TerminalSliderList>
                                            <span>Продавца-кассира</span><br/>
                                        </TerminalSliderList>
                                    </TerminalSliderBoxFloat>
                                    <TerminalSliderQRBtn flex={2} width='100%' justifyContent='left' p='5%'>
                                        <TerminalQRCodeBox height='100%'>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </TerminalSliderContentColumn>
                                <Box width='50%' alignItems='flex-end' display='flex'>
                                    <TerminalSliderBg></TerminalSliderBg>
                                </Box>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>
                </Tabs>
            </TabPanel>

            {/*Theme9 end Theme10 start*/}
            <TabPanel>
                <Tabs className='tabs-example'>
                    <TabList>
                        <Tab>Example 1</Tab>
                        <Tab>Example 2</Tab>
                        <Tab>Example 3</Tab>
                    </TabList>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg image={bg10} absolute='true' />
                            <TerminalSliderBg flex={4}>
                                <TerminalSliderContentColumn p={0}>
                                    <Box display='flex' flexBasis='60%' flexDirection='column'>
                                        <TerminalCompanyLogoBox p='5%'>
                                            <TerminalCompanyLogo image={logoOrange} backgroundPosition='left' />
                                        </TerminalCompanyLogoBox>
                                        <Box display='flex' flex={3} />
                                    </Box>
                                    <TerminalSliderBoxFloat flex={1} backgroundColor='#e78f00' p='5%' borderRadius={0}>
                                        <TerminalSliderTitle alignItems='center' p='0'>Нам в команду требуются</TerminalSliderTitle>
                                    </TerminalSliderBoxFloat>
                                    <TerminalSliderList color='#000' p='2% 5%'>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                </TerminalSliderContentColumn>
                                <Box width='50%' display='flex'>
                                    <TerminalSliderQRBtn flex={3} height='30%' alignSelf='flex-end' alignItems='center'>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </Box>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg image={bg10} absolute='true' />
                            <TerminalSliderBg flex={4}>
                                <TerminalSliderContentColumn p={0}>
                                    <Box display='flex' flexBasis='60%' flexDirection='column'>
                                        <TerminalCompanyLogoBox p='5%'>
                                            <TerminalCompanyLogo image={logoOrange} backgroundPosition='left' />
                                        </TerminalCompanyLogoBox>
                                        <Box display='flex' flex={3} />
                                    </Box>
                                    <TerminalSliderBoxFloat flex={1} backgroundColor='#e78f00' p='5%' borderRadius={0}>
                                        <TerminalSliderTitle alignItems='center' p='0'>Нам в команду требуются</TerminalSliderTitle>
                                    </TerminalSliderBoxFloat>
                                    <TerminalSliderList color='#000' p='2% 5%'>
                                        <span>Продавца-кассира</span><br/>
                                        <span>Администратора зала</span><br/>
                                        <span>Грузчика</span><br/>
                                        <span>еще 50 вакансий</span><br/>
                                    </TerminalSliderList>
                                </TerminalSliderContentColumn>
                                <Box width='50%' display='flex'>
                                    <TerminalSliderQRBtn flex={3} height='30%' alignSelf='flex-end' alignItems='center'>
                                        <TerminalButton themes='lightBlue' width='auto'><TerminalButtonTextfit mode="single" max={40}>Подробнее</TerminalButtonTextfit></TerminalButton>
                                    </TerminalSliderQRBtn>
                                </Box>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>

                    <TabPanel>
                        <TerminalSliderWrap>
                            <TerminalSliderBg image={bg10} absolute='true' />
                            <TerminalSliderBg flex={4}>
                                <TerminalSliderContentColumn p={0}>
                                    <Box display='flex' flexBasis='60%' flexDirection='column'>
                                        <TerminalCompanyLogoBox p='5%'>
                                            <TerminalCompanyLogo image={logoOrange} backgroundPosition='left' />
                                        </TerminalCompanyLogoBox>
                                        <Box display='flex' flex={3} />
                                    </Box>
                                    <TerminalSliderBoxFloat flex={1} backgroundColor='#e78f00' p='5%' borderRadius={0}>
                                        <TerminalSliderTitle alignItems='center' p='0'>Нам в команду требуются</TerminalSliderTitle>
                                    </TerminalSliderBoxFloat>
                                    <TerminalSliderList color='#000' p='2% 5%'>
                                        <span>Продавца-кассира</span><br/>
                                    </TerminalSliderList>
                                </TerminalSliderContentColumn>
                                <Box width='50%' display='flex'>
                                    <TerminalSliderQRBtn flex={3} height='30%' alignSelf='flex-end' alignItems='center'>
                                        <TerminalQRCodeBox>
                                            <TerminalQRCodeImg src={qr} alt="" />
                                        </TerminalQRCodeBox>
                                    </TerminalSliderQRBtn>
                                </Box>
                            </TerminalSliderBg>
                        </TerminalSliderWrap>
                    </TabPanel>
                </Tabs>
            </TabPanel>

        </Tabs>

    </Box>
);

export default TerminalSliderTemplate1;
