/**
 * This is a bad example of cross filtering
 *
 * TODO:
 * In the future, we will use setup our locations to have materials as tags to fit
 * Algolia tag searching and filtering features
 */

import { useLocations } from '@/firebase/locations';
import { ILocation, IMaterials } from '@/types';
import { fetchSearchedLocationIds } from '@/utils/filter-locations';
import { useEffect, useState } from 'react';

export const useCrossFilterLocations = (
  fireBaseLocations: ILocation[],
  algoliaLocations: string[]
) => {
  const [locations, setLocations] = useState<ILocation[]>([]);

  const crossFilterLocations = (
    fireBaseLocations: ILocation[],
    algoliaLocations: string[]
  ) => {
    if (!algoliaLocations?.length || !fireBaseLocations?.length) {
      setLocations(fireBaseLocations);
      return;
    }

    setLocations(
      fireBaseLocations.filter((location) =>
        algoliaLocations.includes(location.id)
      )
    );
  };

  useEffect(() => {
    crossFilterLocations(fireBaseLocations, algoliaLocations);
  }, [fireBaseLocations, algoliaLocations]);

  return [locations];
};
