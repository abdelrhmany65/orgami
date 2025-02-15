import styles from "../page.module.css";
import FormContact from '../components/formContact/FormContact';
import Contactgrid from "../components/cards/Contactgrid";
import TopImage from "../utils/topimage/TopImage";

const ContactUs = () => {
  return (
    <div>
      
      <Contactgrid />
      <FormContact />
      
    </div>
  )
}

export default ContactUs