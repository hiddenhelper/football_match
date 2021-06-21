import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { fetchData } from '../store/reducers/actions';
import MatchList from '../components/MatchItemList';
import { API_URL, MAX_MATCHES_PER_PAGE } from '../definition';
import { DashboardProps, TokiState } from '../interfaces/type.d';

const useStyles = makeStyles({
  paginationStyle: {
    display: 'flex',
    justifyContent: 'center',
    bottom: '100px',
    width: '100%',
    padding: '5px',
  },

  spinnerStyle: {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
  },
});

const Dashboard = (props: DashboardProps) => {
  const { fetchData: fetchDataFromAPI, pending, matches } = props;
  const [page, setPage] = useState<number>(1);
  const styles = useStyles();
  const pageCnt = Math.ceil(matches?.length / MAX_MATCHES_PER_PAGE);

  useEffect(() => {
    fetchDataFromAPI(API_URL);
  }, []);

  const handlePageClick = (event: object, currentPage: number) => {
    setPage(currentPage);
  };

  if (pending) {
    return <CircularProgress className={styles.spinnerStyle} />;
  }
  return (
    <Box bgcolor="text.primary" style={{ paddingTop: '20px' }}>
      <MatchList
        matches={matches?.slice(
          (page - 1) * MAX_MATCHES_PER_PAGE,
          page * MAX_MATCHES_PER_PAGE,
        )}
      />
      <Pagination
        className={styles.paginationStyle}
        count={pageCnt}
        page={page}
        color="primary"
        onChange={handlePageClick}
      />
    </Box>
  );
};

const mapStateToProps = (state: TokiState) => ({
  pending: state.pending,
  matches: state.matches,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ fetchData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
