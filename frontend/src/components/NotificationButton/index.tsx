
import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/svg/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './style.css';
 
type Props = {

  saleId:number;
}

function handleClick(id:number): void{

  axios(`${BASE_URL}/sales/${id}/notification`)
   .then(response => {
    
      toast.info("SMS enviado com sucesso");

   });

}

function NotificationButton({saleId}: Props){
   


    return(

      <div className="goMetas-red-btn" onClick={async () =>  await handleClick(saleId)}>

        <img src={icon} alt="Notificar"/>

      </div>

    )
}

export default NotificationButton;