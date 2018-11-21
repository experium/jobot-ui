import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from '@smooth-ui/core-sc';
import theme from '../src/theme';

function loadStories() {
  require('../src/stories');
}

addDecorator((story) => (
    <ThemeProvider theme={theme}>
        {story()}
    </ThemeProvider>
));

configure(loadStories, module);
