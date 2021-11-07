import './MyCard.scss'

export default function MyCard(props) {
  return <div className='mc-back'>
    <h1 className='mc-title'>{ props.title }</h1>
    <hr className='mc-hr' />
    <p className="mc-text">{props.text}</p>
  </div>
}