import { Header } from "./components/Header";

import styles from './styles/App.module.css';
function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className={styles.wrapper}>
        <aside></aside>
        <main>
          
        </main>
      </div>
    </div>
  )
}

export default App
