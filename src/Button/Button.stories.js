import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
export default { title: 'Button' };

export const withText = () => <Button
    onClick={action('clicked')}>Hello Button</Button>;

export const withEmoji = () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);