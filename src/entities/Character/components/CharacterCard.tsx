import {
    Box,
    Card,
    CardBody,
    Heading,
    Image,
    Link,
    LinkBox,
    LinkOverlay,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
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
        <LinkBox
            as={Card}
            bg={useColorModeValue('gray.100', 'gray.600')}
            direction={['column', 'row']}
            overflow='hidden'
            height={['auto', '220px']}
            _hover={{ shadow: 'md' }}>
            <Image objectFit='cover' height='220px' aspectRatio={1} src={character.image} alt={character.name} />
            <CardBody p={4}>
                <Stack>
                    <Box>
                        <Heading as='p' size='lg'>
                            <LinkOverlay as={NextLink} href={`${CHARACTER_ROUTE}/${character.id}`} noOfLines={1}>
                                {character.name}
                            </LinkOverlay>
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

                    <Stack as='dl'>
                        <Box>
                            <Text as='dt' color='gray.500'>
                                Origin location:
                            </Text>
                            <Text as='dd'>
                                <Link
                                    as={NextLink}
                                    href={`${LOCATION_ROUTE}/${getIdFromUrl(character.origin.url)}`}
                                    noOfLines={1}>
                                    {character.origin.name}
                                </Link>
                            </Text>
                        </Box>

                        <Box>
                            <Text as='dt' color='gray.500'>
                                Last known location:
                            </Text>
                            <Text as='dd'>
                                <Link
                                    as={NextLink}
                                    href={`${LOCATION_ROUTE}/${getIdFromUrl(character.location.url)}`}
                                    noOfLines={1}>
                                    {character.location.name}
                                </Link>
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </CardBody>
        </LinkBox>
    );
};

export default CharacterCard;
