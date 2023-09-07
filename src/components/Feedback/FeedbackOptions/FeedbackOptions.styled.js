import styled from 'styled-components';

export const OptionButton = styled('button')(() => {
  return {
    marginRight: 15,
    outline: 0,
    gridGap: '8px',
    alignItems: 'center',
    background: '0 0',
    border: '1px solid #000',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-flex',
    flexShrink: 0,
    fontSize: '16px',
    gap: '8px',
    justifyContent: 'center',
    lineHeight: 1.5,
    overflow: 'hidden',
    padding: '12px 16px',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    transition: 'all .14s ease-out',
    whiteSpace: 'nowrap',
    '&:hover': {
      boxShadow: '4px 4px 0 #000',
      transform: 'translate(-4px,-4px)',
    },
    '&:focusVisible': {
      outlineOffset: '1px',
    },
  };
});
