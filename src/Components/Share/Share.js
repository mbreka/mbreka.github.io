import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import clsx from 'clsx';

import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { getRules } from 'axe-core';
import Snackbar from '@material-ui/core/Snackbar';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles({
  root: {
    marginBottom: '1rem',
  }
});

const Share = forwardRef((props, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      showAlert() {
        handleClickOpen();
      }
    }),
  );
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getURL = () => {
    return (window.location.href+'/'+props.id).replace('products', 'product');
  }
  

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>

        <DialogContent dividers>
          <Typography variant="h5" className={classes.root}>
            Copy Link:
          </Typography>

          <FormControl variant="outlined">

            <OutlinedInput
              size="small"
              value={getURL()}
              endAdornment={
                <InputAdornment position="end" >
                  <IconButton edge="end">
                    <FileCopyIcon />
                  </IconButton>
                </InputAdornment>
              }

            />
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default Share;