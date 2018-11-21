import { styled ,Box } from "@smooth-ui/core-sc";

export const Tag = styled(Box)`
    cursor: ${props => props.link === 'true' ? 'pointer' : 'inherit'};
    &:hover{
        color: ${props => props.link === 'true' ? '#FF4F57' : 'inherit'};
    }
    svg{
        margin-right: 5px;
        width: 16px;
        position: relative;
        top: -2px;
    }
`;

Tag.defaultProps = {
    display: 'inline-block',
    color: '#999',
    fontSize: '14px',
    mr: '15px',
    textDecoration: 'none'
};
