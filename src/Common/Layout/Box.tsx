import { CSSProperties, ReactElement } from 'react'

type BoxProps = {
  children?: ReactElement | ReactElement[]
} & CSSProperties

export const Box = ({ children, ...style }: BoxProps) => {
  return (
    <div style={style} className="box" >
      {children}
    </div>
  )
}
