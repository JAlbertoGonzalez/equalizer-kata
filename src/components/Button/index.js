import cx from 'classnames'
import './button.scss'

export default function Button({ children, className, icon }) {
  return <button className={cx('button', className)}>{children}</button>
}