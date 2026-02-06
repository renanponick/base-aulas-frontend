import './App.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import List from './componets/List'
import Images from './componets/Images'
import Form from './componets/Form'

function App() {
  return (
    <>
      <Header />
      <main>
        <List titulo="Batata" exibirPrimeiraLista={true} />
        <List titulo="Aipim"/>
        <Images />
        <Form />
      </main>
      {/* <!-- Rodapé --> */}
      <Footer />
    </>
  )
}

export default App
