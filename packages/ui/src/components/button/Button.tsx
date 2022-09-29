import * as React from 'react'
import { PREFIX } from '../../constant'
import type { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  prevIcon,
  postIcon,
  children,
}: ButtonProps) => {
  const createPrevIcon = () => (prevIcon ? <span>{prevIcon}</span> : null)
  const createPostIcon = () => (postIcon ? <span>{postIcon}</span> : null)

  return (
    <button>
      {createPrevIcon()}
      {children}
      {createPostIcon()}
    </button>
  )
}

Button.displayName = `${PREFIX}Button`

export default Button
