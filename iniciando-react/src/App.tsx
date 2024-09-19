import { useState } from "react";
import { Exemplo } from "./components/Exemplo"

import './App.css';                      //posso estilizar usando o css

function App() {
  const [exemplos, setExemplos] = useState<string[]>([
    'Exemplo 1',
    'Exemplo 2',
    'Exemplo 3',
    'Exemplo 4',
  ])

  function createExemplo() {
    setExemplos([...exemplos, 'Exemplo 5'])         //o botao so vai adicionar Exemplos 5
  }

  return (
    <div>
      {exemplos.map(exemplos => {
        return <Exemplo text={exemplos} />
      })}

      <button 
        onClick={createExemplo}
        style={{
          backgroundColor: '#8257e6',
          border: 0,                                //posso estilizar usando css in js
          padding: '6px 12px',
          color:'#FFF'
        }}
      >
        Adicionar exemplo
      </button>
    </div>
  );
}

export default App
