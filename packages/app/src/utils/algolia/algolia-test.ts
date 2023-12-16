/**
 * Sample Algolia Script
 * @see {@link https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript#test-your-installation|Algolia JS}
 *
 * How to run:
 * 1. In terminal:
 * run `node algolia-test.js`
 *
 * or
 *
 * run `node algolia/algolia-test.js`
 *
 * Update the path to this file accordingly
 */

// dotenv is required to read env variables
import dotenv from 'dotenv';
dotenv.config();

// For the default version
// const algoliasearch = require("algoliasearch");

// For the default version
// import algoliasearch from 'algoliasearch';

// For the search only version
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_SECRET!
);
const index = client.initIndex('locations');

const search = async () => {
  try {
    const { hits } = await index.search('');
    console.log(hits);
  } catch (error) {
    console.log(error);
  }
};

search();
