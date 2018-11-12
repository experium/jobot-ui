import styled, { css } from 'styled-components';

export const FormGroup = styled.div`
    position: relative;
`;
export const FormGroupIcon = styled.i`
    position: absolute;
    top: 16px;
    color: #888;
    left: 12px;
    font-size: 18px;
    width: 18px;
    z-index: 9;
    svg{
        width: 16px;
    }
`;
export const Input = styled.input`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075);
    color: #444;
    display: block;
    height: 55px;
    font-size: 14px;
    line-height: 1.42857143;
    padding: ${props => props.icon ? '0 40px' : '15px 10px'};
    width: 100%;
    background-image: none;
    outline: none;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    &::placeholder{
        color: #bbb;
    }
    &:focus{
        border-color: #FF4F57;
        box-shadow: none;
    }
    &:before{
        content: '';
    }
`;
export const Textarea = styled.textarea`
    resize: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0px;
    color: #444;
    display: block;
    padding: 15px 10px;
    width: 100%;
    outline: none;
    &::placeholder{
        color: #bbb;
    }
    &:focus{
        border-color: #FF4F57;
        box-shadow: none;
    }
`;
export const selectStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? '#fff' : '#000',
        background: state.isFocused ? '#FF4F57' : '#fff',
        boxShadow: state.isFocused ? '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)' : null,
        padding: '12px 20px',
        outline: 'none',
        borderColor: state.isFocused ? '#FF4F57' : '#ddd',
    }),
    control: (provided, state) => ({
        ...provided,
        borderRadius: 0,
        borderColor: state.isFocused ? '#FF4F57' : '#ddd',
        outline: 'none',
        minHeight: 55,
        paddingLeft: 30,
        ':hover': {
            boxShadow: 'none',
            borderColor: '#FF4F57',
        },
        ':focus': {
            outline: 'none',
        },
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
};

export const Label = styled.label`
    display: inline-block;
    margin: 0 0 5px;
    font-size: 22px;
    line-height: 1.1;
`;
