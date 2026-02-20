import React, { useState } from 'react'

export default function AppLogo({ logo, name, size = 'md' }) {
  const [error, setError] = useState(false)
  
  const sizeClasses = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-16 h-16 text-2xl'
  }

  if (error || !logo) {
    return (
      <div className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold`}>
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={logo}
      alt={name}
      className={`${sizeClasses[size]} rounded-xl object-cover`}
      onError={() => setError(true)}
    />
  )
}
