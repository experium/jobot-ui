import React from 'react';
import { Alert, Box, Grid, Typography, Select } from "@smooth-ui/core-sc";

const SelectStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Select</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support API component <a href="https://smooth-ui.smooth-code.com/docs-components-select#api"><b>Select</b></a> smooth-ui</Alert>
            <code>
<pre>{`import { Select } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Size</Typography>
        <Box mb={10}>
            <Box mb={10}>
                <Select size="sm" placeholder="Small">
                    <option value="one">One</option>
                    <option value="two">Two</option>
                </Select>
            </Box>
            <Box mb={10}>
                <Select size="md" placeholder="Medium">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="maybe">Maybe</option>
                </Select>
            </Box>
            <Select size="lg" placeholder="Large">
                <option value="amazing">Amazing</option>
                <option value="great">Great</option>
            </Select>
        </Box>
        <code>
<pre>{`<Select `}<b>size="sm"</b>{` placeholder="Small">
    <option value="one">One</option>
    <option value="two">Two</option>
</Select>
<Select `}<b>size="md"</b>{` placeholder="Medium">
    <option value="yes">Yes</option>
    <option value="no">No</option>
    <option value="maybe">Maybe</option>
</Select>
<Select `}<b>size="lg"</b>{` placeholder="Large">
    <option value="amazing">Amazing</option>
    <option value="great">Great</option>
</Select>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Disabled</Typography>
        <Box mb={10}>
            <Select disabled placeholder="Disabled">
                <option>Disabled</option>
            </Select>
        </Box>
        <code>
<pre>{`<Select `}<b>disabled</b>{` placeholder="Disabled">
    <option>Disabled</option>
</Select>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Groups</Typography>
        <Box mb={10}>
            <Select>
                <optgroup label="Group 1">
                    <option value="one">One</option>
                    <option value="two">Two</option>
                </optgroup>
                <optgroup label="Group 2">
                    <option value="three">Three</option>
                    <option value="four">Four</option>
                </optgroup>
            </Select>
        </Box>
        <code>
<pre>{`<Select>
    <optgroup label="Group 1">
        <option value="one">One</option>
        <option value="two">Two</option>
    </optgroup>
    <optgroup label="Group 2">
        <option value="three">Three</option>
        <option value="four">Four</option>
    </optgroup>
</Select>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Control & Validation</Typography>
    <Box mb={10}>
        <Box mb={10}>
            <Select control>
                <option>Control</option>
                <option>Other</option>
            </Select>
        </Box>
        <Box mb={10}>
            <Select control valid>
                <option>Valid</option>
                <option>Other</option>
            </Select>
        </Box>
        <Select control valid={false}>
            <option>Invalid</option>
            <option>Other</option>
        </Select>
    </Box>
        <code>
<pre>{`<Select `}<b>control</b>{`>
    <option>Control</option>
    <option>Other</option>
</Select>
<Select `}<b>control valid</b>{`>
    <option>Valid</option>
    <option>Other</option>
</Select>
<Select `}<b>control valid={`{false}`}</b>{`>
    <option>Invalid</option>
    <option>Other</option>
</Select>
`}</pre>
        </code>
    </Box>
);

export default SelectStory;
