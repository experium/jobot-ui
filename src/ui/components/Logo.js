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
    font-weight: 600;
    color: #5E57A7;
    font-size: 1.2rem;
    img{
        width: 100%; 
        max-height: 100%; 
    }
    small{
        font-weight: 400;
        font-size: .8rem;
    }
`;

BoxLogo.defaultProps = {
    borderRadius: '50%',
    p: '10px',
};
