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
import type { IMaterials } from '@/types';

const converter = {
  toFirestore: (data: IMaterials) => data,
  fromFirestore: (snapshot: DocumentSnapshot) => ({
    ...snapshot.data(),
    id: snapshot.id,
  }),
};

export const useMaterials = () => {
  const materialRef = collection(getFirestore(app), 'materials').withConverter(
    converter
  );

  let firebaseQuery: Query = materialRef;

  return useCollectionData(firebaseQuery);
};
