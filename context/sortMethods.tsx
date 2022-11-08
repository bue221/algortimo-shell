import ShellSort from 'feature/shellSort/algoritmit/ShellSort'
import * as React from 'react'
import { OptionsSort } from 'utility/sortOptions'
// types
type Action = { type: 'setMethod'; payload: any }
type Dispatch = (action: Action) => void
type State = {
  selectedMethod: string
  title: string
  methodAnimation: any
  methodAnalitycs: any
  description: () => React.ReactNode
}
type SortProviderProps = { children: React.ReactNode }

const SortContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

const sortReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setMethod': {
      return { ...state, ...action?.payload }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

export const SortProvider = ({ children }: SortProviderProps) => {
  const [state, dispatch] = React.useReducer(sortReducer, {
    ...OptionsSort['shell']
  })

  const value = { state, dispatch }
  return <SortContext.Provider value={value}>{children}</SortContext.Provider>
}

//hooks
export const useSort = () => {
  const context = React.useContext(SortContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export { SortProvider as CountProvider, useSort as useCount }
