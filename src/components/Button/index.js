import cx from 'classnames'
import './button.scss'

const AppleLogo = <img src="/images/apple-logo.svg" />
const AndroidLogo = <img src="/images/android-logo.svg" />

export default function Button({ children, className, icon }) {
  let logo = <></>

  if (icon === 'android') {
    logo = AndroidLogo
  }

  if (icon === 'apple') {
    logo = AppleLogo
  }
  return <button className={cx('button', className, 'flex items-center justify-center')}><>{logo}&nbsp;{children}</></button>
}