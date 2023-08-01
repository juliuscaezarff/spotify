interface HeroSectionProps {

}
export function HeroSection(props : HeroSectionProps){
    return(
        <main>
          <div className="flex flex-col justify-center text-center bg-spotify-theme-mobile md:bg-spotify-theme bg-banner-mobile md:bg-banner bg-195% md:bg-175% bg-purple-main text-green-main py-40 px-4">
            <h1 className="text-5xl md:9xl mb-10 font-bold max-w-4xl mx-auto leading-none">Escutar muda tudo</h1>
            <p className="text-md md:text-lg mb-10">Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito</p>
            <a href="#">Obtenha Spotify Free</a>
          </div>
        </main>
    )
}