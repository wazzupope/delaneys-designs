import './HomeBody.css'
import Card from './Card.jsx'

function HomeBody() {

  return (
    <main id='body'>
      <section id='hero'>
        <h2>Custom beaded bracelets and keychains</h2>
        <span>Text for more information</span>
      </section>
      <section id='products'>
        <Card />
      </section>
    </main>
  )
}

export default HomeBody