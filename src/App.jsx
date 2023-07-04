import './App.css'

function App() {


  return (
    <div className='app'>
      <h1>Seção de Comentários</h1>
      <div className='inputs'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div className='inputs'>
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
      </div>
      <button>Enviar comentário</button>
      <hr />
      <div>
        <p>Seja o primeiro a comentar!</p>
      </div>
    </div>
  )
}

export default App
