import './App.css'
import { Layout } from './components/layout/Layout'
import { Top } from './components/pages/Top'

function App() {
  return (
      <Layout header={<h1>AAA</h1>} body={<Top></Top>}></Layout>
  )
}

export default App
