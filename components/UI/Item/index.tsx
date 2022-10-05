import * as React from 'react'
import { useMotionValue, Reorder, useDragControls } from 'framer-motion'
import { useRaisedShadow } from './use-raised-shadow'

interface Props {
  item: string | number
}

export const Item = ({ item }: Props) => {
  const x = useMotionValue(0)
  const boxShadow = useRaisedShadow(x)
  const dragControls = useDragControls()

  return (
    <Reorder.Item
      value={item}
      id={item as string}
      style={{ boxShadow, x }}
      // dragListener={false}
      // dragControls={dragControls}
    >
      <span>{item}</span>
      {/* <ReorderIcon dragControls={dragControls} /> */}
    </Reorder.Item>
  )
}
