import { createContext, useCallback, useContext, useState } from 'react'

const ToastCtx = createContext(() => {})

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const push = useCallback((msg) => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, msg, show: false }])
    requestAnimationFrame(() => {
      setToasts((t) => t.map((x) => (x.id === id ? { ...x, show: true } : x)))
    })
    setTimeout(() => {
      setToasts((t) => t.map((x) => (x.id === id ? { ...x, show: false } : x)))
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 300)
    }, 2800)
  }, [])

  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div className="toast-stack">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.show ? 'show' : ''}`}>{t.msg}</div>
        ))}
      </div>
    </ToastCtx.Provider>
  )
}

export function useToast() {
  return useContext(ToastCtx)
}
