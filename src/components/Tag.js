import { styled , Box, css } from "@smooth-ui/core-sc";

export const Tag = styled(Box)`
    cursor: ${props => props.link === 'true' ? 'pointer' : 'inherit'};
    &:hover{
            ${p => p.link && css`
                color: #FF4F57;
            `}
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
