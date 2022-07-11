import { BookType } from "../../types/bookings";
import { ErrorType } from "../authorization-slice/types";

export interface InitialStateType {
  bookings: BookType[] | [],
  error: ErrorType | null,
  loading: boolean
}
