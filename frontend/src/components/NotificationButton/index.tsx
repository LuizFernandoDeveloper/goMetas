
import icon from '../../assets/img/svg/notification-icon.svg';
import './style.css';

function NotificationButton(){

    return(

      <div className="goMetas-red-btn">

        <img src={icon} alt="Notificar"/>

      </div>

    )
}

export default NotificationButton;