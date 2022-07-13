export interface BookingsRequestsType {
  getBookings: () => Promise<any>
  bookTrip: (body: BookTripBodyType) => Promise<any>
  deleteBooking: (bookingId: string) => Promise<void>
}

export interface BookTripBodyType {
  tripId: string
  userId: string
  guests: number
  date: string

}