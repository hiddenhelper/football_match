import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { fetchData } from '../store/reducers/actions';
import { HeaderProps, MatchDataItem, TokiState } from '../interfaces/type.d';

const useStyles = makeStyles({
  header: {
    background:
      'linear-gradient(100deg, #506070 0%, #405070 30%, #263248 30.1%, #58707f  50%, #497090 100%)',
    padding: '5px 3rem',
    borderBottom: '5px solid #03a9f4',
  },
  mainPane: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alignText: {
    textAlign: 'right',
  },
});

const Header = (props: HeaderProps) => {
  const styles = useStyles();
  const { matches } = props;
  return (
    <AppBar position="fixed" className={styles.header}>
      <div className={styles.mainPane}>
        <div>
          <Typography variant="caption" component="h5" color="inherit">
            Toki Games
          </Typography>
        </div>
        <div className={styles.alignText}>
          <div>
            <Typography variant="caption" component="span" color="inherit">
              Number of entries
            </Typography>
          </div>
          <div>
            <Typography
              id="entryCnt"
              variant="caption"
              component="span"
              color="inherit"
            >
              {
                matches?.filter((item: MatchDataItem) => item.entry === true)
                  .length
              }
            </Typography>
          </div>
        </div>
      </div>
    </AppBar>
  );
};

const mapStateToProps = (state: TokiState) => ({
  pending: state.pending,
  matches: state.matches,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ fetchData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
