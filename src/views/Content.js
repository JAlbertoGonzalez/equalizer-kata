import MobileImage from '../assets/images/mobile-example.svg'
import BackgroundLogo from '../assets/images/background-logo.svg'
import PurchaseCard from '../components/PurchaseCard'

export default function Content() {
  return <section className="py-32">
    <div className="relative hidden md:block">
      <div className="w-full float-left absolute top-[-128px] left-[5%]">
        <img src={MobileImage} />
      </div>

      <PurchaseCard className='bg-outrageous-orange text-snow max-w-[446px] absolute right-0 bottom-[-128px] mx-8' />

      <div className="bg-eerie-black rounded-lg w-full my-32 pb-32">
        <img src={BackgroundLogo} className="mx-auto" />
      </div>

    </div>
    <div className="block md:hidden">

      <div className="bg-eerie-black rounded-lg w-full float-left relative mt-[15rem]">
        <div className="absolute bottom-0 w-full">
          <img src={MobileImage} className="mx-auto" />
        </div>

        <img src={BackgroundLogo} className="mx-auto w-[60%]" />
      </div>


      <div className="clear-both flex items-stretch justify-center">
        <PurchaseCard className='bg-outrageous-orange text-snow' />
      </div>
    </div>
  </section>
}