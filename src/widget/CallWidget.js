import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from './Cancelbutton .png';
import CallIcon from './call.png';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  root: {
  },
  dialogTitle:{
    backgroundColor:'#000000',
    width:'300px',
    textAlign : 'center',
    marginLeft:'10px',
    marginRight:'25px',
    marginTop:'2px',
    borderTopRightRadius:'20px',
    borderTopLeftRadius:'20px',
  },
  dialog:{
    color:'white',
    fontWeight:'bold',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes } = props;
  return (
    <MuiDialogTitle  className={classes.dialogTitle} >
      <Typography className={classes.dialog} variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const contentStyles = (theme) => ({
  dialogContent:{
    textAlign : 'center',
    backgroundColor:'black',
    paddingBottom: '30px',
    cursor:'pointer',
    marginLeft:'10px',
    marginRight:'25px',
    borderBottomRightRadius:'20px',
    borderBottomLeftRadius:'20px',
    
  },
  dialog:{
    backgroundColor:'#AFEF8A',
    borderRadius:'20px',
    color:'green',
    fontWeight:'bold',
  },
  CallIcon:{
    height:'20px',
    width:'20px',
    marginTop:'12px',
  }
  
}) 

const DialogContent = withStyles(contentStyles)((props) => {
  const { children, classes,  } = props;
  return (
    <MuiDialogContent  className={classes.dialogContent} >
      <Typography className={classes.dialog} variant="h6">
        <img src={CallIcon} className={classes.CallIcon} alt="callIcon"/> {children}</Typography>
    </MuiDialogContent>
  );
});

const actionsstyles = (theme) => ({
  cancelButton:{
    textAlign: 'right',
    height:'50px',
    width:'50px'
  }  
}) 


const DialogActions = withStyles(actionsstyles)((props) => {
  const {  classes, onClose,  } = props;
  return (
    <MuiDialogActions  className={classes.dialogActions} >
      {onClose ? null :
      (         
      <IconButton aria-label="close"  onClick={onClose}>
      <img src={CancelIcon} className={classes.cancelButton} alt="cancel button"/>
     </IconButton>
    )}
    </MuiDialogActions>
  );
});


export default function CallWidget() {
  const [open, setOpen] = React.useState(false);
  const [nasaData,  setData] = React.useState({ });

  async function fetchData() {
    const res = await fetch("https://codifyinditest.com/script_test/api-test/")
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  const handleClickOpen = () => {
    setOpen(true);
    console.log('clicked true');
  };
  const handleClose = () => {
    console.log('clicked true');
    setOpen(false);
  };

  const { labels, phone_number } = nasaData['script test'] || {};

  const onValue = nasaData['script test'];
  console.log('apple', onValue);

    

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Call Us Now
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {labels}
        </DialogTitle>
        <DialogContent id="customized-dialog-content" >
            {phone_number}
        </DialogContent>
        <DialogActions id="customized-dialog-content">
          <Button autoFocus onClick={handleClose} color="primary">
            {CancelIcon}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

