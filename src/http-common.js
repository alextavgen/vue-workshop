import axios from 'axios'

export const ALERTA = axios.create({
  baseURL:  'http://mon-pas.tartuprod.ptec:8080/'
})

export const PROD = axios.create({
    baseURL:  'http://mon-pas.tartuprod.ptec:8080/'
})

