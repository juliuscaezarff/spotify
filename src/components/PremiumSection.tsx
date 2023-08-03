import Image from 'next/image'

import MusicDownload from '../assets/img1.png'
import NoAnnouncement from '../assets/img2.png'
import Musics from '../assets/img3.png'
import HeadPhone from '../assets/img4.png'

export function PremiumSection() {
  return (
    <section className="flex flex-col justify-center items-center pt-10 pb-20">
      <div className="flex flex-col items-center justify-center my-8 container mx auto">
        <div>
          <h1 className="text-5xl font-extrabold pb-12">
            Por que ser Premium?
          </h1>
        </div>
        <div className="flex gap-10 pt-12">
          <div className="flex flex-col items-center gap-4">
            <Image src={MusicDownload} alt="" width={175} height={175} />
            <h3 className="text-xl font-bold">Modo offline.</h3>
            <p className="text-lg">Ouça música onde estiver.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image src={NoAnnouncement} alt="" width={175} height={175} />
            <h3 className="text-xl font-bold">Ouça músicas sem anúncios.</h3>
            <p className="text-lg">Curta música sem anúncios.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image src={Musics} alt="" width={175} height={175} />
            <h3 className="text-xl font-bold">Ouça na ordem que quiser.</h3>
            <p className="text-lg">Qualquer música em qualquer ordem.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image src={HeadPhone} alt="" width={175} height={175} />
            <h3 className="text-xl font-bold">Qualidade de som superior</h3>
            <p className="text-lg">Sinta o som.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
