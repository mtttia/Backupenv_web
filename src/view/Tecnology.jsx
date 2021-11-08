import * as React from 'react';
import './../style/custom.scss'
import './Tecnology.scss'
import Header from '../components/text/Header';
import Subtitle from '../components/text/Subtitle';
import BiotechIcon from '@mui/icons-material/Biotech';
import Link from '@mui/material/Link';

export default class Tecnology extends React.Component{
  render() {
    return <div className="h-max">
      <div className="container">
        <Header text="Teconologie utilizzate" icon={[<BiotechIcon color="primary" sx={{ fontSize: 40 }} style={{'marginTop': '20px'}} />]} />
        <p>
          Per creare quest'app sono state utilizzate diverse tecnologie tra le quali la più importante e centrale è <Link href="https://www.electronjs.org/" >Electron</Link>
        </p>
        <Subtitle text="Electron" />
        <p>
          &Egrave; il cuore dell'app, consiste in un framework che permette di create applicazioni cross-platform con le tecnologie del web unendo Nodejs e Chromium
        </p>
        <Subtitle text="Electron-forge" />
        <p>
          Preconfigura il framework electron con valori di default per rendere più veloce lo sviluppo dell'app
        </p>
        <Subtitle text="Bootstrap" />
        <p>
          Bootstrap è un framework css che permette una gestione della grafica molto semplice
        </p>
        <Subtitle text="Node-cron" />
        <p>
          Pacchetto npm che permette di eseguire script regolarmente come fossero cron-job in ambito linux
        </p>
      </div>
    </div>
  }
}