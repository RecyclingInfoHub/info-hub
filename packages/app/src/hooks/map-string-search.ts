import { IUseMapStringSearchHook } from '@/types/hook';
import { fetchSearchedLocationIds } from '@/utils/filter-locations';
import { useDebounce } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

export const useMapStringSearch: IUseMapStringSearchHook = (
  searchString: string
) => {
  const [result, setResult] = useState<string[]>([]);
  /**
   * A debounce looking at search string
   *
   * @see {@link https://usehooks-ts.com/react-hook/use-debounce Reference on how to useDebounce}
   */
  const debounceSearchString = useDebounce<string>(searchString, 500);

  useEffect(() => {
    const algoliaTestSearchString = async (searchString: string) => {
      if (!searchString) return [];

      const resultArr = await fetchSearchedLocationIds(searchString);
      console.log('string search result: ');
      console.table(resultArr);

      setResult(resultArr);
    };
    console.log('debounceSearchString ', debounceSearchString);

    algoliaTestSearchString(debounceSearchString);
  }, [debounceSearchString]);

  return [result];
};
