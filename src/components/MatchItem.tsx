import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Box,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { setEntry } from '../store/reducers/actions';
import { MatchItemProps, MatchDataItem } from '../interfaces/type.d';

const useStyles = makeStyles({
  mainItemStyle: {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    margin: 'auto',
    backgroundColor: 'rgb(30,30,40)',
    color: '#ffffff',
    borderRadius: '10px',
  },

  prizePoolStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    color: 'white',
    paddingLeft: '5px',
    borderRadius: '7px',
  },

  yellowText: {
    color: 'yellow',
  },

  mainGrid: {
    backgroundColor: '#424242',
    color: '#9e9e9e',
    paddingBottom: '10px',
  },

  infoGrid: {
    display: 'flex',
    justifyContent: 'center',
  },

  gridLeft: {
    backgroundColor: '#354540',
    padding: '10px 12px 12px 10px',
  },

  gridRight: {
    backgroundColor: '#203035',
  },

  eventName: {
    height: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  noPadding: {
    padding: '0',
  },

  cardStyle: {
    height: '100%',
    padding: '0',
  },

  btnStyle: {
    width: '70%',
    height: '50%',
    margin: 'auto',
    backgroundColor: 'orange',
    color: 'black',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: 'orange',
      color: 'black',
    },
  },
});

const DisplayMatchItem = (props: MatchItemProps) => {
  const styles = useStyles();
  const { setEntry: setEntryForMatchItem, match } = props;

  const changeEntry = (item: MatchDataItem) => {
    setEntryForMatchItem(item);
  };

  return (
    <Box width="70%" className={styles.mainItemStyle}>
      <Card>
        <Grid container>
          <Grid item sm={12} xs={12} md={11}>
            <CardActionArea onClick={() => changeEntry(match)}>
              <CardContent className={styles.noPadding}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={2} className={styles.gridLeft}>
                    <div className={styles.prizePoolStyle}>
                      <Typography variant="caption" component="p">
                        PRIZE POOL:
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        className={styles.yellowText}
                      >
                        $
                        {parseFloat(match.prizePools.winningsPrizePoolAmount)
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </Typography>
                      <Typography variant="caption" component="p">
                        +BONUS: $
                        {parseFloat(match.prizePools.bonusPrizePoolAmount)
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={10}
                    sm={12}
                    xs={12}
                    className={styles.mainGrid}
                  >
                    <Grid container>
                      <Grid item xs={6} sm={3} className={styles.infoGrid}>
                        <Typography variant="caption" component="span">
                          {match.tournament.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={3} className={styles.infoGrid}>
                        <Typography variant="caption" component="span">
                          {match.matchSeries}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={3} className={styles.infoGrid}>
                        <Typography variant="caption" component="span">
                          {new Date(match.goLiveAt).toLocaleDateString(
                            undefined,
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            },
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={3} className={styles.infoGrid}>
                        <Typography variant="caption" component="span">
                          {match.eventStatus}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography
                      variant="h5"
                      component="h2"
                      className={styles.eventName}
                    >
                      {match.name}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Grid>
          <Grid item md={1} sm={12} xs={12} className={styles.gridRight}>
            <CardActions className={styles.cardStyle}>
              <Button
                name="selectBtn"
                className={styles.btnStyle}
                variant="contained"
                color="primary"
                onClick={() => changeEntry(match)}
              >
                {match.entry === true ? 'REMOVE' : 'ADD'}
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ setEntry }, dispatch);

export default connect(null, mapDispatchToProps)(DisplayMatchItem);
