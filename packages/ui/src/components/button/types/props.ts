import * as React from 'react'

interface Props {
  prevIcon?: string
  postIcon?: string
  onClick?(...arg: any[]): void
}

export type ButtonProps = React.PropsWithChildren<Props>
