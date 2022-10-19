import { Box } from '@mui/material'
import { useScroll, useSpring, motion } from 'framer-motion'
import { useStyles } from './styled'

const ProgressTopBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const styles = useStyles()

  return (
    <Box
      component={motion.div}
      className="progress-bar"
      bgcolor="primary.main"
      sx={styles.box}
      style={
        {
          scaleX
        } as any
      }
    />
  )
}

export default ProgressTopBar
