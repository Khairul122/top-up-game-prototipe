import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import seedTransactions from './data/transactions.json'

const STORAGE_KEY = 'gacor_riwayat_v1'
const TransactionsCtx = createContext({ transactions: [], addTransaction: () => {} })

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed
    }
  } catch {
    /* localStorage unavailable, fall back to seed */
  }
  return seedTransactions
}

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState(loadInitial)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
    } catch {
      /* ignore persistence errors (e.g. private mode) */
    }
  }, [transactions])

  const addTransaction = useCallback((tx) => {
    setTransactions((prev) => [tx, ...prev])
  }, [])

  return (
    <TransactionsCtx.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsCtx.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionsCtx)
}
