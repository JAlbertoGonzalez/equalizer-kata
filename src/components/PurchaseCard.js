import Button from './Button';
import Card from './Card';

export default function PurchaseCard({ className, style }) {
  return <Card className={className} style={style}>
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
}