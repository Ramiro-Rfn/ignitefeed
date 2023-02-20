import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './styles/App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Ramiro-Rfn.png',
      name: 'Ramiro Nzau',
      role: 'Web developer'
    },

    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    
    publishedAt: new Date('2023-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/misaellopes01.png',
      name: 'Misael Lopes',
      role: 'Back-end developer'
    },

    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Queria mostrar para vocês aqui o meu progresso no estudo de testes unitário no react 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    
    publishedAt: new Date('2023-09-03 20:00:00'),
  }
]

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
    
        <main>
          {posts.map((post)=>{
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
