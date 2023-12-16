import { DocumentReference } from 'firebase/firestore';

export interface ILocation {
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

export type IMaterials = {
  id: string;
};
