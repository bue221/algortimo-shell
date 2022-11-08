import React, { useEffect, useState } from 'react'
import {
  Box,
  Divider,
  Drawer,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { useSort } from 'context/sortMethods'
import { OptionsSort } from 'utility/sortOptions'

const drawerWidth = 240

interface IProps {
  navItems: Array<{ path: string; link: string }>
  mobileOpen: boolean
  handleDrawerToggle: any
}

const CustomDrawer: React.FC<IProps> = ({
  navItems,
  handleDrawerToggle,
  mobileOpen
}) => {
  const { state, dispatch } = useSort()

  const [select, setSelect] = useState('shell')
  const handleChange = (e: SelectChangeEvent) => setSelect(e.target.value)

  useEffect(() => {
    if (select === 'shell')
      dispatch({ type: 'setMethod', payload: OptionsSort[select] })
    if (select === 'quick')
      dispatch({ type: 'setMethod', payload: OptionsSort[select] })
    if (select === 'bubble')
      dispatch({ type: 'setMethod', payload: OptionsSort[select] })
  }, [dispatch, select])

  return (
    <Drawer
      container={undefined}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth
        }
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }} textTransform="uppercase">
          {state.title}
        </Typography>
        <Divider />
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          {navItems.map((item) => (
            <Link key={item.path} href={item.link}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.path} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          <ListItem>
            <FormControl fullWidth size="small">
              <InputLabel id="method-select">Método</InputLabel>
              <Select
                value={select}
                onChange={handleChange}
                labelId="method-select"
                autoWidth
                label="Método"
              >
                <MenuItem value="shell">Shell sort</MenuItem>
                <MenuItem value="bubble">Bubble sort</MenuItem>
                <MenuItem value="quick">Quick sort</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}

export default CustomDrawer
