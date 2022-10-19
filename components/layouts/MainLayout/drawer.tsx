import React from 'react'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material'
import Link from 'next/link'

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
          Shell sort
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
        </List>
      </Box>
    </Drawer>
  )
}

export default CustomDrawer
