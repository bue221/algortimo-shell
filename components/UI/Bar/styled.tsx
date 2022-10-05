export const useStyles = () => ({
  width: '100%',
  height: '100%',
  '& .Bar': {
    backgroundColor: 'white',
    color: 'red',
    display: 'flex',
    flexDirection: 'column reverse',
    alignItems: 'flex-end',
    transition: '125ms ease-in-out'
  },
  '& .Bar__Text': { margin: '0 auto 0.25rem' },
  '& .Bar_sorted': { backgroundColor: 'green' },
  '& .Bar_stateD': { backgroundColor: 'blue' },
  '& .Bar_stateC': { backgroundColor: 'red' },
  '& .Bar_stateB': { backgroundColor: 'pink' },
  '& .Bar_stateA': { backgroundColor: 'yellow' }
})
