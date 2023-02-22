import LogoImage from '../assets/images/logo.svg'

export default function Header() {
  return <header className="h-32 flex">
    <div className="flex w-32"><img src={LogoImage} /></div>
  </header>
}