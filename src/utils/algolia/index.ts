import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_SECRET ?? ''
);

const locationIndex = client.initIndex('locations');

export default locationIndex;

export const searchLocations = (searchString: string = '') =>
  locationIndex.search(searchString);
