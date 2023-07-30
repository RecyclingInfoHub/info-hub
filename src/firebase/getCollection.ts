// firebase getCOllection

import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from './config';

const db = getFirestore(firebaseApp);

const getCollection = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const collectionData = querySnapshot.docs.map((doc) => doc.data());
  return collectionData;
};

export default getCollection;
