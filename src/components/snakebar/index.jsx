import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
    return 
}

export default function TransitionsSnackbar() {
    const [state, setState] = React.useState({
        open: false,
        Transition: Slide,
    });

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return (
        <div>
            <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message="I love snacks"
                key={state.Transition.name}
                autoHideDuration={1200}
            />
        </div>
    );
}