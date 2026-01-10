import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import "./benefit.css"
import white_logo from "../../assets/ehomequote-white-logo.png"
import Button from "@mui/material/Button";
const Benefits = ({ data, imageSrc }) => {

  return (
    <div className="benefit-top">
      <div className="Second-Sec-Benefit">
        <div className="benefits-list">
          <div className="blue-back">
            <img src={white_logo} width={160} height={80} />
            <h2>
              Our Result Speak<br />
              For Themselves!
            </h2>
          </div>
          <List>
            {data.map((item, index) => {
              const { line } = item;
              return (
                <ListItem key={item.id} disablePadding style={{ margin: '10px 0' }}>
                  <ListItemIcon>
                    <LibraryAddCheckIcon sx={{ color: "#82ce50" }} />
                  </ListItemIcon>
                  <ListItemText primary={line} sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '18px', // Custom font size
                      lineHeight: 1.25,
                    }
                  }} />
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className="benefit-image">
          <img src={imageSrc} width={'100%'} height={'100%'} style={{ borderRadius: 10 }} />
          <div className="benefit-text-style" >
            Our Stunning results speaks for itself
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#5352C9',
              fontFamily: 'Poppins',
              fontSize: "14px",
              textTransform: 'capitalize'
            }}
            id="main-btn"
          >
            Hire Experts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
