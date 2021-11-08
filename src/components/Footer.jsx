import Link from '@mui/material/Link';
import './Footer.scss'

export default function Footer(props){
    return (
        <div className="footerDiv">
            Backup_env | <Link href="/home">Home</Link>-<Link href="/howWork">Come funziona</Link>-<Link href="/tecnology">Tecnologie</Link> | <Link href="https://github.com/mtttia/backup_env" target="_blank">GitHub</Link> | made with React
        </div>
    )
}