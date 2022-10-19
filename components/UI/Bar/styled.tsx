export const useStyles = () => ({
  width: '100%',
  height: '100%',
  '& .Bar': {
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    transition: '125ms ease-in-out'
  },
  '& .Bar__Text': { margin: '0 auto 0.25rem' },
  '& .Bar_sorted': { backgroundColor: 'success.main' },
  '& .Bar_stateD': { backgroundColor: 'info.main' },
  '& .Bar_stateC': { backgroundColor: 'error.main' },
  '& .Bar_stateB': { backgroundColor: 'secondary.main' },
  '& .Bar_stateA': { backgroundColor: 'primary.main' }
})
