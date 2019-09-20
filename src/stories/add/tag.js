import React from 'react';
import { Computer } from "styled-icons/material";

import {
    Alert, Box, Grid, Typography,
    Tag
} from '../ui';

const TagStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Tag</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a></Alert>
            <code>
<pre>{`import { Tag } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<Tag>Tag</Tag>
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Variants</Typography>
        <Tag>Tag Default</Tag><br/>
        <Tag link="true" as="a"><Computer />Tag Icon</Tag>
        <code>
<pre>{`<Tag>Tag Default</Tag>
<Tag><Computer />Tag</Tag>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Tag Link</Typography>
        <Tag link="true" as="a"><Computer />Tag Link</Tag>
        <code>
<pre>{`<Tag `}<b>link as="a"</b>{`>Tag Link</Tag>
`}</pre>
        </code>
    </Box>
);

export default TagStory;
