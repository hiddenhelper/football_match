import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import DisplayMatchItem from './MatchItem';
import { MatchListProps, MatchDataItem } from '../interfaces/type.d';

const useStyles = makeStyles({
  matchListStyle: {
    minHeight: 'calc(100vh - 170px)',
  },
});

const MatchList = (props: MatchListProps) => {
  const styles = useStyles();
  const { matches } = props;

  return (
    <Box className={styles.matchListStyle}>
      <div>
        {matches?.map((item: MatchDataItem) => (
          <DisplayMatchItem key={item.eventID} match={item} />
        ))}
      </div>
    </Box>
  );
};

export default MatchList;
