import shopActionTypes from "./shopType";

export const updateCollections = (collectionMap) => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
});