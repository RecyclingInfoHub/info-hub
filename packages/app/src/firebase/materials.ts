import type { IMaterials } from '@/types';
import {
  DocumentSnapshot,
  FirestoreDataConverter,
  Query,
  collection,
  getFirestore,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import app from './config';

const converter: FirestoreDataConverter<IMaterials> = {
  toFirestore: (data: IMaterials) => data,
  fromFirestore: (snapshot: DocumentSnapshot): IMaterials => ({
    ...(snapshot.data() as IMaterials),
    id: snapshot.id,
  }),
};

export const useMaterials = () => {
  const materialRef = collection(getFirestore(app), 'materials').withConverter(
    converter
  );

  const firebaseQuery: Query<IMaterials> = materialRef;

  return useCollectionData(firebaseQuery);
};
