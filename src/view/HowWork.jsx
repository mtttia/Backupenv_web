import * as React from 'react';
import './../style/custom.scss'
import './HowWork.scss'
import Header from '../components/text/Header';
import Subtitle from '../components/text/Subtitle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default class HowWork extends React.Component{
  render() {
    return <div className="h-max">
      <div className="container">
        <Header text="Come funziona" icon={[<LightbulbIcon color="primary" sx={{ fontSize: 40 }} style={{'marginTop': '20px'}} />]}/>
        <p style={{textAlign:'justify'}}>
          Backup env lavora con 2 componenti che scambiano dati tra di lor in maniera automantica per garantire un pacchetto preconfezionato adatto a qualsiasi tipo di utente.<br />
          I componenti sono l'interfaccia grafica ed il programma che esegue i backup ogni volta che c'è nè bisogno.<br />
          Grazie alla collaborazione tra questi due programmi, l'utente si accorgerà solo dell'interfaccia grafica.
        </p>
        <Subtitle text="Interfaccia grafica" />
        <p>
          L'interfaccia grafica è la finestra con la quale l'utente potrà gestire il 100% del backup grazie alla sua collaborazione con l'app che in realtà esegue il backup che viene eseguita in background.  <br />
          Da questa finestra si possono avviare nuovi backup, modificare la configurazione e vedere sempre lo satato dell'app che esegue il backup
        </p>
        <Subtitle text="processo in background" />
        <p>
          Il processo che viene eseguito in background è quello che ha il codice per effettuare il backup, dice all'interfaccia grafica il suo stato ogni volta che sarà necessario in modo che l'utente abbia una visione sempre aggiornata su questo processo che è la vera parte importante dell'app.
        </p>
      </div>
    </div>
  }
}