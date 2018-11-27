import React from 'react';
import { Alert, Box, Grid, Typography, Radio, FormCheck, FormCheckLabel, RadioGroup } from "@smooth-ui/core-sc";

const RadioStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Radio</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support API component <a href="https://smooth-ui.smooth-code.com/docs-components-radio#api"><b>Radio</b></a> & <a href="https://smooth-ui.smooth-code.com/docs-components-form-check#api"><b>FormCheck</b></a> smooth-ui</Alert>
            <code>
<pre>{`import { Radio, FormCheck, FormCheckLabel, RadioGroup } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Size</Typography>
        <Box mb={10}>
            <RadioGroup>
                <FormCheck>
                    <Radio size="sm" id="sizeRadio1" name="sizeRadios" value="option1" />
                    <FormCheckLabel htmlFor="sizeRadio1">Small</FormCheckLabel>
                </FormCheck>
                <FormCheck>
                    <Radio size="md" id="sizeRadio2" name="sizeRadios" value="option2" />
                    <FormCheckLabel htmlFor="sizeRadio2">Medium</FormCheckLabel>
                </FormCheck>
                <FormCheck>
                    <Radio size="lg" id="sizeRadio3" name="sizeRadios" value="option3" />
                    <FormCheckLabel htmlFor="sizeRadio3">Large</FormCheckLabel>
                </FormCheck>
            </RadioGroup>
        </Box>
        <code>
<pre>{`<RadioGroup>
    <FormCheck>
        <Radio `}<b>size="sm" id="sizeRadio1" name="sizeRadios" value="option1"</b>{` />
        <FormCheckLabel htmlFor="sizeRadio1">Small</FormCheckLabel>
    </FormCheck>
    <FormCheck>
        <Radio `}<b>size="md" id="sizeRadio2" name="sizeRadios" value="option2"</b>{` />
        <FormCheckLabel htmlFor="sizeRadio2">Medium</FormCheckLabel>
    </FormCheck>
    <FormCheck>
        <Radio `}<b>size="lg" id="sizeRadio3" name="sizeRadios" value="option3"</b>{` />
        <FormCheckLabel htmlFor="sizeRadio3">Large</FormCheckLabel>
    </FormCheck>
</RadioGroup>
`}</pre>
        </code>
        <Typography variant="h3" mb={20} mt={30}>Disabled</Typography>
    <Box mb={10}>
        <FormCheck>
            <Radio disabled id="disabledRadio1" name="disabledRadios" value="option1" />
            <FormCheckLabel htmlFor="disabledRadio1">Disabled</FormCheckLabel>
        </FormCheck>
    </Box>
        <code>
<pre>{`<FormCheck>
    <Radio `}<b>disabled id="disabledRadio1" name="disabledRadios" value="option1"</b>{` />
    <FormCheckLabel htmlFor="disabledRadio1">Disabled</FormCheckLabel>
</FormCheck>
`}</pre>
        </code>
    </Box>
);

export default RadioStory;
