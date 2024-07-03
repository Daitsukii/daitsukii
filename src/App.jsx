import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import neuron from './assets/images/neuron.gif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-xs hover:text-9xl font-serif hover:font-bold transition-all text-white/0 hover:text-white">
        Hello chester!
        <p className="text-base font-sans text-white font-normal">
          Miss ko na siya.
        </p>
      </h1> */}
      {/* <div className="flex flex-col justify-between space-y-5 p-6 bg-black rounded-xl">
        <div className="p-10 bg-red-600 rounded-full"></div>
        <div className="p-10 bg-yellow-400 rounded-full"></div>
        <div className="p-10 bg-green-400 rounded-full"></div>
      </div> */}
        <h1 className = "animate-rainbow-text text-center [font-stretch:condensed] font-light w-[400px] text-7xl bg-black/20 m-auto rounded-xl p-3 hover:border-[3px] transition-all">
          OSRIC PAMAN
        </h1>
        <img src={neuron} alt="Last brain cell" className = "animate-rainbow-text rounded-xl hover:border-[3px] transition-all m-auto mt-5"/>
        <caption className="block font-extralight animate-rainbow-text mb-5">This image represents the remaining population of neuron(s) in my brain</caption>
        <div className="flex flex-row justify-between space-x-5">
          <div className="animate-rainbow-text block h-full w-full bg-black/20 rounded-xl p-3 hover:border-[3px] transition-all">
            <h2 className="animate-rainbow-text text-center [font-stretch:condensed] font-bold text-3xl mb-3">
              FUN FACT
            </h2>
            <p className="animate-rainbow-text text-justify font-light [font-stretch:semi-condensed] text-xl">
              i got a 1.25 in math because of sir trex (i always get 1.00)
            </p>
            <p className="animate-rainbow-text-nodelay text-center font-bold text-xl mt-5">
              miss ko na siya
            </p>
          </div>
          <div className="animate-rainbow-text block h-full w-full bg-black/20 rounded-xl p-3 hover:border-[3px] transition-all">
            <h2 className="animate-rainbow-text text-center [font-stretch:condensed] font-bold text-3xl mb-3">
              HOBBIES
            </h2>
            <p className="animate-rainbow-text text-justify font-light [font-stretch:semi-condensed] text-xl">
              music production, roblox game dev, japanese こんにちは
            </p>
            <p className="animate-rainbow-text-nodelay text-center font-bold text-xl mt-5">
              0.01平方メートルの空間をファンクショナルな家に変えましょう。リトル・ジョンさんは10年に働いていました。自分の家のために1億円を貯めりました。それでも、買えた空間は0.01平方メートルだけです。だから、このようにレインストールしました。最初に、ギャルバナイズド・スクウェアー・スティールを使いますから外にフレームを作ります。おばさんからネジを借りれます。エコ・フレンドリー・ウード・ヴェニアーとフレームをかぶせります。
            </p>
          </div>
          <div className="animate-rainbow-text block h-full w-full bg-black/20 rounded-xl p-3 hover:border-[3px] transition-all">
            <h2 className="animate-rainbow-text text-center [font-stretch:condensed] font-bold text-3xl mb-3">
              INTERESTS
            </h2>
            <p className="animate-rainbow-text text-justify font-light [font-stretch:semi-condensed] text-xl">
              game dev, astronomy
              <span className="animate-rainbow-text-nodelay font-bold">, siya</span>
            </p>
          </div>
        </div>
      <body className = "animate-rainbow-bg h-screen w-screen top-0 left-0 fixed block -z-10">
      </body>
    </>
  )
}

export default App
