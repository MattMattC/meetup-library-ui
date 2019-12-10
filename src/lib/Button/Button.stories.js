import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, radios, select } from '@storybook/addon-knobs';

import { ThemeDefault } from '../../theme';

const colorsTest = {
    primary: ThemeDefault.primary,
    secondary: ThemeDefault.secondary,
    tertiary: ThemeDefault.tertiary,
}

export default { title: 'Button' };

export const withText = () => <Button
    onClick={action('clicked')}
    color={select('color', colorsTest, colorsTest.primary)}
>Hello Button</Button>;

export const withEmoji = () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);