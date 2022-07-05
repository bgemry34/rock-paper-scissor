import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import SendIcon from '@mui/icons-material/Send';
import { Divider, IconButton, TextField, Typography, ButtonBase, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 280;

const images = [
  {
    url: 'https://cdn.jsdelivr.net/gh/aronnax77/whatsdev_tutorials@ef296e2b/images/rock.png',
    title: 'Rock',
    width: '200px',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/aronnax77/whatsdev_tutorials@ef296e2b/images/paper.png',
    title: 'Paper',
    width: '200px',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/aronnax77/whatsdev_tutorials@ef296e2b/images/scissors.png',
    title: 'Scissor',
    width: '200px',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  borderRadius:'50%',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:'50%',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  borderRadius:'50%',
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

function ResponsiveDrawer(props) {

  const playersChatBox = (
    <div>
      <List style={{margin:'0', padding:'0', overflow:'hidden', borderRight:"1px solid rgba(255, 255, 255, 0.5)"}}>
        <div style={{height:"calc(100vh - 55px)"}}>
            <Typography variant={'h5'} style={{color:'rgba(0, 0, 0, 0.5)', marginLeft:'5px', marginTop:'5px'}} >
              Chat room
            </Typography>
            <Divider />
            <div className="chat-box" style={{marginLeft:'5px',height:"calc(100% - 25px)", overflowY:'auto'}}>
                <div style={{marginTop:'10px', padding:'5px'}}>
                  <Typography  style={{textAlign:'center ', fontSize:'0.55em'}}>
                        10:30 pm 
                  </Typography>
                  <Typography variant="body2" style={{fontWeight:'bold', marginBottom:'5px'}}>
                    Player1:
                  </Typography>
                  <Typography style={{fontSize:'0.75em'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque officiis temporibus hic ipsum tenetur sunt similique non sint atque.
                  </Typography>
                </div>
                <div style={{marginTop:'10px', padding:'5px'}}>
                  <Typography  style={{textAlign:'center ', fontSize:'0.55em'}}>
                        10:31 pm 
                  </Typography>
                  <Typography variant="body2" style={{fontWeight:'bold', marginBottom:'5px'}}>
                    Player2:
                  </Typography>
                  <Typography style={{fontSize:'0.75em'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque officiis temporibus hic ipsum tenetur sunt similique non sint atque.
                  </Typography>
                </div>
                <div style={{marginTop:'10px', padding:'5px'}}>
                  <Typography  style={{textAlign:'center ', fontSize:'0.55em'}}>
                        10:30 pm 
                  </Typography>
                  <Typography variant="body2" style={{fontWeight:'bold', marginBottom:'5px'}}>
                    Player1:
                  </Typography>
                  <Typography style={{fontSize:'0.75em'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque officiis temporibus hic ipsum tenetur sunt similique non sint atque.
                  </Typography>
                </div>
                <div style={{marginTop:'10px', padding:'5px'}}>
                  <Typography  style={{textAlign:'center ', fontSize:'0.55em'}}>
                        10:31 pm 
                  </Typography>
                  <Typography variant="body2" style={{fontWeight:'bold', marginBottom:'5px'}}>
                    Player2:
                  </Typography>
                  <Typography style={{fontSize:'0.75em'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque officiis temporibus hic ipsum tenetur sunt similique non sint atque.
                  </Typography>
                </div>
                <div style={{marginTop:'10px', padding:'5px'}}>
                  <Typography  style={{textAlign:'center ', fontSize:'0.55em'}}>
                        10:30 pm 
                  </Typography>
                  <Typography variant="body2" style={{fontWeight:'bold', marginBottom:'5px'}}>
                    Player1:
                  </Typography>
                  <Typography style={{fontSize:'0.75em'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque officiis temporibus hic ipsum tenetur sunt similique non sint atque.
                  </Typography>
                </div>
                <div style={{marginTop:'10px', padding:'5px'}}>
                  <Typography  style={{textAlign:'center ', fontSize:'0.55em'}}>
                        10:31 pm 
                  </Typography>
                  <Typography variant="body2" style={{fontWeight:'bold', marginBottom:'5px'}}>
                    Player2:
                  </Typography>
                  <Typography style={{fontSize:'0.75em'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque officiis temporibus hic ipsum tenetur sunt similique non sint atque.
                  </Typography>
                </div>
            </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'80% 20%'}}>
            <div style={{height:'50px'}}>
                <TextField
                    placeholder='Enter message here...'
                    variant="outlined"
                />
            </div>
            <div style={{height:'50px'}}>
            <IconButton size="large" color="primary" style={{marginTop:'5px'}}>
                <SendIcon />
            </IconButton>
            </div>
        </div>
      </List>
    </div>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {playersChatBox}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div className="score-board" style={{marginBottom:'10px'}}>
          <Grid container>
            <Grid item xs={4}>
            <Typography align="LEFT" variant="h3" style={{color:'rgba(0,0,255,0.5)'}}>
              YOU
            </Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography align="center" variant="h3">
              <span style={{color:'rgba(0,0,255,0.5)'}}>0</span>:<span style={{color:'rgba(255,0,0,0.5)'}}>0</span>
            </Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography align="RIGHT" variant="h3" style={{color:'rgba(255,0,0,0.5)'}}>
              OPPONENT
            </Typography>
            </Grid>
          </Grid>
        </div>
        <div className='opponent-container'>
        <Typography variant="h4" align="center" style={{color:'rgba(255,0,0,0.5)'}}>OPPONENT</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            <div style={{width:'85%', margin:'auto'}}>
            <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
            {images.map((image) => (
              <Grid item xs={4}>
              <ImageButton
              focusRipple
              disabled
              key={image.title}
              style={{
                width: '100px',
                height: '100px',
                borderRadius:'50%',
                display:'block',
                margin:'auto'
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 1,
                    pt: 9.5,
                    fontSize:'0.65em',
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                </Typography>
              </Image>
            </ImageButton>
              </Grid>
            ))}
          </Grid>
            </div>
        </Box>
        </div>
        <div className='you-container'>
        <Typography variant="h4" align="center" style={{color:'rgba(0,0,255,0.5)'}}>YOU</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        <div style={{width:'90%', margin:'auto', marginTop:'10px'}}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
                {images.map((image) => (
                  <Grid item xs={4}>
                  <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                    borderRadius:'50%',
                    display:'block',
                    margin:'auto'
                  }}
                >
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 1,
                        pt: 18,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                    </Typography>
                  </Image>
                </ImageButton>
                  </Grid>
                ))}
              </Grid>
            </div>
        </Box>
        </div>
      </Box>
    </Box>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
