import React, { ReactNode } from "react"

interface Background {
  children: ReactNode
}

export const Background: React.FC<Background> = ({children}) => {
  return (
    <main className="h-full w-full bg-gray-200 min-h-screen px-4" > 
      {children}
    </main>
  )
}