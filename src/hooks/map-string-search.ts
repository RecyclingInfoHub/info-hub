import { IUseMapStringSearchHook } from '@/types/hook';
import { fetchSearchedLocationIds } from '@/utils/filter-locations';
import { useEffect, useState } from 'react';
import useDebounceMemoize from './debounce';

export const useMapStringSearch: IUseMapStringSearchHook = (
  searchString: string
) => {
  const [result, setResult] = useState<string[]>([]);

  const debounceSearch = useDebounceMemoize(
    async (searchString: string) => await algoliaSearchString(searchString)
  );

  const algoliaSearchString = async (searchString: string) => {
    if (!searchString) return [];

    const resultArr = await fetchSearchedLocationIds(searchString);

    setResult(resultArr);
  };

  useEffect(() => {
    debounceSearch(searchString);
  }, [searchString]);

  return [result];
};
