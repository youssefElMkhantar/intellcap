import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import itemData from './itemData';
import Button from '@material-ui/core/Button';
import { PlayCircleFilledWhite } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import GoogleMap from '../GoogleMap/GoogleMap';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.default,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  home: {
      position : 'absolute',
      bottom : '20px',
      width: '80%',
      left: '150px'
  },
  homeTop: {
        position: 'absolute',
        top: '60px',
        width: '100%',
        color: 'red',
        fontStyle: 'italic'
  },
  imageListItem: {
        width: '100px'
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.homeTop}><br/>
         <h1>welcome to easydeal</h1>
      </div>
      <GoogleMap/>
      <div className={classes.home}>
            <div className={classes.root}>
                  <ImageList className={classes.imageList} cols={2.5}>
                  {itemData.map((item) => (
                  <div className={classes.imageListItem}>
                     <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                        title={item.title}
                        classes={{
                        root: classes.titleBar,
                        title: classes.title,
                        }}
                        actionIcon={
                        <IconButton aria-label={`star ${item.title}`}>
                              <Link to={`/products/${item.title}`}><Button style={{color: 'white'}}>Click me</Button></Link>
                        </IconButton>
                        }
                        />
                      </ImageListItem>   
                  </div>
                  ))}
                  </ImageList>
            </div>   
      </div>   
    </div>  
  );
}
