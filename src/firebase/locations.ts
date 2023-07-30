import {
  DocumentSnapshot,
  Query,
  collection,
  doc,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import app from './config';
import { Location } from '@/types';

const converter = {
  toFirestore: (data: Location) => data,
  fromFirestore: (snapshot: DocumentSnapshot) => ({
    ...snapshot.data(),
    id: snapshot.id,
  }),
};

export const useLocations = (materialFilters?: string[]) => {
  const locationRef = collection(getFirestore(app), 'locations').withConverter(
    converter
  );

  let firebaseQuery: Query = locationRef;

  if (materialFilters && materialFilters.length) {
    const materialRef = collection(getFirestore(app), 'materials');
    const materialFilterRefs = materialFilters.map((material) =>
      doc(materialRef, material)
    );
    const materialFiltersQuery = query(
      locationRef,
      where('accepts', 'array-contains-any', materialFilterRefs)
    );

    firebaseQuery = materialFiltersQuery;
  }

  return useCollectionData(firebaseQuery);
};
