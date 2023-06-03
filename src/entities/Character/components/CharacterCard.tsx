import { Link } from '@chakra-ui/next-js';
import { Box, Card, CardBody, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

import { CHARACTER_ROUTE, LOCATION_ROUTE } from '@/constants';
import { getIdFromUrl } from '@/shared/lib';

import { getStatusColor } from '../lib';
import { Character } from '../model';

interface CharacterCardProps {
    character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    return (
        <Card
            bg={useColorModeValue('gray.100', 'gray.600')}
            direction={['column', 'row']}
            overflow='hidden'
            width={['100%', null, '600px']}
            height={['auto', '220px']}>
            <Image objectFit='cover' height='220px' aspectRatio={1} src={character.image} alt={character.name} />
            <CardBody p={4}>
                <Stack>
                    <Box>
                        <Heading size='lg'>
                            <Link as={NextLink} href={`${CHARACTER_ROUTE}/${character.id}`} noOfLines={1}>
                                {character.name}
                            </Link>
                        </Heading>
                        <Text display='flex' alignItems='center' gap={2}>
                            <Box
                                as='span'
                                display='block'
                                w={2}
                                h={2}
                                borderRadius='50%'
                                bg={getStatusColor(character.status)}
                            />
                            {character.status} - {character.species}
                        </Text>
                    </Box>

                    <Box>
                        <Text color='gray.500'>Origin location:</Text>
                        <Link
                            as={NextLink}
                            href={`${LOCATION_ROUTE}/${getIdFromUrl(character.origin.url)}`}
                            noOfLines={1}>
                            {character.origin.name}
                        </Link>
                    </Box>

                    <Box>
                        <Text color='gray.500'>Last known location:</Text>
                        <Link
                            as={NextLink}
                            href={`${LOCATION_ROUTE}/${getIdFromUrl(character.location.url)}`}
                            noOfLines={1}>
                            {character.location.name}
                        </Link>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default CharacterCard;
