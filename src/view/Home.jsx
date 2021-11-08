import * as React from 'react';
import './../style/custom.scss'
import './home.scss'
import ICON from './../asset/img/BackupEnvOnlyIconIconInvert.png'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { download } from '../util';
import Lock from './../asset/img/lock.png'
import Gui from './../asset/img/gui.png'
import MyCard from '../components/MyCard';

export default class Home extends React.Component{

  render() {
    return <div className="home h-max">
      <div className="container">
        <Welcome />
        <div className="spacer-vertical"></div>
        <Security />
        <div className="spacer-vertical"></div>
        <Simple />
        <div className="spacer-vertical"></div>
      </div>
    </div>
  }
}

function Welcome(props) {
  return<div className="row home-section-first">
    <div className="col-md-6 order-1 order-md-0">
      <div className="home-style-write">
        BACKUP<br/>ENV
      </div>
      <Button variant="contained" color="primary" onClick={ download } startIcon={<DownloadIcon />}>
        Download
      </Button>
      <div className='spacer'></div>
      <Button variant="outlined" color="primary" component="a" href="/howWork" startIcon={<LightbulbIcon />}>
        Come funziona
      </Button>
    </div>
    <div className="col-md-6 order-md-1 order-0">
      <img src={ICON} alt='icon' className='icon'/>
    </div>
  </div>
}

function Security(props) {
  return <div className="row">
    <div className="col-md-4">
      <img src={Lock} className='par-icon' alt='lock icon' />
    </div>
    <div className="col-md-8">
      <MyCard title="Sicurezza" text={["Il codice di quest'app è open source, può quindi essere letto da chiunque.",<br/>, "L'app non trasmette nessun dato ad applicazioni di terze parti, questo è confermato dal funzionamento dell'app anche in assenza di connessione ad internet.",<br/>,"Ogni volta che l'app andrà in errore per qualsiasi motivo, anche ad app chiusa l'utente verrà avvisato attraverso una finestra che spiega l'errore ed il come sistemarlo"]} />
    </div>
  </div>
}

function Simple(props) {
  return <div className="row">
    <div className="col-md-4 order-1">
      <img src={Gui} className='icon' alt='Gui interface' />
    </div>
    <div className="col-md-8 order-0">
      <MyCard title="Semplice ed Intuitiva" text={["La configurazione del backup è chiara semplice e soprattutto guidata, viene chiesta appena aperta l'app e potrà essere modificata in qualsiasi momento",<br/>, "L'interfaccia dell'app è semplice e minimale, con una barra di stato che dice a primo impatto come va coi backup",<br/>,"La gestione degli errori è guidata, ovvero ogni volta che si verifica un errore, l'utente verrà avvisato e verrà detto come risolverlo"]} />
    </div>
  </div>
}
