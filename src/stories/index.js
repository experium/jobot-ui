import React from 'react';
import '../index.css';

import { storiesOf } from '@storybook/react';


/*Add*/
import MainPage from './add/main_page';
import TerminalListVacancy from './add/terminal_list_vavancy';
import TerminalCardVacancy from './add/terminal_card_vavancy';
import Header from './add/header';
import Footer from './add/footer';
import ListVacancy from './add/list_vacancy';
import CardVacancy from './add/card_vacancy';
import BoxImageBg from './add/box_image_bg';
import BoxColorBg from './add/box_color_bg';
import ButtonStory from './add/button';
import BadgeStory from './add/badge';
import TagStory from './add/tag';
import FormGroupIconStory from './add/form_group_icon';
import TerminalComponentTitle from "./add/terminal_title";
import TerminalComponentButton from "./add/terminal_button";
import LayoutComponents from "./add/layout";

/*Components*/
import { Typography, Box } from '@smooth-ui/core-sc'
import Button from '../components/Button';

/*Icon*/
import { LightBulb } from 'styled-icons/octicons';
import {  Github } from 'styled-icons/fa-brands';
import { Globe } from 'styled-icons/fa-solid/Globe';

storiesOf('Library', module)
.add('smooth-ui', () => <Box my={30} textAlign="center">
    <Typography variant="h1">smooth-ui</Typography>
    <img width={300} src="https://raw.githubusercontent.com/smooth-code/smooth-ui/master/resources/smooth-ui-logo.png" alt=""/>
    <p>Smooth UI is a style system / UI library for React. It works with Styled Components 💅 or Emotion 👩‍🎤.</p>
    <Button as="a" href="https://smooth-ui.smooth-code.com" size="lg" mr={20}><Globe /> Site</Button>
    <Button as="a" href="https://github.com/smooth-code/smooth-ui" variant="dark" size="lg"><Github /> Github</Button>
</Box>)
.add('styled-icons', () => <Box my={30} textAlign="center">
    <Typography variant="h1">Styled Icons</Typography>
    <Box my={50}>
        <LightBulb size={100} />
    </Box>
    <p>Font Awesome, Feather, Material Design, and Octicons icon packs as Styled Components</p>
    <Button as="a" href="https://styled-icons.js.org/" size="lg" mr={20}><Globe /> Site</Button>
    <Button as="a" href="https://github.com/jacobwgillespie/styled-icons" variant="dark" size="lg"><Github /> Github</Button>
</Box>);

storiesOf('Examples', module)
.add('Header', () => <Header />)
.add('List Vacancy', () => <ListVacancy />)
.add('Card Vacancy', () => <CardVacancy />)
.add('Box image bg', () => <BoxImageBg />)
.add('Box Color bg', () => <BoxColorBg />)
.add('Footer', () => <Footer />)
.add('Main page', () => <MainPage />);

storiesOf('Components', module)
.add('Button', () => <ButtonStory />)
.add('Badge', () => <BadgeStory />)
.add('Tag', () => <TagStory />)
.add('Form Group Icon', () => <FormGroupIconStory />)
.add('Layout', () => <LayoutComponents />);

storiesOf('Terminal/Examples', module)
.add('List vacancy', () => <TerminalListVacancy />)
.add('Card vacancy', () => <TerminalCardVacancy />);

storiesOf('Terminal/Components', module)
.add('Title', () => <TerminalComponentTitle />)
.add('Button', () => <TerminalComponentButton />);
