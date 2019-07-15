import { styled, Box } from '@smooth-ui/core-sc'

export const BoxLogo = styled(Box)`
    background-color: #F4EDFE;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    img{
        width: 100%; 
        max-height: 100%; 
    }
`;

BoxLogo.defaultProps = {
    borderRadius: '50%',
    p: '10px',
};
