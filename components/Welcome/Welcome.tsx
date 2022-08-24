import { Title, Text } from '@mantine/core';
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
          Pizza
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This is the best way to get pizza trust me bro 100%
      </Text>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        {session ? `${JSON.stringify(session)}` : 'logged out'}
      </Text>
    </>
  );
}
