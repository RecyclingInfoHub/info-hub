import { IUseMapStringSearchHook } from '@/types/hook';
import { fetchSearchedLocationIds } from '@/utils/filter-locations';
import { useEffect, useState } from 'react';

export const useMapStringSearch: IUseMapStringSearchHook = (
  searchString: string
) => {
  const [result, setResult] = useState<string[]>([]);

  const algoliaSearchString = async (searchString: string) => {
    if (!searchString) return [];

    const resultArr = await fetchSearchedLocationIds(searchString);

    setResult(resultArr);
  };

  useEffect(() => {
    algoliaSearchString(searchString);
  }, [searchString]);

  return [result];
};
