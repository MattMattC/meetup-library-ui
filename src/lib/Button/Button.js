import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeDefault } from '../../theme';
import { darken } from 'polished';

const BaseButton = styled.div`
    background-color: ${props => props.color || ThemeDefault.primary};
    display: inline-block;
    padding: ${ThemeDefault.space.sm};
    border-radius: 4px;
    border-bottom: ${props => darken(0.2, props.color || ThemeDefault.primary)};
    color:white;
    cursor: pointer;
    border-bottom: 3px solid ${props => darken(0.2, props.color || ThemeDefault.primary)};
    user-select: none;
    &:hover{
        background-color: ${props => darken(0.2, props.color || ThemeDefault.primary)};
        border-bottom: 3px solid ${props => darken(0.3, props.color || ThemeDefault.primary)};
    }
    &:active{
        background-color: ${props => darken(0.3, props.color || ThemeDefault.primary)};
        border-bottom: 3px solid ${props => darken(0.4, props.color || ThemeDefault.primary)};
    }
`;

const Button = ({ children, ...rest }) => (
    <BaseButton {...rest} >
        {children}
    </BaseButton>
);

Button.propTypes = {
    /**
     * Handle On Click
     */
    onClick: PropTypes.func,
    /**
     * 
     */
    color: PropTypes.string
};

export default Button;