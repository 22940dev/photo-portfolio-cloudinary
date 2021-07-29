import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Image, CloudinaryContext } from "cloudinary-react";
import {mainImages} from './data.js';


function getModalStyle() {
    const top = 50;
    const left = 50 ;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = theme => ({
	modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
});


class LightBox extends Component {
  
    state = {
		open: false,
	};
	
	handleOpen = (index) => {
		console.log("Open: " + index);
		this.setState({ open: true });
	}

	handleClose = () => {
		console.log("Close")
		this.setState({ open: false });
	}


 

    render() {
        const { classes } = this.props;

        return (
            <Modal
                className={classes.modal}
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div className={classes.paper}>
                    <Image publicId={mainImages[0].url} alt={mainImages[0].alt} className={classes.image}/>	
                </div>
            </Modal>

        )
    }
}

export default withStyles(useStyles)(LightBox);
