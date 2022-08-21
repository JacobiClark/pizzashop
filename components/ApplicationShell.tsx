/* eslint-disable linebreak-style */
import {
  AppShell,
  Navbar,
  Footer,
  Aside,
  Text,
  MediaQuery,
  useMantineTheme,
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Center,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';

import Lottie from 'react-lottie-player';
import heartJson from '../public/heart.json';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  footerTextRight: {
    marginLeft: '-9px',
  },

  footerTextLeft: {
    marginRight: '-9px',
  },

  heart: {
    height: '30px',
  },
}));

export default function ApplicationShell(props: any) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          <Center>
            <Text className={classes.footerTextLeft}>Made with</Text>
            <Lottie
              loop
              animationData={heartJson}
              play
              rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
              className={classes.heart}
            />
            <Text className={classes.footerTextRight}>by Jacob Clark</Text>
          </Center>
        </Footer>
      }
      header={
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
          <Container className={classes.inner} fluid>
            <Group>
              <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
              <IconChevronDown />
            </Group>
            <Button radius="xl" sx={{ height: 30 }}>
              Order
            </Button>
          </Container>
        </Header>
      }
    >
      {props.children}
    </AppShell>
  );
}
