import { Header } from '@global/types/httpClient/Header'

export const defaultHeaders: Header = {
  Accept: 'application/json',
  ContentType: 'application/json',
}

interface PostProps {
  url?: string
  port?: string
  endpoint: `/${string}`
  body: string
  headers?: Header
  authorizationToken?: string
}

export function post({
  url,
  port,
  endpoint,
  body,
  headers = defaultHeaders,
  authorizationToken = '',
}: PostProps): Promise<Response> {

  return requestServer({
    url,
    port,
    endpoint,
    method: 'POST',
    headers,
    body,
    authorizationToken,
  })
}

interface PutProps {
  url?: string
  port?: string
  endpoint: `/${string}`
  body: string
  headers?: Header
  authorizationToken?: string
}

export function put({
  url,
  port,
  endpoint,
  body,
  headers = defaultHeaders,
  authorizationToken = '',
}: PutProps): Promise<Response> {
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
  port?: string
  endpoint: `/${string}`
  headers?: Header
  authorizationToken?: string
}

export function deleteRequest({
  url,
  port,
  endpoint,
  headers = defaultHeaders,
  authorizationToken = '',
}: DeleteProps): Promise<Response> {
  return requestServer({
    url,
    port,
    endpoint,
    method: 'DELETE',
    headers,
    authorizationToken,
  })
}

interface GetProps {
  url?: string
  port? :string
  endpoint: `/${string}`
  headers?: Header
  authorizationToken?: string
}

export function get({
  url,
  port,
  endpoint,
  headers = defaultHeaders,
  authorizationToken = '',
}: GetProps): Promise<Response> {
  return requestServer({
    url,
    port,
    endpoint,
    method: 'GET',
    headers,
    authorizationToken,
  })
}

interface RequestServerProps {
  url?: string
  port?: string
  endpoint: `/${string}`
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  headers: Header
  body?: string
  authorizationToken?: string
}

export function requestServer({
  url = process.env.NEXT_PUBLIC_PROD_API_URL ?? "",
  port = process.env.NEXT_PUBLIC_API_PORT ?? "",
  endpoint,
  method,
  headers,
  body,
  authorizationToken,
}: RequestServerProps): Promise<Response> {
  var finalUrl;

  if (process.env.NEXT_PUBLIC_ENV_MODE == "dev" && process.env.NEXT_PUBLIC_DEV_API_URL) {
    finalUrl = process.env.NEXT_PUBLIC_DEV_API_URL + port + endpoint;
  } else {
    finalUrl = url + endpoint;
  }

  return fetch(finalUrl, {
    method,
    headers: {
      Accept: headers.Accept,
      'Content-Type': headers.ContentType,
      Authorization: `Bearer ${authorizationToken}`,
    },
    body,
  })
}
