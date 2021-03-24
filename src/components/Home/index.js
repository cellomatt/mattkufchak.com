import './Home.css'
import image from "./bw.jpg"

export default function Home() {
  return (
    <>
    <h1 className="title_main">Matt Kufchak</h1>
    <img src={image} className="home__image" alt="Matt Kufchak smiling"></img>
    </>
  )
}
