//  JSX - Javascript + XML
// componente e propriueade
import { MagnifyingGlassPlus } from "phosphor-react";
import { GameBanner } from "./components/GameBanner"
import './styles/main.css';


import logoImg from './assets/logo-nlw-esports.svg';
import { CreateAdBanner } from "./components/CreateAdBanner";
;

function App() {
  return (
  
  <div className="max-w-[1344.03px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" className="max-w-[285.03px]"/>

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span> está aqui.</h1>
  
  <div className="grid grid-cols-6 gap-6 mt-16">
    
  <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5}/>
  <GameBanner bannerUrl="/game-2.png" title="Dota 2" adsCount={5}/>
  <GameBanner bannerUrl="/game-3.png" title="CS:GO" adsCount={5}/>
  <GameBanner bannerUrl="/game-4.png" title="Apex Legends" adsCount={5}/>
  <GameBanner bannerUrl="/game-7.png" title="World " adsCount={5}/>
  <GameBanner bannerUrl="/game-6.png" title="League of Legends" adsCount={5}/>

    
{/*      <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-6.png" alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block" >Fortnite</strong>
      <span className="text-zinc-300 text-sm-14 block "> 4 anúncios</span>
    </div>
    </a>

    <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-3.png" alt="" />
      
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block" >Counter Strike</strong>
      <span className="text-zinc-300 text-sm-14 block "> 4 anúncios</span>
    </div>
    </a>
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-7.png" alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block" >World of Warcraft</strong>
      <span className="text-zinc-300 text-sm-14 block "> 4 anúncios</span>
    </div>
    </a>
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-4.png" alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block" >Apex Legends</strong>
      <span className="text-zinc-300 text-sm-14 block "> 4 anúncios</span>
    </div>
    </a>
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-2.png" alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block" >Dota 2</strong>
      <span className="text-zinc-300 text-sm-14 block "> 4 anúncios</span>
    </div>
    </a>  */}
  </div>  

    <CreateAdBanner/>

  </div>


  )
}

export default App
