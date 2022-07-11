import axios from "axios";
import configServer from './serverConfig.json'

export const axiosFetch =  axios.create({
	baseURL: configServer.serviceURL,
	headers: {
		"Content-Type": "application/json"
	}
})

axiosFetch.interceptors.request.use((req) => {
	if (localStorage.getItem('access_token')) {
	  const token: string|null = localStorage.getItem('access_token')
	  // @ts-ignore
	  req.headers['Authorization'] = `Bearer ${JSON.parse(token || '')}`
	  return req
	}
	return req
  }) 