import React from 'react';
import {
    TerminalSliderBg,
    TerminalSliderWrap,
    TerminalSliderRow,
    TerminalCompanyLogo,
    TerminalSliderContentColumn,
    TerminalCompanyLogoBox,
    TerminalSliderTitle,
    TerminalSliderList,
    TerminalSliderQRBtn,
    TerminalQRCodeBox,
    TerminalSliderFlex,
    TerminalSliderBoxFloat,
    TerminalSliderFooterBg,
    TerminalSliderFigure,
    TerminalButton,
    TerminalButtonTextfit,
    Box
} from '../';
import Qr from 'qrcode.react';

const Template1 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderRow>
            <TerminalCompanyLogoBox>
                { logo && <TerminalCompanyLogo image={logo}></TerminalCompanyLogo> }
            </TerminalCompanyLogoBox>
        </TerminalSliderRow>
        <TerminalSliderBg flex={4} image={data.bg}>
            <TerminalSliderContentColumn backgroundColor={data.bgColor}>
                <TerminalSliderTitle color={data.titleColor}>{ data.title }</TerminalSliderTitle>
                <TerminalSliderList color={data.descriptionColor}>
                    { terminalSliderListContent }
                </TerminalSliderList>
                <TerminalSliderQRBtn flex={3}>
                    { data.showQr ?
                        <TerminalQRCodeBox>
                            { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox> :
                        <TerminalButton themes='white' type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText } ❯</TerminalButtonTextfit>
                        </TerminalButton>
                    }
                </TerminalSliderQRBtn>
            </TerminalSliderContentColumn>
        </TerminalSliderBg>
    </TerminalSliderWrap>;

const Template2 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderFlex>
            <TerminalSliderContentColumn backgroundColor={data.bgColor}>
                <TerminalCompanyLogoBox>
                    { logo && <TerminalCompanyLogo image={logo} backgroundPosition='left'></TerminalCompanyLogo> }
                </TerminalCompanyLogoBox>
                <TerminalSliderTitle color={data.titleColor}>{ data.title }</TerminalSliderTitle>
                <TerminalSliderList color={data.descriptionColor}>
                    { terminalSliderListContent }
                </TerminalSliderList>
                <TerminalSliderQRBtn flex={3}>
                    { data.showQr ?
                        <TerminalQRCodeBox>
                            { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox> :
                        <TerminalButton themes={'blue'} type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText } ❯</TerminalButtonTextfit>
                        </TerminalButton>
                    }
                </TerminalSliderQRBtn>
            </TerminalSliderContentColumn>
            <TerminalSliderBg image={data.bg} width='50%'></TerminalSliderBg>
        </TerminalSliderFlex>
    </TerminalSliderWrap>;

const Template3 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap image={data.bg}>
        <TerminalSliderBg flex={6}>
            <Box display='flex' width='50%' flexDirection='column'>
                <Box flex={5} display='flex' p='4%'></Box>
                <TerminalCompanyLogoBox flex={1} backgroundColor='#fff' width='100%'>
                    { logo && <TerminalCompanyLogo image={logo}></TerminalCompanyLogo> }
                </TerminalCompanyLogoBox>
            </Box>
            <TerminalSliderContentColumn p={0}>
                <TerminalSliderBoxFloat flex={3} backgroundColor={data.bgColor}>
                    <TerminalSliderTitle color={data.titleColor}>{ data.title }</TerminalSliderTitle>
                    <TerminalSliderList color={data.descriptionColor}>
                        { terminalSliderListContent }
                    </TerminalSliderList>
                </TerminalSliderBoxFloat>
                <Box display='flex' flex={2}></Box>
                <TerminalSliderFooterBg>
                    { data.showQr ?
                        <TerminalSliderQRBtn height='200%' alignSelf='flex-end'>
                            <TerminalQRCodeBox>
                                { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                            </TerminalQRCodeBox>
                        </TerminalSliderQRBtn> :
                        <TerminalSliderQRBtn>
                            <TerminalButton themes='green' type='button' onClick={onMoreClick}>
                                <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText } ❯</TerminalButtonTextfit>
                            </TerminalButton>
                        </TerminalSliderQRBtn>
                    }
                </TerminalSliderFooterBg>
            </TerminalSliderContentColumn>
        </TerminalSliderBg>
    </TerminalSliderWrap>;

