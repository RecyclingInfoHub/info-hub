import {
  DocumentSnapshot,
  FirestoreDataConverter,
  Query,
  collection,
  doc,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import app from './config';
import { ILocation } from '@/types';

const converter: FirestoreDataConverter<ILocation> = {
  toFirestore: (data: ILocation) => data,
  fromFirestore: (snapshot: DocumentSnapshot): ILocation => ({
    ...(snapshot.data() as ILocation),
    id: snapshot.id,
  }),
};

export const useLocations = (materialFilters?: string[]) => {
  const locationRef = collection(getFirestore(app), 'locations').withConverter(
    converter
  );

  let queryRef: Query<ILocation> = locationRef;

  if (materialFilters && materialFilters.length) {
    const materialRef = collection(getFirestore(app), 'materials');
    const materialFilterRefs = materialFilters.map((material) =>
      doc(materialRef, material)
    );

    queryRef = query(
      locationRef,
      where('accepts', 'array-contains-any', materialFilterRefs)
    );
  }

  return useCollectionData(queryRef);
};
