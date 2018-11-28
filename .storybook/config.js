import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { theme, ThemeProvider } from '../src/stories/ui';

function loadStories() {
  require('../src/stories');
}

addDecorator((story) => (
    <ThemeProvider theme={theme}>
        {story()}
    </ThemeProvider>
));

configure(loadStories, module);
