import cx from 'classnames'
import './button.scss'

import AppleLogo from '../../assets/images/apple-logo.svg'
import AndroidLogo from '../../assets/images/android-logo.svg'

const AppleIcon = <img src={AppleLogo} />
const AndroidIcon = <img src={AndroidLogo} />

export default function Button({ children, className, icon }) {
  let logo = <></>

  if (icon === 'android') {
    logo = AndroidIcon
  }

  if (icon === 'apple') {
    logo = AppleIcon
  }

  return <button className={cx('button', className, 'flex items-center justify-center')}><>{logo}&nbsp;{children}</></button>
}