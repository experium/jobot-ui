import React from 'react';
import '../index.css';

import { storiesOf } from '@storybook/react';

/*Add*/
import MainPage from './add/main_page';
import TerminalListVacancy from './add/terminal_list_vavancy';
import TerminalListVacancyCompany from './add/terminal_list_vavancy_company';
import TerminalCardVacancy from './add/terminal_card_vavancy';
import TerminalCardCompany from './add/terminal_card_company';
import Header from './add/header';
import Footer from './add/footer';
import ListVacancy from './add/list_vacancy';
import ListVacancySearch from './add/list_vacancy_search';
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
import RadioStory from "./add/radio";
import CheckboxStory from "./add/checkbox";
import SwitchStory from "./add/switch";
import SelectStory from "./add/select";
import TextareaStory from "./add/textarea";
import TypographyStory from "./add/typography";
import InputStory from "./add/input";

/*Components*/
import { Typography, Box, Button } from './ui';

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
.add('List Vacancy Search', () => <ListVacancySearch />)
.add('Card Vacancy', () => <CardVacancy />)
.add('Box image bg', () => <BoxImageBg />)
.add('Box Color bg', () => <BoxColorBg />)
.add('Footer', () => <Footer />)
.add('Main page', () => <MainPage />);

storiesOf('Components', module)
.add('Button', () => <ButtonStory />)
.add('Badge', () => <BadgeStory />)
.add('Radio', () => <RadioStory />)
.add('Checkbox', () => <CheckboxStory />)
.add('Switch', () => <SwitchStory />)
.add('Select', () => <SelectStory />)
.add('Input', () => <InputStory />)
.add('Form Group Icon', () => <FormGroupIconStory />)
.add('Textarea', () => <TextareaStory />)
.add('Tag', () => <TagStory />)
.add('Layout', () => <LayoutComponents />)
.add('Typography', () => <TypographyStory />);

storiesOf('Terminal/Examples', module)
.add('List vacancy', () => <TerminalListVacancy />)
.add('List vacancy company', () => <TerminalListVacancyCompany />)
.add('Card vacancy', () => <TerminalCardVacancy />)
.add('Card company', () => <TerminalCardCompany />);

storiesOf('Terminal/Components', module)
.add('Title', () => <TerminalComponentTitle />)
.add('Button', () => <TerminalComponentButton />);
