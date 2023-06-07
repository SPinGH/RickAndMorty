import { Character } from '../model';

export const getStatusColor = (status: Character['status']) => {
    switch (status) {
        case 'Alive':
            return 'green.400';
        case 'Dead':
            return 'red.400';
        default:
            return 'gray.400';
    }
};
