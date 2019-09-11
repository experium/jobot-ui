import React from 'react';
import { styled, Select as SmoothSelect, css } from '@smooth-ui/core-sc'

export const Select = ({ icon, landing, filter, ...props }) => {
    const Component = styled(SmoothSelect)`
        select {
            border-radius: 0;
        }

        ${icon && css`
            select {
                padding-left: 40px;
            }
        `}
        
        ${landing && css`
            width: 260px;
            select {
                border-radius: .3rem;
                border-color: #fff;
                background: transparent;
                color: #fff;
            }
            svg{
                color: #fff;
            }
            @media (max-width: 769px){
                width: 100%;
                margin-top: 15px;
                select {
                    border-radius: .3rem;
                    border-color: #5E57A7;
                    background: transparent;
                    color: #5E57A7;
                }
                svg{
                    color: #5E57A7;
                }
            }
        `}
        
        ${filter && css`
            select {
                border-radius: .3rem;
                border-color: #5E57A7;
                background: transparent;
            }
            svg{
                color: #5E57A7;
            }
        `}
    `;

    return <Component {...props} />;
};
