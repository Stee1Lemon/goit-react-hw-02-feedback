import styled from 'styled-components';

export const FeedbackStyle = styled('div')(() => {
  return {
    margin: 'auto',
    width: '50%',
    padding: '30px',
    '& h2': {
      fontSize: 30,
      marginBottom: 15,
    },
    '& h3': {
      marginTop: 15,
      fontSize: 25,
      fontWeight: 600,
      marginBottom: 10,
    },
  };
});
