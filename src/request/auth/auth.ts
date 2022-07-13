import { UserAuthBodyType, UserAuthRegBodyType, AuthRequestsTypes } from "./types";
import { axiosFetch } from "../axiosFetch";

class AuthRequests implements AuthRequestsTypes {

  public auth(body: UserAuthBodyType): Promise<any> {
    return axiosFetch.post('auth/sign-in', body);
  }
  public registr(body: UserAuthRegBodyType): Promise<any> {
    return axiosFetch.post('auth/sign-up', body);
  }

  public getUserId(): Promise<any> {
    return axiosFetch.get('auth/authenticated-user');
  }

}


export default new AuthRequests()