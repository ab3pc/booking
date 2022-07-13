export interface UserAuthBodyType {
  email: string;
  password: string;
}

export interface UserAuthRegBodyType {
  fullName: string
  email: string;
  password: string;
}


export interface AuthRequestsTypes {
  auth(body: UserAuthBodyType): Promise<any>;
  registr(body: UserAuthRegBodyType): Promise<any>;
}
