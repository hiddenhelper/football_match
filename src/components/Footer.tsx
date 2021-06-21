import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  footerContainer: {
    display: 'flex',
    height: '120px',
    flexDirection: 'column',
    justifyContent: 'center',
    bottom: 0,
    backgroundColor: '#455a64',
    color: 'white',
    borderTop: '3px solid #03a9f4',
    textAlign: 'center',
  },
});

const Footer = () => {
  const styles = useStyles();

  return (
    <div className={styles.footerContainer}>
      <Typography variant="body2" component="p">
        All characters and artwork show are for parody and remain the property
        of
        <br />
        their respective copyright owners
      </Typography>
    </div>
  );
};

export default Footer;
