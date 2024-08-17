import { Header } from '../../global/types/httpClient/Header'

export const defaultHeaders: Header = {
  Accept: 'application/json',
  ContentType: 'application/json',
}

interface PostProps {
  url?: string
  endpoint: `/${string}`
  body: string
  headers?: Header
  authorizationToken?: string
}

export function post({
  url = "http://localhost:3001",
  endpoint,
  body,
  headers = defaultHeaders,
  authorizationToken = '',
}: PostProps): Promise<Response> {
  return requestServer({
    url,
    endpoint,
    method: 'POST',
    headers,
    body,
    authorizationToken,
  })
}

export function put({
  url = "http://localhost:3001",
  endpoint,
  body,
  headers = defaultHeaders,
  authorizationToken = '',
}: PostProps): Promise<Response> {
  return requestServer({
    url,
    endpoint,
    method: 'PUT',
    headers,
    body,
    authorizationToken,
  })
}

interface DeleteProps {
  url?: string
  endpoint: `/${string}`
  headers?: Header
  authorizationToken?: string
}

export function deleteRequest({
  url = "http://localhost:3001",
  endpoint,
  headers = defaultHeaders,
  authorizationToken = '',
}: DeleteProps): Promise<Response> {
  return requestServer({
    url,
    endpoint,
    method: 'DELETE',
    headers,
    authorizationToken,
  })
}

interface GetProps {
  url?: string
  endpoint: `/${string}`
  headers?: Header
  authorizationToken?: string
}

export function get({
  url = "http://localhost:3001",
  endpoint,
  headers = defaultHeaders,
  authorizationToken = '',
}: GetProps): Promise<Response> {
  return requestServer({
    url,
    endpoint,
    method: 'GET',
    headers,
    authorizationToken,
  })
}

interface RequestServerProps {
  url: string
  endpoint: `/${string}`
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  headers: Header
  body?: string
  authorizationToken?: string
}

export function requestServer({
  url = "http://localhost:3001",
  endpoint,
  method,
  headers,
  body,
  authorizationToken,
}: RequestServerProps): Promise<Response> {
  return fetch(url + endpoint, {
    method,
    headers: {
      Accept: headers.Accept,
      'Content-Type': headers.ContentType,
      Authorization: `Bearer ${authorizationToken}`,
    },
    body,
  })
}
