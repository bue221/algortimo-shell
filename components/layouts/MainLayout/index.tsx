import React, { ReactFragment } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'

type Props = {
  children: ReactFragment
  title: string
  description: string
}

const drawerWidth = 240
const navItems = [
  { path: 'Inicio', link: '/' },
  { path: 'Como funciona?', link: '/animation' },
  { path: 'Analisis computacional', link: 'analytics' }
]

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

const MainLayout = ({ children, title, description }: Props): JSX.Element => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.path} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = undefined
  return (
    <div>
      <Head>
        <title>{`Shell sort | ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className="
                    flex flex-col items-start w-full pt-10
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                "
      >
        <Box sx={{ display: 'flex' }}>
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Shell sort
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Link href={item.link} key={item.path}>
                    <Button sx={{ color: '#fff' }}>{item.path}</Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
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
              {drawer}
            </Drawer>
          </Box>
          <Box sx={{ py: 8, width: '100%' }}>{children}</Box>
        </Box>
      </motion.main>
    </div>
  )
}

export default MainLayout
