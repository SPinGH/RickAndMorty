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
                        <Show above='md'>
                            <Nav direction='row' />
                        </Show>
                    </HStack>
                    <HStack alignItems='center' spacing={4}>
                        <Show below='md'>
                            <IconButton
                                onClick={onToggle}
                                icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                                aria-label='Toggle Navigation'
                            />
                        </Show>

                        <IconButton
                            onClick={toggleColorMode}
                            icon={isLightMode ? <MoonIcon /> : <SunIcon />}
                            aria-label='Toggle Color Mode'
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
    <Stack direction={direction} alignItems='center' spacing={4}>
        <Link as={NextLink} href={CHARACTER_ROUTE}>
            Characters
        </Link>
        <Link as={NextLink} href={LOCATION_ROUTE}>
            Locations
        </Link>
        <Link as={NextLink} href={EPISODE_ROUTE}>
            Episodes
        </Link>
    </Stack>
);

export default Header;