const Template4 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderFlex>
            <Box display='flex' width='50%' flexDirection='column'>
                <TerminalCompanyLogoBox flex={1} width='100%'>
                    { logo && <TerminalCompanyLogo image={logo}></TerminalCompanyLogo> }
                </TerminalCompanyLogoBox>
                <TerminalSliderBg flex={5} image={data.bg} backgroundSize='contain' backgroundPosition='center bottom'></TerminalSliderBg>
            </Box>
            <TerminalSliderContentColumn backgroundColor={data.bgColor}>
                <TerminalSliderTitle color={data.titleColor}>{ data.title }</TerminalSliderTitle>
                <TerminalSliderList color={data.descriptionColor}>
                    { terminalSliderListContent }
                </TerminalSliderList>
                <TerminalSliderQRBtn flex={3}>
                    { data.showQr ?
                        <TerminalQRCodeBox>
                            { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox> :
                        <TerminalButton themes='white' type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText } ❯</TerminalButtonTextfit>
                        </TerminalButton>
                    }
                </TerminalSliderQRBtn>
            </TerminalSliderContentColumn>
        </TerminalSliderFlex>
    </TerminalSliderWrap>;

const Template5 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderBg flex={4} image={data.bg}>
            <Box width='50%'></Box>
            <TerminalSliderContentColumn backgroundColor={data.bgColor}>
                <TerminalCompanyLogoBox>
                    { logo && <TerminalCompanyLogo image={logo}></TerminalCompanyLogo> }
                </TerminalCompanyLogoBox>
                <TerminalSliderTitle color={data.titleColor}>{ data.title }</TerminalSliderTitle>
                <TerminalSliderList noCheck='true' color={data.descriptionColor}>
                    { terminalSliderListContent }
                </TerminalSliderList>
                <TerminalSliderQRBtn flex={3}>
                    { data.showQr ?
                        <TerminalQRCodeBox>
                            { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox> :
                        <TerminalButton themes='red' type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText }</TerminalButtonTextfit>
                        </TerminalButton>
                    }
                </TerminalSliderQRBtn>
            </TerminalSliderContentColumn>
        </TerminalSliderBg>
    </TerminalSliderWrap>;

const Template6 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderRow backgroundColor={data.bgColor}>
            <TerminalCompanyLogoBox>
                <Box display='flex' flex={1} alignItems='center'>
                    { logo && <TerminalCompanyLogo image={logo} width='100%'></TerminalCompanyLogo> }
                </Box>
                <Box display='flex' flex={1}></Box>
            </TerminalCompanyLogoBox>
            <TerminalSliderContentColumn p='2% 0'>
                <TerminalSliderTitle color={data.titleColor} flex={1} fontWeight='bold' textTransform='uppercase'>{ data.title }</TerminalSliderTitle>
                <TerminalSliderList color={data.descriptionColor} flex={3}>
                    { terminalSliderListContent }
                </TerminalSliderList>
            </TerminalSliderContentColumn>
        </TerminalSliderRow>
        <TerminalSliderBg flex={2} image={data.bg}>
            <Box display='flex' width='50%' p={data.showQr ? null : '4%'}>
                { data.showQr ?
                    <TerminalSliderQRBtn flex={3}>
                        <TerminalQRCodeBox>
                            { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox>
                    </TerminalSliderQRBtn> :
                    <TerminalSliderQRBtn flex={3} alignSelf='flex-end'>
                        <TerminalButton themes='blue' width='auto' type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.title }</TerminalButtonTextfit>
                        </TerminalButton>
                    </TerminalSliderQRBtn>
                }
            </Box>
            <Box width='50%'></Box>
        </TerminalSliderBg>
    </TerminalSliderWrap>;

