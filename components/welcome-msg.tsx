"use client"

import { useUser } from "@clerk/nextjs"

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-white text-4xl font-medium">
        Bem vindo de volta{isLoaded ? ", " : ""}{user?.firstName}!
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        Esse é o seu relatório financeiro geral.
      </p>
    </div>
  )
}