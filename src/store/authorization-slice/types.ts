export enum formToggle {
	SIGN_UP = 'signUp',
	SIGN_IN = 'signIn',
	EXIT = 'exit'
}

export type FormType = formToggle.SIGN_IN | formToggle.SIGN_UP | formToggle.EXIT;

export interface AuthorizationStateType {
	auth:boolean,
  userId: string | null,
	typeForm: FormType,
	login: string,
	password: string,
	error: ErrorType | null,
  name: string,
  loading: boolean
}
export interface ErrorType {
  code: string,
  error: string,
  message: string
}