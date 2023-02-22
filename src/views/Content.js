import Button from '../components/Button';
import Card from '../components/Card';

import MobileImage from '../assets/images/mobile-example.svg'
import BackgroundLogo from '../assets/images/background-logo.svg'

export default function Content() {
  return <section className="py-32">
    <div className="relative">
      <div className="w-full xs:border-solid float-left absolute top-[-128px] left-[5%]">
        <img src={MobileImage} />
      </div>

      <Card className="bg-outrageous-orange text-snow max-w-[446px] absolute right-0 bottom-[-128px] mx-8">
        <p className="text-2xl">Premium EQ</p>
        <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
        <p className="text-[65px] flex items-center">$4 <span className="text-[20px]">&nbsp;/month</span></p>

        <Button
          icon={'apple'}
          className="bg-eerie-black text-snow w-full">iOS Download</Button>
        <div className="h-[16px]"></div>
        <Button
          icon={'android'}
          className="bg-snow text-eerie-black w-full">Android Download</Button>
      </Card>

      <div className="bg-eerie-black rounded-lg w-full my-32 pb-32">
        <img src={BackgroundLogo} className="mx-auto" />
      </div>

    </div>
  </section>
}