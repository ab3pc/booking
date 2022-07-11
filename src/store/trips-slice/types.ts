import { ErrorType } from '../authorization-slice/types';
import { TripItemType } from './../../types/trip';

export interface InitialStateType {
  fetchedTrips: TripItemType[] | [],
  error: ErrorType | null,
  loading: boolean
}