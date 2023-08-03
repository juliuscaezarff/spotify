export function HeroSection() {
  return (
    <section className="h-[370px] bg-[#1d75de]">
      <div className="flex flex-col pt-20 gap-8 w-full container mx-auto">
        <h1 className="text-4xl text-white md:7xl font-black  leading-none">
          Aproveite 1 mês grátis de Premium
        </h1>
        <p className="text-md text-white md:text-[22px]">
          Depois, pague somente R$ 21,90/mês. Cancele quando quiser.
        </p>
        <div className="flex gap-2">
          <button className="bg-black hover:bg-white text-white text-sm rounded-full px-5 py-4 uppercase font-semibold tracking-widest transition duration-500">
            Comece Agora
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white text-white text-sm rounded-full px-5 py-4 uppercase font-semibold tracking-widest transition duration-500">
            ver planos
          </button>
        </div>
        <p className="pt-3 text-[11px] text-white">
          <span className="border-b-2 border-black-900">Sujeito a Termos e Condições</span>. O mês grátis não está disponível para
          usuários que já experimentaram o Premium.
        </p>
      </div>
    </section>
  )
}
