import logo from '../../assets/ehomequote-white-logo.png'
import './header.css'
import Button from "@mui/material/Button";
import CallIcon from '@mui/icons-material/Call';
import { colors } from '../../constants/Colors';
const Header = () => {
  return (
    <header id='header'>
      <img src={logo} width={115} />
      <div id='call'>
        <Button href="tel:+13214858931" variant="contained" color="success"
          style={{ backgroundColor: colors.primaryGreen }} startIcon={<CallIcon />}>
          +13 214858931
        </Button>
      </div>
    </header>
  )
};

export { Header };
