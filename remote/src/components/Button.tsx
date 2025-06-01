import React from 'react'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-all duration-200 transform hover:scale-105'
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 shadow-lg hover:shadow-xl'
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
