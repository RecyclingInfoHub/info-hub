import { DocumentReference } from 'firebase/firestore';

export interface Location {
  id: string;
  address: string;
  accepts: DocumentReference[];
  lng: number;
  lat: number;
  website?: string;
  contactNo?: number;
  name: string;
  state: string;
  hours: string;
  email?: string;
}
