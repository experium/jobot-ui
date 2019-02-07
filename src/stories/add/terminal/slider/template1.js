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
import qr from "../../../../assets/img/slider/qr.svg";
import bg1 from "../../../../assets/img/slider/1.png";
import bg2 from "../../../../assets/img/slider/2.png";
import bg3 from "../../../../assets/img/slider/3.png";
import bg4 from "../../../../assets/img/slider/4.png";
import bg5 from "../../../../assets/img/slider/5.png";

const TerminalSliderTemplate1 = () => (
    <Box>
        <Tabs>
            <TabList>
                <Tab>th 1</Tab>
                <Tab>th 2</Tab>
                <Tab>th 3</Tab>
                <Tab>th 4</Tab>
                <Tab>th 5</Tab>
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

        </Tabs>

        {/*<Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box, Button</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a><br/>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use <br/><small><small>Need to specify the number of columns & row for <b>CubeVacancy</b> and columns for <b>CubeControlsBtn</b> <br/><b>CubeVacancies</b> defaultProps flex="10", <b>CubeControls</b> defaultProps flex="1" from the height</small></small></Typography>
        <code>
<pre>{`import { `}<b>Box,CubeControlsBtn, CubeContainer, CubeControls, CubeVacancies, CubeVacancy, CubeVacancyName, CubeVacancySalary</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
<CubeContainer height={'600px'} >
    <CubeVacancies>
        {data.map((i) => <CubeVacancy `}<b>columnCount={5} rowCount={4}</b>{` backgroundColor={i % 2 ? '#f23735' : '#fafafa'} color={i % 2 ? '#fff' : '#000'}>
            <Box display={'flex'} height={'50%'}></Box>
            <CubeVacancyText height={'50%'}>
                <CubeVacancyName>Название вакансии {i}</CubeVacancyName>
                <CubeVacancySalary>от 100 000 руб.</CubeVacancySalary>
            </CubeVacancyText>
        </CubeVacancy>)}
    </CubeVacancies>
    <CubeControls>
        <CubeControlsBtn `}<b>columnCount={5}</b>{`>Назад</CubeControlsBtn>
        <CubeControlsBtn `}<b>columnCount={5}</b>{`>Вперед</CubeControlsBtn>
        <CubeControlsBtn>Поиск</CubeControlsBtn>
    </CubeControls>
</CubeContainer>
`}</pre>
        </code>*/}

    </Box>
);

export default TerminalSliderTemplate1;
