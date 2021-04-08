import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { ExampleForm } from "../src/ExampleForm";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript + react-hook-form
        </Typography>
        <p>
          This example shows reusable fields using useController specfically how
          v7 RHF requires passing the form FieldValues type around to avoid
          errors like
        </p>
        <pre>
          Type 'Control&lt;FormFields&gt;' is not assignable to type
          'Control&lt;FieldValues&gt;'
        </pre>
        <p>
          The form below has one example controlled field with this approach
        </p>
        <ExampleForm />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