const Template7 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderBg flex={3} image={data.bg} flexDirection='column'>
            <TerminalSliderRow flex={2}>
                <TerminalCompanyLogoBox>
                    { logo && <TerminalCompanyLogo image={logo}></TerminalCompanyLogo> }
                </TerminalCompanyLogoBox>
            </TerminalSliderRow>
            <Box display='flex' flex={3}></Box>
            <TerminalSliderContentColumn width='100%' flex={1} backgroundColor={data.bgColor} p='2%'>
                <TerminalSliderTitle flex={1} fontWeight='bold' textTransform='uppercase' height='100%'mode='single' color={data.titleColor} alignItems='center' p='0' justifyContent='center'>{ data.title }</TerminalSliderTitle>
            </TerminalSliderContentColumn>
        </TerminalSliderBg>
        <TerminalSliderRow backgroundColor='#fafafa' p='2%' flex={1}>
            <TerminalSliderContentColumn p={0}>
                <TerminalSliderList color={data.descriptionColor} flex={3}>
                    { terminalSliderListContent }
                </TerminalSliderList>
            </TerminalSliderContentColumn>
            <TerminalCompanyLogoBox>
                <TerminalSliderQRBtn flex={3} width='100%' flexDirection='column'>
                    { data.showQr ?
                        <TerminalQRCodeBox height='100%'>
                            { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox> :
                        <TerminalButton themes='blue' width='auto' type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText }</TerminalButtonTextfit>
                        </TerminalButton>
                    }
                </TerminalSliderQRBtn>
            </TerminalCompanyLogoBox>
        </TerminalSliderRow>
    </TerminalSliderWrap>;

const Template8 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderRow>
            <Box width='50%'></Box>
            <TerminalCompanyLogoBox>
                { logo && <TerminalCompanyLogo image={logo} backgroundPosition='left'></TerminalCompanyLogo> }
            </TerminalCompanyLogoBox>
        </TerminalSliderRow>
        <TerminalSliderBg flex={4} backgroundColor={data.bgColor}>
            <Box width='50%' alignItems='flex-end' display='flex'>
                <TerminalSliderBg image={data.bg} backgroundSize='contain' backgroundPosition='center' height='95vh'></TerminalSliderBg>
            </Box>
            <TerminalSliderContentColumn p='2% 2% 2% 0'>
                <TerminalSliderTitle color={data.titleColor}>{ data.title }</TerminalSliderTitle>
                <TerminalSliderList color={data.descriptionColor}>
                    { terminalSliderListContent }
                </TerminalSliderList>
                <TerminalSliderQRBtn flex={3}>
                    { data.showQr ?
                        <TerminalQRCodeBox>
                           { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox> :
                        <TerminalButton themes='lightGreen' width='auto' type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText }</TerminalButtonTextfit>
                        </TerminalButton>
                    }
                </TerminalSliderQRBtn>
            </TerminalSliderContentColumn>
        </TerminalSliderBg>
    </TerminalSliderWrap>;

const Template9 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderBg flex={4} image={data.bg} backgroundSize='contain' backgroundPosition='right' height='95vh'>
            <TerminalSliderContentColumn p={0}>
                <TerminalCompanyLogoBox p='5%'>
                    { logo && <TerminalCompanyLogo image={logo} backgroundPosition='left'></TerminalCompanyLogo> }
                </TerminalCompanyLogoBox>
                <TerminalSliderBoxFloat flex={3} backgroundColor={data.bgColor} p='5%' borderRadius={0}>
                    <TerminalSliderTitle color={data.textColor}>{ data.title }</TerminalSliderTitle>
                    <TerminalSliderList color={data.descriptionColor}>
                        { terminalSliderListContent }
                    </TerminalSliderList>
                </TerminalSliderBoxFloat>
                <TerminalSliderQRBtn flex={2} width='100%' justifyContent='left' p='5%'>
                    { data.showQr ?
                        <TerminalQRCodeBox height='100%'>
                            { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox> :
                        <TerminalButton themes='lightBlue' width='auto' type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText }</TerminalButtonTextfit>
                        </TerminalButton>
                    }
                </TerminalSliderQRBtn>
            </TerminalSliderContentColumn>
            <Box width='50%' alignItems='flex-end' display='flex'>
                <TerminalSliderBg></TerminalSliderBg>
            </Box>
        </TerminalSliderBg>
    </TerminalSliderWrap>;

