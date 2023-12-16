import { searchLocations } from './algolia';

export const fetchSearchedLocationIds = async (searchString: string) => {
  try {
    const { hits } = await searchLocations(searchString);
    return hits.map(({ objectID }) => objectID);
  } catch {
    return [];
  }
};
