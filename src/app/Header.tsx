'use client';

import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/next-js';
import {
    Box,
    Collapse,
    Container,
    Flex,
    HStack,
    IconButton,
    Link,
    List,
    ListItem,
    Show,
    Stack,
    StackProps,
    useColorMode,
    useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

import { CHARACTER_ROUTE, EPISODE_ROUTE, HOME_ROUTE, LOCATION_ROUTE } from '@/constants';

import Logo from './icon.svg';

const Header: FC = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const isLightMode = colorMode === 'light';

    return (
        <Box as='header' py={4}>
            <Container maxW='container.xl'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <HStack alignItems='center' spacing={4}>
                        <NextLink href={HOME_ROUTE}>
                            <Image
                                height={10}
                                width={10}
                                src={Logo}
                                alt='Logo'
                                filter={isLightMode ? undefined : 'invert(1)'}
                            />
                        </NextLink>
                        <Box display={['none', null, 'block']}>
                            <Nav direction='row' />
                        </Box>
                    </HStack>
                    <HStack alignItems='center' spacing={4}>
                        <IconButton
                            onClick={onToggle}
                            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                            display={['block', null, 'none']}
                            aria-label={`${isOpen ? 'Close' : 'Open'} navigation`}
                        />

                        <IconButton
                            onClick={toggleColorMode}
                            icon={isLightMode ? <MoonIcon /> : <SunIcon />}
                            aria-label={`Set ${isLightMode ? 'dark' : 'light'} color mode`}
                        />
                    </HStack>
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                    <Nav direction='column' />
                </Collapse>
            </Container>
        </Box>
    );
};

const Nav = ({ direction }: { direction: StackProps['direction'] }) => (
    <nav>
        <Stack as={List} direction={direction} alignItems='center' spacing={4}>
            <ListItem>
                <Link as={NextLink} href={CHARACTER_ROUTE}>
                    Characters
                </Link>
            </ListItem>
            <ListItem>
                <Link as={NextLink} href={LOCATION_ROUTE}>
                    Locations
                </Link>
            </ListItem>

            <ListItem>
                <Link as={NextLink} href={EPISODE_ROUTE}>
                    Episodes
                </Link>
            </ListItem>
        </Stack>
    </nav>
);

export default Header;
