import React, { ReactNode } from "react"

interface Background {
  children: ReactNode
}

export const Background: React.FC<Background> = ({children}) => {
  return (
    <div className="h-full w-full bg-gray-800 min-h-screen px-4"> 
      {children}
    </div>
  )
}