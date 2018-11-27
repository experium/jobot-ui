import React from 'react';
import { Alert, Box, Grid, Typography } from "@smooth-ui/core-sc";

const TypographyStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Typography</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support API component <a href="https://smooth-ui.smooth-code.com/docs-components-typography#api"><b>Typography</b></a> smooth-ui</Alert>
            <code>
<pre>{`import { Typography } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Headings</Typography>
        <Box mb={10}>
            <Typography variant="h1">h1. Smooth heading</Typography>
            <Typography variant="h2">h2. Smooth heading</Typography>
            <Typography variant="h3">h3. Smooth heading</Typography>
            <Typography variant="h4">h4. Smooth heading</Typography>
            <Typography variant="h5">h5. Smooth heading</Typography>
            <Typography variant="h6">h6. Smooth heading</Typography>
        </Box>
        <code>
<pre>{`<Typography `}<b>variant="h1"</b>{`>h1. Smooth heading</Typography>
  <Typography `}<b>variant="h2"</b>{`>h2. Smooth heading</Typography>
  <Typography `}<b>variant="h3"</b>{`>h3. Smooth heading</Typography>
  <Typography `}<b>variant="h4"</b>{`>h4. Smooth heading</Typography>
  <Typography `}<b>variant="h5"</b>{`>h5. Smooth heading</Typography>
  <Typography `}<b>variant="h6"</b>{`>h6. Smooth heading</Typography>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Display headings</Typography>
        <Box mb={10}>
            <Typography variant="display-1">Display 1</Typography>
            <Typography variant="display-2">Display 2</Typography>
            <Typography variant="display-3">Display 3</Typography>
            <Typography variant="display-4">Display 4</Typography>
        </Box>
        <code>
<pre>{`<Typography `}<b>variant="display-1"</b>{`>Display 1</Typography>
<Typography `}<b>variant="display-2"</b>{`>Display 2</Typography>
<Typography `}<b>variant="display-3"</b>{`>Display 3</Typography>
<Typography `}<b>variant="display-4"</b>{`>Display 4</Typography>
`}</pre>
        </code>
    </Box>
);

export default TypographyStory;
