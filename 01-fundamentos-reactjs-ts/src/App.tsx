import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';

import styles from './App.module.css';

// author: { avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[]  = [
  {
    id: 1,
    author: { 
      avatarUrl: "https://github.com/jieff.png",
      name: "Jieff Cavalcanti",
      role: "Back End Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-08-30 17:30:00'),
  },
  {
    id: 2,
    author: { 
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQGFfb9e4OReAw/profile-displayphoto-shrink_800_800/0/1684785985332?e=1698883200&v=beta&t=QPJBe6gJcQDi1-INObOSFCOfvK5FYLmoJ1xqGoa7a2E",
      name: "Pablo Moraes dos Santos",
      role: "Suporte Senior"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-08-28 17:30:00'),
  },
];

export function App() {

  return (
    <div>
      <Header/>

     <div className={styles.wrapper}>

      <Sidebar/>

      <main>
        { posts.map(post => {
          return (
            <Post 
              key={post.id}
              post={post}
            />
          );
        })}
      </main>
     </div>
    </div>
  )
}



