import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { motion, Variants } from 'framer-motion'
import { useStyles } from './styled'

interface Props {
  index: number
  item: any
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}

function Card({ index, item }: Props) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {/* <div className="splash" style={{ background }} /> */}
      <motion.div className="card" variants={cardVariants}>
        <Stack p={2}>
          <Typography
            variant="h4"
            color="black"
            fontWeight="bold"
            textAlign="center"
            mb={2}
          >
            Dato curioso {index + 1}:
          </Typography>
          <Typography variant="body1" color="black">
            {item}
          </Typography>
        </Stack>
      </motion.div>
    </motion.div>
  )
}

const datosCuriosos = [
  {
    dato: 'Existen varias formas de calcular el intervalo, lo cual puede mejorar la efectividad del algoritmo.'
  },
  {
    dato: 'El algoritmo Shell sort mejora el ordenamiento por inserción comparando elementos separados por un espacio de varias posiciones. Esto permite que un elemento haga "pasos más grandes" hacia su posición esperada.'
  },
  {
    dato: 'Debe su nombre al ingeniero y matemático estadounidense Donald Shell que lo publicó en la revista Communications Of the ACM en 1959.'
  },
  {
    dato: 'Se basa en comparaciones e intercambios.'
  },
  {
    dato: 'Se necesita que el tiempo de acceso a cualquier dato sea constante.'
  }
]

export default function Curiosidades() {
  const styles = useStyles()
  return (
    <Box sx={styles}>
      {datosCuriosos.map((i, index) => (
        <Card index={index} item={i.dato} key={index} />
      ))}
    </Box>
  )
}
