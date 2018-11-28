import React from 'react';

import {
    Alert, Box, Grid, Typography,
    Switch, FormCheck, FormCheckLabel
} from '../ui';

const SwitchStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Switch</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support API component <a href="https://smooth-ui.smooth-code.com/docs-components-switch#api"><b>Switch</b></a> & <a href="https://smooth-ui.smooth-code.com/docs-components-form-check#api"><b>FormCheck</b></a> smooth-ui</Alert>
            <code>
<pre>{`import { Switch } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Basic</Typography>
        <Box mb={10}>
            <Switch />
        </Box>
        <code>
<pre>{`<Switch />
`}</pre>
        </code>
        <Typography variant="h3" mb={20} mt={30}>With labels</Typography>
    <Box mb={10}>
        <Box>
            <Switch labeled />
        </Box>
        <Switch labeled onLabel="ДА" offLabel="НЕТ" />
    </Box>
        <code>
<pre>{`<Switch `}<b>labeled</b>{` />
<Switch `}<b>labeled onLabel="ДА" offLabel="НЕТ"</b>{` />
`}</pre>
        </code>
        <Typography variant="h3" mb={20} mt={30}>Disabled</Typography>
    <Box mb={10}>
        <FormCheck>
            <Switch id="switchExample1" disabled />
            <FormCheckLabel htmlFor="switchExample1">Switch it</FormCheckLabel>
        </FormCheck>
    </Box>
        <code>
<pre>{`import { Switch, FormCheck, FormCheckLabel  } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box> <br/>{`
<FormCheck>
  <Switch id="switchExample1" `}<b>disabled</b>{` />
  <FormCheckLabel htmlFor="switchExample1">Switch it</FormCheckLabel>
</FormCheck>
`}</pre>
        </code>
    </Box>
);

export default SwitchStory;
