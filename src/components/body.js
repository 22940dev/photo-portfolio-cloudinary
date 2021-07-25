import React, {Component} from "react";
import {Image, CloudinaryContext } from "cloudinary-react";

// import lightGallery from "lightgallery";

//Grid 
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';


// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import lgThumbnail from 'lightgallery/plugins/thumbnail';

import LazyLoad from 'react-lazy-load';


import {mainImages} from './data.js';
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const useStyles = theme => ({
	root: {

	  padding: '0 30px',
	},
	paper: {
		height: 400,
		width: 268,
		outline: "1px dashed orange"
  
	  },
	  gutter: {
		marginLeft: 20,
		"&:first-child": {
		  marginLeft: 0
		},
		[theme.breakpoints.down('md')]: {
			marginBottom: 20,
		},
	  }
	
  });

  
class Body extends Component {
      render() {
        const { classes } = this.props;
          
          return (
            
            <React.Fragment>
                <CloudinaryContext cloudName="philipscloud">
                    <Grid container direction={"row"} justifyContent="center" className={classes.root} spacing={2}>
                        <Grid item container justifyContent="center">

							<Grid className={classes.gutter}>
                          		<Image publicId={mainImages[0].url} width={400} alt={mainImages[0].alt}/>
							</Grid>

							<Grid className={classes.gutter}>
							  	<Image publicId={mainImages[1].url} width={400} alt={mainImages[1].alt}/>
							</Grid>

					  		<Grid className={classes.gutter}>
							  	<Image publicId={mainImages[2].url} width={400} alt={mainImages[2].alt}/>
							</Grid> 

                        </Grid>  

                        <Grid item container justifyContent="center">

							<Grid className={classes.gutter}>
                          		<Image publicId={mainImages[3].url} width={400} alt={mainImages[3].alt}/>
							</Grid>

							<Grid className={classes.gutter}>
							  	<Image publicId={mainImages[4].url} width={400} alt={mainImages[4].alt}/>
							</Grid>

					  		<Grid className={classes.gutter}>
							  	<Image publicId={mainImages[5].url} width={400} alt={mainImages[5].alt}/>
							</Grid> 

                        </Grid>  
						<Grid item container justifyContent="center">

							<Grid className={classes.gutter}>
                          		<Image publicId={mainImages[6].url} width={400} alt={mainImages[6].alt}/>
							</Grid>

							<Grid className={classes.gutter}>
							  	<Image publicId={mainImages[7].url} width={400} alt={mainImages[7].alt}/>
							</Grid>

					  		<Grid className={classes.gutter}>
							  	<Image publicId={mainImages[8].url} width={400} alt={mainImages[8].alt}/>
							</Grid> 

                        </Grid>  
						<Grid item container justifyContent="center">

							<Grid className={classes.gutter}>
                          		<Image publicId={mainImages[9].url} width={400} alt={mainImages[9].alt}/>
							</Grid>

							<Grid className={classes.gutter}>
							  	<Image publicId={mainImages[10].url} width={400} alt={mainImages[10].alt}/>
							</Grid>

					  		<Grid className={classes.gutter}>
							  	<Image publicId={mainImages[11].url} width={400} alt={mainImages[11].alt}/>
							</Grid> 
                        </Grid>  

						<Grid item container justifyContent="center">

							<Grid className={classes.gutter}>
                          		<Image publicId={mainImages[12].url} width={400} alt={mainImages[12].alt}/>
							</Grid>

						

					
                        </Grid>  

                    </Grid>
                </CloudinaryContext>
            </React.Fragment>
        )
    }
}

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

