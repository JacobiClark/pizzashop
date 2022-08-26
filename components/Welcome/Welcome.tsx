import { Title, Text } from '@mantine/core';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { users } from '../../firebase/clientApp';

import useStyles from './Welcome.styles';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Welcome() {
  const { classes } = useStyles();

  const { data, error } = useSWR('/api/user', fetcher);

  const { data: session } = useSession();

  console.log(users);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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
