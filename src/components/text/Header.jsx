import { PowerOffSharp } from '@mui/icons-material';
import './Header.scss';

export default function Header(props){
    return (<div>
        <div className="row header-row">
            <div className="col-10">
                <p className="header">{props.text}</p>
            </div>
            <div className="col-2">
                {props.icon}
            </div>
        </div>
        <hr className="header-hr" />
    </div>)
}
