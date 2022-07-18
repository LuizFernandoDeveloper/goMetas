
import axios from 'axios';
import icon from '../../assets/img/svg/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './style.css';
 
type Props ={

  saleId:number;


};
function handleClick(id:number){

  axios(`${BASE_URL}/sales/${id}/notification`);

};

function NotificationButton({saleId}: Props){
   


    return(

      <div className="goMetas-red-btn" onClick={async () =>  await handleClick(saleId)}>

        <img src={icon} alt="Notificar"/>

      </div>

    )
}

export default NotificationButton;