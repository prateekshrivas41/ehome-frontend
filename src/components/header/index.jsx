import logo from '../../assets/ehomequote-white-logo.png'
import './header.css'
import Button from "@mui/material/Button";
import CallIcon from '@mui/icons-material/Call';
import { colors } from '../../constants/Colors';
const Header = ({contact}) => {
  return (
    <header id='header'>
      <img src={logo} width={115} />
      <div id='call'>
        <Button href={`tel:${contact || "+1 321 485 8931"}`} variant="contained" color="success"
          style={{ backgroundColor: colors.primaryGreen }} startIcon={<CallIcon />}>
        {contact || "+1 321 485 8931"}
        </Button>
      </div>
    </header>
  )
};

export { Header };
