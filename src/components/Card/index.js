import './card.scss'
import cx from 'classnames'

export default function Card({ children, className, style }) {
  return <div className={cx('card', className)} style={style}>{children}</div>
}