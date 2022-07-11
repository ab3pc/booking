import { BookingsRequestsType } from './types';
import { axiosFetch } from "../axiosFetch";
import { BookTripBodyType } from "./types";

class BookingsRequests implements BookingsRequestsType {

  public getBookings(): Promise<any> {
    return axiosFetch.get('bookings');
  }
  public bookTrip(body: BookTripBodyType): Promise<any> {
    return axiosFetch.post('bookings', body);
  }
  public deleteBooking(tripId: string): Promise<any> {
    return axiosFetch.delete(`/bookings/${tripId}`);
  }

}

export default new BookingsRequests()