import React from 'react';
import { Alert, Box, Grid, Typography, Checkbox, FormCheck, FormCheckLabel } from "@smooth-ui/core-sc";

const CheckboxStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Checkbox</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support API component <a href="https://smooth-ui.smooth-code.com/docs-components-checkbox#api"><b>Checkbox</b></a> & <a href="https://smooth-ui.smooth-code.com/docs-components-form-check#api"><b>FormCheck</b></a> smooth-ui</Alert>
            <code>
<pre>{`import { Checkbox, FormCheck, FormCheckLabel } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Size</Typography>
        <Box mb={10}>
            <FormCheck>
                <Checkbox size="sm" id="sizeCheckbox1" name="sizeCheckboxs" value="option1" />
                <FormCheckLabel htmlFor="sizeCheckbox1">Small</FormCheckLabel>
            </FormCheck>
            <FormCheck>
                <Checkbox id="sizeCheckbox2" name="sizeCheckboxs" value="option2" />
                <FormCheckLabel htmlFor="sizeCheckbox2">Medium</FormCheckLabel>
            </FormCheck>
            <FormCheck>
                <Checkbox size="lg" id="sizeCheckbox3" name="sizeCheckboxs" value="option3" />
                <FormCheckLabel htmlFor="sizeCheckbox3">Large</FormCheckLabel>
            </FormCheck>
        </Box>
        <code>
<pre>{`<FormCheck>
    <Checkbox `}<b>size="sm" id="sizeCheckbox1" name="sizeCheckboxs" value="option1"</b>{` />
    <FormCheckLabel htmlFor="sizeCheckbox1">Small</FormCheckLabel>
</FormCheck>
<FormCheck>
    <Checkbox `}<b>id="sizeCheckbox2" name="sizeCheckboxs" value="option2"</b>{` />
    <FormCheckLabel htmlFor="sizeCheckbox2">Medium</FormCheckLabel>
</FormCheck>
<FormCheck>
    <Checkbox `}<b>size="lg" id="sizeCheckbox3" name="sizeCheckboxs" value="option3"</b>{` />
    <FormCheckLabel htmlFor="sizeCheckbox3">Large</FormCheckLabel>
</FormCheck>
`}</pre>
        </code>
        <Typography variant="h3" mb={20} mt={30}>Disabled</Typography>
    <Box mb={10}>
        <FormCheck>
            <Checkbox disabled id="disabledCheckbox1" name="disabledCheckboxs" value="option1" />
            <FormCheckLabel htmlFor="disabledCheckbox1">Disabled</FormCheckLabel>
        </FormCheck>
    </Box>
        <code>
<pre>{`<FormCheck>
    <Checkbox `}<b>disabled id="disabledCheckbox1" name="disabledCheckboxs" value="option1"</b>{` />
    <FormCheckLabel htmlFor="disabledCheckbox1">Disabled</FormCheckLabel>
</FormCheck>
`}</pre>
        </code>
    </Box>
);

export default CheckboxStory;
