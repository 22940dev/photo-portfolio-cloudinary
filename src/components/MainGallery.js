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
	},
	
	gutter: {
		marginLeft: 17,
		"&:first-child": {
		  marginLeft: 0
		},
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
		width: 1500,
    },
	image_row: {
		[theme.breakpoints.down('md')]: {
			marginBottom: -20,
		}
	},
	
	image: {
		maxWidth: "100%",
		maxHeight: "100%",
	},

	thumbnail : {
		width: 360,
		[theme.breakpoints.down('md')]: { //md is 960px
			marginBottom: 20,
			marginLeft: 0,
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
                        <Grid item container justifyContent="center" className={classes.image_row}>
							<Grid className={classes.gutter} onClick={() => this.handleOpen(0)}>
                          		<Image publicId={mainImages[0].url} alt={mainImages[0].alt} className={classes.thumbnail}/>
							</Grid>							

							<Grid className={classes.gutter} onClick={() => this.handleOpen(1)}>
							  	<Image publicId={mainImages[1].url} alt={mainImages[1].alt} className={classes.thumbnail}/>
							</Grid>

							<Grid className={classes.gutter} onClick={() => this.handleOpen(2)}>
							  	<Image publicId={mainImages[2].url} alt={mainImages[2].alt} className={classes.thumbnail}/>
							</Grid>
                        </Grid>  
					

                        <Grid item container justifyContent="center" className={classes.image_row}>

						<Grid className={classes.gutter} onClick={() => this.handleOpen(3)}>
                          		<Image publicId={mainImages[3].url} alt={mainImages[3].alt} className={classes.thumbnail}/>
							</Grid>

							<Grid className={classes.gutter} onClick={() => this.handleOpen(4)}>
							  	<Image publicId={mainImages[4].url} alt={mainImages[4].alt} className={classes.thumbnail}/>
							</Grid>

							<Grid className={classes.gutter} onClick={() => this.handleOpen(5)}>
							  	<Image publicId={mainImages[5].url} alt={mainImages[5].alt} className={classes.thumbnail}/>
							</Grid> 

                        </Grid>  
						<Grid item container justifyContent="center" className={classes.image_row}>

						<Grid className={classes.gutter} onClick={() => this.handleOpen(6)}>
                          		<Image publicId={mainImages[6].url} alt={mainImages[6].alt} className={classes.thumbnail}/>
							</Grid>

							<Grid className={classes.gutter} onClick={() => this.handleOpen(7)}>
							  	<Image publicId={mainImages[7].url} alt={mainImages[7].alt} className={classes.thumbnail}/>
							</Grid>

							<Grid className={classes.gutter} onClick={() => this.handleOpen(8)}>
							  	<Image publicId={mainImages[8].url} alt={mainImages[8].alt} className={classes.thumbnail}/>
							</Grid> 

                        </Grid>  
						<Grid item container justifyContent="center" className={classes.image_row}>

						<Grid className={classes.gutter} onClick={() => this.handleOpen(9)}>
                          		<Image publicId={mainImages[9].url} alt={mainImages[9].alt} className={classes.thumbnail}/>
							</Grid>

							<Grid className={classes.gutter} onClick={() => this.handleOpen(10)}>
							  	<Image publicId={mainImages[10].url} alt={mainImages[10].alt} className={classes.thumbnail}/>
							</Grid>

							<Grid className={classes.gutter} onClick={() => this.handleOpen(11)}>
							  	<Image publicId={mainImages[11].url} alt={mainImages[11].alt} className={classes.thumbnail}/>
							</Grid> 
                        </Grid>  

						<Grid item container justifyContent="center" className={classes.image_row}>

						<Grid className={classes.gutter} onClick={() => this.handleOpen(12)}>
                          		<Image publicId={mainImages[12].url} alt={mainImages[12].alt} className={classes.thumbnail}/>
							</Grid>
					
                        </Grid>  

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

// {[...Array(3)].map((x, i) =>
							
// 	<Grid className={classes.gutter} onClick={() => this.handleOpen()}>

// 		<Image publicId={mainImages[i].url} alt={mainImages[i].alt} className={classes.thumbnail}/>
// 	</Grid>
	
// )}



// Loop through images 
//
// {mainImages && mainImages.map((image, index) => {
//   return(
//     <div key={index}>
//       <LazyLoad 
//         width={400}>
//           <Grid container item xs={12} spacing={3}>
//             <Image publicId={image.url} width="400" height="auto"></Image>
//           </Grid>
//       </LazyLoad>
//     </div>
//   )
// })}

Body.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Body);

