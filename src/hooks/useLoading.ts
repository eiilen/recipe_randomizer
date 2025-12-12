import { useState, useEffect } from 'react'

type Callback = (show: boolean) => void

let subscribers: Callback[] = []
let globalState = { show: false }

const notify = () => {
  subscribers.forEach(cb => cb(globalState.show))
}

export const loadingService = {
  show: () => {
    globalState.show = true
    notify()
  },
  hide: () => {
    globalState.show = false
    notify()
  },
}

const useLoading = () => {
  const [loading, setLoading] = useState(globalState)

  useEffect(() => {
    const cb = (show: boolean) => setLoading({ show })
    subscribers.push(cb)
    return () => {
      subscribers = subscribers.filter(sub => sub !== cb)
    }
  }, [])

  return { loading }
}

export default useLoading
