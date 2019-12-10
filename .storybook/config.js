import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/utils/GlobalStyle';
import React from 'react';

addDecorator(story => (
    <>
        <GlobalStyle />
        {story()}
    </>
));

configure(require.context('../src', true, /\.stories\.js$/), module);