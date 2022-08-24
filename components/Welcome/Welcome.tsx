import { Title, Text, Anchor } from '@mantine/core';
import { useSession } from 'next-auth/react';

import useStyles from './Welcome.styles';

export function Welcome() {
  const { data: session } = useSession();

  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Mantine
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        {session ? `${JSON.stringify(session)}` : 'logged out'}
      </Text>
    </>
  );
}
