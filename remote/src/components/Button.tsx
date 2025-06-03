import React from 'react'

export interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClasses = `
    ${sizeClasses[size]}
    rounded-lg font-medium 
    transition-all duration-200 
    transform active:scale-95 active:shadow-md
    ${fullWidth ? 'hover:scale-[1.01]' : 'hover:scale-105'}
    hover:shadow-xl
    shadow-lg
    relative overflow-hidden
    group
    ${fullWidth ? 'block w-full text-center' : 'inline-block'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700',
    secondary:
      'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700',
    success:
      'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700',
    danger:
      'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700',
    link: 'bg-transparent text-blue-500 hover:text-blue-600 shadow-none hover:shadow-none underline-offset-4 hover:underline',
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    onClick?.()
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="
          absolute inset-0 rounded-lg
          bg-white opacity-0 
          group-active:opacity-20
          transition-opacity duration-300
          pointer-events-none
        "
      />
      <span
        className="
          absolute inset-0 rounded-lg
          bg-gradient-to-r from-transparent via-white to-transparent
          opacity-0 group-hover:opacity-10
          transform -skew-x-12 -translate-x-full
          group-hover:translate-x-full
          transition-all duration-1000 ease-out
          pointer-events-none
        "
      />
    </button>
  )
}

export default Button
