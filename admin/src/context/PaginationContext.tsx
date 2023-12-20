import { ReactNode, createContext, useRef } from "react";
import { proxy } from "valtio"

interface PaginationStore {
  pagination: any;
}

interface PaginationContextProps {
  children: ReactNode;
}
export const PaginationContext = createContext<PaginationStore | undefined>(undefined);

export const PaginationProvider = ({ children }: PaginationContextProps) => {

  const storeRef = useRef<PaginationStore | null>(null);
  
  if (!storeRef.current) {
    storeRef.current = proxy({
      pagination: 1,
    })
  }
  return (
    <PaginationContext.Provider value={storeRef.current}>
      {children}
    </PaginationContext.Provider>
  )
}
