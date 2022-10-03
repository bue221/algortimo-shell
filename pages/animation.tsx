import { Container } from '@mui/material'
import { MainLayout } from 'components/layouts'
import { Item } from 'components/UI/Item'
import { Reorder } from 'framer-motion'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { NextPageWithLayout } from './_app'

const Animation: NextPageWithLayout = () => {
  const [items, setItems] = useState([4, 3, 1, 2, 3, 1, 2, 12, 2, 1, 2, 22])

  const [change, setChange] = useState(false)
  React.useEffect(() => {
    setItems(items.sort())
  }, [change])

  const [i, setI] = useState()
  const [j, setJ] = useState()
  const shellsortAnimation = (arr: Array<number | string>) => {
    let n = arr.length

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < n; i += 1) {
        let temp = arr[i]
        let j: any
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap]
        }
        arr[j] = temp
      }
      console.log()
    }
    return arr
  }

  useEffect(() => {
    shellsortAnimation(items)
  }, [])
  return (
    <Container sx={{ py: 3 }}>
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
          <Item key={item} item={item} />
        ))}
      </Reorder.Group>
    </Container>
  )
}

Animation.getLayout = (page: any) => {
  return (
    <MainLayout title="inicio" description="algoritmo shell sort en typescript">
      {page}
    </MainLayout>
  )
}

export default Animation
