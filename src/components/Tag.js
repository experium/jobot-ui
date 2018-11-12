import styled from 'styled-components';

export const Tag = styled.span`
    font-size: 14px;
    color: #999;
    margin-right: 15px;
    svg{
        margin-right: 5px;
        width: 16px;
        position: relative;
        top: -2px;
    }
`;

export const TagLink = styled(Tag)`
    cursor: pointer;
    &:hover{
        color: #FF4F57;
    }
`;
