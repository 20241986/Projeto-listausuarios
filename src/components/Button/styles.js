import styled from "styled-components";

export const Button = styled.button`
    border: ${(props) => (props.theme === 'primary' ? 'none' : '1px solid #fff')};
    background: ${(props) => 
    props.theme === 'primary' 
    ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' 
    : 'transparent'};
    border-radius: 25px;
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #ff6378 0%, #fe7e5d 100%)' : '#fff'}; 
        color: ${props => props.theme === 'primary' ? '#fff' : '#000'};
    }

    &:active {
        opacity: ${props => props.theme === 'primary' ? '0.5' : '0.3'};
    }
`