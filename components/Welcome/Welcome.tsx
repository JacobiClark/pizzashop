import { Title, Text } from '@mantine/core';
import { useSession } from 'next-auth/react';

import useSWR from 'swr';
import { collection, addDoc, getDocs } from 'firebase/firestore';

import { db } from '../../firebase/firebaseConfig';

import useStyles from './Welcome.styles';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const usersCollection = collection(db, 'users');

export function Welcome() {
  console.log(usersCollection);
  const { classes } = useStyles();

  const { data, error } = useSWR('/api/user', fetcher);

  const { data: session } = useSession();

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
