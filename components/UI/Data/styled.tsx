export const useStyles = () => ({
  justifyContent: 'center',
  gap: 3,
  '.card': {
    fontSize: '164px',
    width: '300px',
    height: '430px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '20px',
    boxShadow:
      '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),\n    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),\n    0 0 16px hsl(0deg 0% 0% / 0.075)',
    transformOrigin: '10% 60%'
  },
  '.card-container': {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: '20px',
    marginBottom: '-120px'
  },
  '.splash': {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    top: '0',
    clipPath:
      'path(\n    "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"\n  )'
  }
})
