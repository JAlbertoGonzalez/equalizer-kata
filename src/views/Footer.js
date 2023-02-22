import Logo from '../assets/images/logo.svg'
import FacebookIcon from '../assets/images/facebook.svg'
import InstagramIcon from '../assets/images/instagram.svg'
import TwitterIcon from '../assets/images/twitter.svg'

export default function Footer() {
  return <footer className="flex w-full content-center justify-center">
    <div className='flex'><img src={Logo} /></div>
    <div className="flex-grow mx-32">All rights reserved © Equalizer 2021<br />Have any problems? Contact us via social media or<br />email us at <strong>equalizer@example.com</strong></div>
    <div className="grid grid-cols-3 gap-2 justify-between self-center">
      <a href="#"><img src={FacebookIcon} /></a>
      <a href="#"><img src={InstagramIcon} /></a>
      <a href="#"><img src={TwitterIcon} /></a>
    </div>
  </footer>
}