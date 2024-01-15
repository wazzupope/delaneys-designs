import './Card.css'

function Card() {

  return (
    <>
      <article className='card'>
        <img className='card-img'></img>
        <h3 className='card-title'>Product Title</h3>
        <h3 className='card-price'>Product Price</h3>
        <p className='card-description'>This product is amazing!</p>
      </article>
    </>
  )
}

export default Card