import clsx from 'clsx'
import styles from './Layout.module.scss'
type AlignType =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
  | 'first-baseline'
  | 'last-baseline'

type AlignContentType =
  | 'left'
  | 'right'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'first-baseline'
  | 'last-baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

interface Props {
  as?: any
  align?: AlignType
  alignSelf?: AlignType
  className?: string
  children: React.ReactNode | React.ReactNode[]
  alignContent?: AlignContentType
  direction?: 'row' | 'column'
  flex?: boolean | number | string
  grow?: any
  justify?: string
  pad?: boolean | number | string
  reverse?: boolean
  style?: any
  wrap?: boolean
}

export const Layout = ({
  as: Component = 'div',
  children,
  direction = 'row',
  align = 'stretch',
  grow,
  justify = 'flex-start',
  reverse,
  pad,
  wrap,
  flex,
  alignSelf,
  alignContent,
  className,
  style,
  ...props
}: Props) => {
  
  let flexValue = flex === true ? '1' : flex
  if (grow && flexValue == null) {
    flexValue = '1'
  }
  return (
    <Component
      {...props}
      style={{
        ...style,
        '--fcl-a': align || 'initial',
        '--fcl-ac': alignContent || 'initial',
        '--fcl-as': alignSelf || 'initial',
        '--fcl-jc': justify || 'initial',
        '--fcl-w': wrap ? 'wrap' : 'initial',
        '--fcl-f': flexValue || 'initial'
      }}
      className={clsx(
        className,
        styles.layout,
        direction && styles[direction],
        reverse && styles.reverse,
        pad != null && styles[`pad-${pad === true ? '3' : pad}`],
        wrap && styles.wrap
      )}
    >
      {children}
    </Component>
  )
}
