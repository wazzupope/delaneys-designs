import './HomeBody.css'
import Card from './Card.jsx'

function HomeBody() {

  return (
    <>
      <section id='hero'>
        <h2>Custom beaded bracelets and keychains</h2>
        <span>Text for more information</span>
      </section>
      <section id='products'>
        <Card />
      </section>
    </>
  )
}

export default HomeBody