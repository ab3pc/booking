import { TripsRequestsType } from './types';
import { axiosFetch } from "../axiosFetch";

class TripsRequests implements TripsRequestsType {

  public getTrips(): Promise<any> {
    return axiosFetch.get('trips');
  }
  public getTripByID(id: string): Promise<any> {
    return axiosFetch.get(`/trips/${id}`);
  }

}

export default new TripsRequests()