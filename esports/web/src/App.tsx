//  JSX - Javascript + XML
// componente e propriueade
import { GameBanner } from "./components/GameBanner"
import './styles/main.css';
import { useState,useEffect } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from './assets/logo-nlw-esports.svg';
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Input } from "./components/Form/input";
import { GameController } from "phosphor-react";


interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}
// chamando a API NODE JS
function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
      fetch('http://localhost:3333/games')
      .then (response => response.json())
      .then (data => {
        setGames(data)
      })
  }, [])


  return (
  
  <div className="max-w-[1344.03px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" className="max-w-[285.03px]"/>

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span> está aqui.</h1>
  
  <div className="grid grid-cols-6 gap-6 mt-16">

    {/* retornar lista de games através do */}
    {games.map(game => {
      return(
        <GameBanner 
            key= {game.id} // react encontrar cada jogo e diferencie cada jogo um do outro
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads}/>
      )
    })}
  
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
    <Dialog.Root>
      <CreateAdBanner/>

      <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className='text-3xl text-white font-black'>Publique um Anúncio</Dialog.Title>
            
            
              <form className="mt-8 flex flex-col gap-4">

                  <div className="flex flex-col gap-2">
                      <label htmlFor="game" className="font-semibold">Qual o game?</label>
                      <Input id="game"placeholder="Selecione o game que deseja jogar"  />             
                      </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="name">Seu nome (ou nick name)</label>
                    <Input id="name" placeholder="Como te chamam dentro do game?" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="yearsPlaying"> Joga há quantos anos?</label>
                      <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="discord"> Qual seu discord?</label>
                      <Input id="discord" type="text" placeholder="Usuario#0000" />
                    </div>

                    <div className="flex gap-6">
                     <div className="flex flex-col gap-2">
                        <label htmlFor="weekDays"> Quando costuma jogar?</label>
                        <div className="grid grid-cols-4 gap-2">
                          <button className="w-10 h-10 rounded bg-zinc-900 " title="Domingo">DOM</button>
                          <button className="w-10 h-10 rounded bg-zinc-900 "title="Segunda">SEG</button>
                          <button className="w-10 h-10 rounded bg-zinc-900 "title="Terça">TER</button>
                          <button className="w-10 h-10 rounded bg-zinc-900 "title="Quarta">QUA</button>
                          <button className="w-10 h-10 rounded bg-zinc-900 "title="Quinta">QUI</button>
                          <button className="w-10 h-10 rounded bg-zinc-900 "title="Sexta">SEX</button>
                          <button className="w-10 h-10 rounded bg-zinc-900 "title="Sábado">SAB</button>
                        </div>
                        </div>
                        </div>

                        
                      <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="hourStart"> Qual horário do dia?</label>

                        <div className="grid grid-cols-2 gap-2">
                          <Input id="hourStart"type="time"  placeholder="De"/>
                          <Input id="hourEnd"type="time"  placeholder="Até"/>
                        </div>
                       
                    </div>
                  
                    </div>

                  <div className="mt-2 flex gap-2 text-sm ">
                    <input type="checkbox" />
                      Costumo me conectar ao chat de voz
                  </div>
                  
                  <footer className="mt-4 flex justify-end gap-4">
                    <Dialog.Close and  type="button" className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">Cancelar</Dialog.Close>
                    <button type="submit" className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600">
                      <GameController className="w-6 h-6"/>
                      Encontrar duo
                    </button>
                  </footer>
              </form>

            </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>


  )
}

export default App
