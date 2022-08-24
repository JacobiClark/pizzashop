/* eslint-disable linebreak-style */
import {
  AppShell,
  Navbar,
  Group,
  ScrollArea,
  Footer,
  Text,
  useMantineTheme,
  createStyles,
  Header,
  Container,
  Button,
  Burger,
  Center,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconFlame, IconPizza, IconToolsKitchen2 } from '@tabler/icons';

import { signIn } from 'next-auth/react';

import Lottie from 'react-lottie-player';

import { ColorSchemeToggle } from './ColorSchemeToggle';
import { LinksGroup } from './NavbarLinksGroup';

import heartJson from '../public/heart.json';

const HEADER_HEIGHT = 60;

const navBarLinks = [
  { label: 'Specials', icon: IconFlame },
  {
    label: 'Menu',
    icon: IconToolsKitchen2,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconPizza,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPizza },
  { label: 'Contracts', icon: IconPizza },
  { label: 'Settings', icon: IconPizza },
  { label: 'Contact', icon: IconPizza },
];

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
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
  const links = navBarLinks.map((item) => <LinksGroup {...item} key={item.label} />);

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
          <Navbar.Section grow className={classes.links} component={ScrollArea}>
            <div className={classes.linksInner}>{links}</div>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
          <Container className={classes.inner} fluid>
            <Group>
              <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
              <IconPizza />
              <Text className={classes.linkLabel}>JCPizzaCo</Text>
            </Group>
            <Button radius="xl" size="xl" sx={{ height: 30 }} onClick={() => signIn()}>
              Order pizza
            </Button>
            <ColorSchemeToggle />
          </Container>
        </Header>
      }
      footer={
        <Footer height={30}>
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
    >
      {props.children}
    </AppShell>
  );
}
