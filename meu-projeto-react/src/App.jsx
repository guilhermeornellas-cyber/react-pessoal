import youtube from './assets/youtube.png'

export default function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>🚀 Meu Projeto React Funcionou!</h1>
      <img src={youtube} alt="Logo do YouTube" style={{ width: '200px', height: 'auto' }} />
      <p>Agora você tem uma tela limpa para começar a construir seu aplicativo.</p>
    </div>
  )
}