import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './styles/App.module.css';
function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          main
        </main>
      </div>
    </div>
  )
}

export default App
