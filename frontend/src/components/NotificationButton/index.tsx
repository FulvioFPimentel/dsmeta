import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function hanbleClick(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        toast.info("SMS enviado com sucesso!");
    })
}

const NotificationButton = ({saleId}: Props) => {

    return (
       <div className="dsmeta-red-btn" onClick={() => hanbleClick(saleId)}>
            <img src={icon} alt="Notificar" />
       </div>
    )

}

export default NotificationButton;