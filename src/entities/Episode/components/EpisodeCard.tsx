'use client';
import { Card, CardBody, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

import { EPISODE_ROUTE } from '@/constants';

import { Episode } from '../model';

interface EpisodeCardProps {
    episode: Episode;
}

const EpisodeCard: FC<EpisodeCardProps> = ({ episode }) => {
    return (
        <LinkBox as={Card} key={episode.id} _hover={{ shadow: 'md' }}>
            <CardBody>
                <Heading as='p' size='md'>
                    <LinkOverlay as={NextLink} href={`${EPISODE_ROUTE}/${episode.id}`}>
                        {episode.name}
                    </LinkOverlay>
                </Heading>
                <Text>
                    {episode.episode} ({episode.air_date})
                </Text>
            </CardBody>
        </LinkBox>
    );
};
export default EpisodeCard;
