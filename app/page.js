import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import MusicPlayer from './components/musicplayer/MusicPlayer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/logo.jpg"
        width={1000}
        height={500}
        alt= "logo"
        />
     <h1>Bienvenido a la Grieta del Invocador</h1>
     <button className={styles.button}>
      <Link href="/dashboard">ENTRAR</Link>
     </button>
     <div>
      <MusicPlayer/>
     </div>
    </main>
  )
}
