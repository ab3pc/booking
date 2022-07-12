import React from 'react'
import { Link } from 'react-router-dom'
import { exit } from '../store/authorization-slice/authorization-slice'
import { clearErrors } from '../store/bookings-slice/bookings-slice'
import { useAppDispatch } from '../store/store'
import { clearErrorsTrips } from '../store/trips-slice/trips-slice'

interface ErrorMsgProps {
  error?:string
  message?: string
  statusCode?: number
}

const ErrorMsg:React.FC<ErrorMsgProps> = ({error, message = 'Error', statusCode}) => {
   const dispatch = useAppDispatch();
   const handleOnClick = () => {
    dispatch(clearErrors())
    dispatch(clearErrorsTrips())
    dispatch(exit())
   }
   
    return (
    <div className="frame">
    <div className="modal">
      <img src="https://100dayscss.com/codepen/alert.png" width="44" height="38" />
          <span className="title">{statusCode}</span>
          <p>{`${error}:${message}`}</p>
          <div className="button"> <Link onClick={handleOnClick} to={'/sign-in'}>Sign IN</Link></div>
    </div>
  </div>
  )
}

export default ErrorMsg