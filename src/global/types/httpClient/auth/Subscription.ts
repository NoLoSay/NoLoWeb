type SubscribeJSON = {
  json: {
    username: string
    email: string
    telNumber: string | null
  }
  status: number
  message: string
}

export default SubscribeJSON
