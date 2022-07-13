
export interface TripsRequestsType {
  getTrips: () =>  Promise<any>
  getTripByID: (id:string) => Promise<any>
}

