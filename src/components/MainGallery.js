import React, {Component} from "react";
import {Image, CloudinaryContext } from "cloudinary-react";

// import lightGallery from "lightgallery";

//Material-ui 
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import {Paper} from '@material-ui/core/Paper';
import PropTypes from 'prop-types';


// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import lgThumbnail from 'lightgallery/plugins/thumbnail';

import LazyLoad from 'react-lazy-load';


import {mainImages} from './data.js';


import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";


import LightBox from "./LightBox.js";



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
	root: {
		padding: '0 30px',
		"&:first-child": {
			marginLeft: 0
		  },
		[theme.breakpoints.down('md')]: {
			padding: '0 0px',
		},
		maxWidth: "100vw",
	},

	breakpoints: {
		values: {
			desktop: 1280,
		}
	},
	
	gutter: {
		marginLeft: 17,
		marginBottom: 17,
		[theme.breakpoints.down('md')]: { //md is 960px
			marginBottom: 0,
			marginLeft: 0,
		},
	},
	
	modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
	paper: {
        backgroundColor: theme.palette.background.paper,
		opacity: "100%",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
		width: "65%",
		[theme.breakpoints.down('sm')]: {
			width: "100%",
		},
		[theme.breakpoints.down('xs')]: {
			width: "100%",
		}
    },
	image_row: {
		[theme.breakpoints.down('md')]: {
			marginBottom: -20,
			marginRight: 0,
			marginLeft: 0,
		}
	},
	
	image: {
		maxWidth: "100%",
		maxHeight: "100%",
	},

	thumbnail : {
		[theme.breakpoints.down('xl')]: {
			width: 500,
			marginBottom: 0,
			marginLeft: 0,
		},
		[theme.breakpoints.down('desktop')]: {
			width: 400,
			marginBottom: 20,
			marginLeft: 20,
		},
		[theme.breakpoints.down('md')]: { //md is 960px
			marginBottom: 20,
			marginLeft: 0,
		},
		[theme.breakpoints.down('sm')]: {
			width: 360,
		},
	}
  });

  
class Body extends Component {
    constructor() {
		super();
		this.state = {
			open: false,
			index: 0,
		}
	}
	
	handleOpen = (i) => {
		console.log("Open: " + i);
		this.changeIndex(i)
		this.setState({ open: true });
	}

	handleClose = () => {
		console.log("Close")
		this.setState({ open: false });
	}

	changeIndex = (i) => {
		this.setState({index: i})
	}

	render() {
        const { classes } = this.props;
	
        return (    
            <React.Fragment>
                <CloudinaryContext cloudName="philipscloud">
                    <Grid container direction={"row"} justifyContent="center" className={classes.root} spacing={2}>
                       
						{mainImages.map((image, index) => { 
							return (
								<Grid className={classes.gutter} onClick={() => this.handleOpen(index)}> 
									<Image publicId={image.url} alt={image.alt} className={classes.thumbnail}></Image>
								</Grid>
							);
						})}
                    </Grid>

					<Modal
						className={classes.modal}
						open={this.state.open}
						onClose={this.handleClose}
					>
						<div className={classes.paper}>
							<Image publicId={mainImages[this.state.index].url} alt={mainImages[this.state.index].alt} className={classes.image}/>	
						</div>
					</Modal>
                </CloudinaryContext>
            </React.Fragment>
        )
    }
}

Body.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Body);

