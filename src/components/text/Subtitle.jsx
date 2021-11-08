import './Subtitle.scss';

export default function Subtitle(props){
    return (
        <div>
            <p className="subtitle">{props.text}</p>
        </div>
    )
}