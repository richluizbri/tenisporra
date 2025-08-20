import { useState } from 'react'
import './app.css'
import suedAlien1 from './assets/tenis-1.avif'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* card 1 */}
          <div className="card">
            <img src={suedAlien1} alt="" />
            <h2>Faded Unissex </h2>
            <p className="desc">projetado para reduzir milissegundos nos tempos de volta. Em seguida, ele se tornou um item essencial do streetwear, visto nas ruas das capitais globais da moda. Sua história está em constante evolução, sendo adotado pelos formadores de tendências e ditadores de ritmo de cada geração.</p>
            <p className="classificacao"> ★ ★ ★ ★ ★(460)</p>
            <p className="preco">R$599,00</p>
            <p className="off">5%</p>
          </div>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
