import {EntityPointer, EntityType} from './types';

export const matchesEntityPointer = (entityPointer: EntityPointer, entityType: EntityType, entityId: string): boolean => {
    return entityPointer.entityType === entityType && entityPointer.entityId === entityId;
}
