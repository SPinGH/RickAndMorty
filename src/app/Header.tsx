'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/next-js';
import { Box, Container, Flex, HStack, IconButton, Link, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

import { CHARACTER_ROUTE, HOME_ROUTE, LOCATION_ROUTE } from '@/constants';

import Logo from './icon.svg';

const Header: FC = () => {
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
                        <Link as={NextLink} href={CHARACTER_ROUTE}>
                            Characters
                        </Link>
                        <Link as={NextLink} href={LOCATION_ROUTE}>
                            Locations
                        </Link>
                    </HStack>
                    <IconButton
                        onClick={toggleColorMode}
                        icon={isLightMode ? <MoonIcon /> : <SunIcon />}
                        aria-label='Toggle Color Mode'
                    />
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