const Template10 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderBg image={data.bg} absolute='true' />
        <TerminalSliderBg flex={4}>
            <TerminalSliderContentColumn p={0}>
                <Box display='flex' flexBasis='60%' flexDirection='column'>
                    <TerminalCompanyLogoBox p='5%'>
                        { logo && <TerminalCompanyLogo image={logo} backgroundPosition='left' /> }
                    </TerminalCompanyLogoBox>
                    <Box display='flex' flex={3} />
                </Box>
                <TerminalSliderBoxFloat flex={1} backgroundColor={data.bgColor} p='5%' borderRadius={0}>
                    <TerminalSliderTitle alignItems='center' p='0' color={data.titleColor}>{ data.title }</TerminalSliderTitle>
                </TerminalSliderBoxFloat>
                <TerminalSliderList color={data.descriptionColor} p='2% 5%'>
                    { terminalSliderListContent }
                </TerminalSliderList>
            </TerminalSliderContentColumn>
            <Box width='50%' display='flex'>
                <TerminalSliderQRBtn flex={3} height='30%' alignSelf='flex-end' alignItems='center'>
                    { data.showQr ?
                        <TerminalQRCodeBox>
                            { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox> :
                        <TerminalButton themes='lightBlue' width='auto' type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText }</TerminalButtonTextfit>
                        </TerminalButton>
                    }
                </TerminalSliderQRBtn>
            </Box>
        </TerminalSliderBg>
    </TerminalSliderWrap>;

const Template11 = ({ data, logo, qr, terminalSliderListContent, onMoreClick }) =>
    <TerminalSliderWrap>
        <TerminalSliderFigure backgroundColor={data.bgColor} />
        <TerminalSliderFlex>
            <Box display='flex' width='50%' flexDirection='column'>
                <TerminalCompanyLogoBox flex={1} width='100%'>
                    { logo && <TerminalCompanyLogo image={logo}></TerminalCompanyLogo> }
                </TerminalCompanyLogoBox>
                <TerminalSliderBg flex={5} image={data.bg} backgroundSize='contain' backgroundPosition='center bottom'></TerminalSliderBg>
            </Box>
            <TerminalSliderContentColumn p='4% 4% 4% 10%'>
                <TerminalSliderTitle color={data.titleColor}>{ data.title }</TerminalSliderTitle>
                <TerminalSliderList color={data.descriptionColor}>
                    { terminalSliderListContent }
                </TerminalSliderList>
                <TerminalSliderQRBtn flex={3}>
                    { data.showQr ?
                        <TerminalQRCodeBox>
                            { qr && <Qr level='H' value={qr} includeMargin renderAs='svg' bgColor={data.qrBg} /> }
                        </TerminalQRCodeBox> :
                        <TerminalButton themes='lightGrey' width='auto' type='button' onClick={onMoreClick}>
                            <TerminalButtonTextfit mode="single" max={40}>{ data.buttonText }</TerminalButtonTextfit>
                        </TerminalButton>
                    }
                </TerminalSliderQRBtn>
            </TerminalSliderContentColumn>
        </TerminalSliderFlex>
    </TerminalSliderWrap>;

export const TerminalSliderTemplates = {
    template1: Template1,
    template2: Template2,
    template3: Template3,
    template4: Template4,
    template5: Template5,
    template6: Template6,
    template7: Template7,
    template8: Template8,
    template9: Template9,
    template10: Template10,
    template11: Template11
};
