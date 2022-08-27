import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaTelegramPlane,
  FaViber,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaCubes,
  FaBalanceScaleRight,
  FaLaptop,
} from 'react-icons/fa'
import {
  FiUser,
  FiPhoneCall,
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiArrowRight,
  FiMonitor,
  FiTablet,
  FiSpeaker,
} from 'react-icons/fi'

import { HiOutlineChip } from 'react-icons/hi'
import { IoGameControllerOutline, IoSettingsOutline } from 'react-icons/io5'
import { BiPrinter, BiDesktop } from 'react-icons/bi'
import { MdOutlineRouter } from 'react-icons/md'

import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import logoDark from '../../assets/logoDark.png'
import logoLight from '../../assets/logoLight.png'

const languages = [
  { code: 'uz', name: 'Uz', country_code: 'uz' },
  { code: 'ru', name: 'Ru', country_code: 'ru' },
]

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const [categoryTab, setCategoryTab] = useState(false)
  const [openContactMenu, setOpenContactMenu] = useState(null)

  const currentLangCode = cookies.get('i18next') || 'uz'
  const { t } = useTranslation()
  const location = useLocation()

  function AccordionBox({ title, links, more, neutral, arrowLink, icon }) {
    return (
      <Accordion
        sx={{
          // width: neutral ? '100%' : '#f4f8fb',
          backgroundColor: neutral ? '#fff' : 'transparent',
          color: neutral ? '#060F42' : '#f4f8fb',
        }}
      >
        <AccordionSummary
          expandIcon={<FaChevronDown color={neutral ? '#060F42' : '#f4f8fb'} />}
          aria-controls="panel1a-content"
          sx={{
            padding: neutral ? '12px' : 0,
            paddingRight: neutral ? '12px' : 2,
          }}
        >
          {icon && icon}
          <Typography
            sx={{
              color: neutral ? '#060F42' : '#fff',
              fontSize: neutral ? 14 : 18,
              fontWeight: neutral ? 700 : 600,
              ml: icon ? 0.5 : 0,
            }}
          >
            {t(title)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingTop: 0 }}>
          {arrowLink
            ? links.map((link) => (
                <Link
                  to={`/${link}`}
                  key={link}
                  style={{ height: 48, paddingLeft: arrowLink ? '44px' : '0' }}
                  className="large bold d-flex justify-between items-center"
                >
                  <p>{t(link)}</p>
                  <FiArrowRight size={24} />
                </Link>
              ))
            : links.map((link) => (
                <Link to={`/${link}`} key={link} className="medium">
                  <p>{t(link)}</p>
                </Link>
              ))}
          {more && (
            <Link
              to={`/${more}`}
              style={{ height: 48, paddingLeft: arrowLink ? '44px' : '0' }}
              className="large bold d-flex justify-between items-center"
            >
              <p>{t('view-all')}</p>
              <FiArrowRight size={24} />
            </Link>
          )}
        </AccordionDetails>
      </Accordion>
    )
  }

  useEffect(() => {
    setDrawerOpen(false)
    setSearchOpen(false)
    setCategoryOpen(false)
    setCategoryTab(false)
    setOpenContactMenu(false)
  }, [location])

  const openTab = (tab) => {
    if (tab === 'drawerOpen') {
      if (drawerOpen) {
        setDrawerOpen(false)
      } else {
        setDrawerOpen(true)
      }
      setSearchOpen(false)
      setCategoryOpen(false)
      setCategoryTab(false)
      setOpenContactMenu(false)
    } else if (tab === 'searchOpen') {
      if (searchOpen) {
        setSearchOpen(false)
      } else {
        setSearchOpen(true)
      }
      setDrawerOpen(false)
      setCategoryOpen(false)
      setCategoryTab(false)
      setOpenContactMenu(false)
    } else if (tab === 'categoryOpen') {
      if (categoryOpen) {
        setCategoryOpen(false)
      } else {
        setCategoryOpen(true)
      }
      setDrawerOpen(false)
      setSearchOpen(false)
      setCategoryTab(false)
      setOpenContactMenu(false)
    } else if (tab === 'categoryTab') {
      if (categoryTab) {
        setCategoryTab(false)
      } else {
        setCategoryTab(true)
      }
      setDrawerOpen(false)
      setSearchOpen(false)
      setCategoryOpen(false)
      setOpenContactMenu(false)
    } else if (tab === 'openContactMenu') {
      if (openContactMenu) {
        setOpenContactMenu(false)
      } else {
        setOpenContactMenu(true)
      }
      setDrawerOpen(false)
      setSearchOpen(false)
      setCategoryOpen(false)
      setCategoryTab(false)
    }
  }

  return (
    <header className="header">
      <div className="header-top bg-primary">
        <div className="container">
          <div className="d-flex items-center">
            <button
              className="drawer-btn open-btn d-flex items-center"
              onClick={() => openTab('drawerOpen')}
            >
              <FaBars />
            </button>
            <div className="header-list d-flex items-center mob:d-none">
              <Link to="/" className="header-list__link">
                {t('stock')}
              </Link>
              <Link to="/" className="header-list__link">
                {t('credit')}
              </Link>
              <Link to="/" className="header-list__link">
                {t('payment_n_delivery')}
              </Link>
              <Link to="/" className="header-list__link">
                {t('help')}
              </Link>
              <Link to="/" className="header-list__link">
                {t('buying-second-hand')}
              </Link>
              <Link to="/" className="header-list__link">
                {t('contacts')}
              </Link>
            </div>
          </div>
          <Link to="/" className="d-none mob:d-block">
            <img src={logoDark} alt="logo" className="logo" />
          </Link>
          <div className="d-none mob:d-block">
            <FiPhoneCall size={24} />
          </div>
          <div className="d-flex items-center mob:d-none">
            <div className="d-flex tablet:d-none items-center langs">
              {languages.map(({ code, name, country_code }) => (
                <button
                  key={country_code}
                  onClick={() => i18next.changeLanguage(code)}
                  className={`${code === currentLangCode && 'active'} lang`}
                >
                  {name}
                </button>
              ))}
            </div>
            <Link to="/profile">
              <FiUser size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className={`drawer drawer-black ${drawerOpen ? 'visible' : ''}`}>
        <div className={`drawer drawer-red ${drawerOpen ? 'visible' : ''}`}>
          <div className={`drawer drawer-white ${drawerOpen ? 'visible' : ''}`}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              className="drawer-btn close-btn"
              onClick={() => setDrawerOpen(false)}
            >
              <FaTimes color="#f4f8fb" />
            </IconButton>
            <img src={logoDark} alt="logo" className="logo" />
            <ul className="drawer-list">
              <li>
                <div
                  className="d-none tablet:d-flex items-center langs mb-1"
                  style={{ width: 'fit-content' }}
                >
                  {languages.map(({ code, name, country_code }) => (
                    <button
                      key={country_code}
                      onClick={() => i18next.changeLanguage(code)}
                      className={`${code === currentLangCode && 'active'} lang`}
                      style={{ fontSize: 14 }}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </li>
              <li style={{ transitionDelay: '1500ms' }}>
                <p className="text-large mb-1/2">
                  <Link to="/sign-in"> {t('sign-in')} </Link> |{' '}
                  <Link to="/sign-up"> {t('sign-up')}</Link>
                </p>
              </li>
              <li style={{ transitionDelay: '1600ms' }}>
                <AccordionBox
                  title={'information'}
                  links={[
                    'stock',
                    'credit',
                    'payment_n_delivery',
                    'guarantee',
                    'FAQ',
                    'news',
                    'blog',
                    'about-us',
                    'privacy-policy',
                  ]}
                />
              </li>
              <li style={{ transitionDelay: '1700ms' }}>
                <AccordionBox
                  title={'our-services'}
                  links={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
                />
              </li>
              <li style={{ transitionDelay: '1700ms' }}>
                <p className="text-large mb-1 mt-1/2">{t('contacts')}</p>
                <div>
                  <a href="#!" className="medium">
                    <p>(067) 11-12-485 - {t('sales-department')}</p>
                  </a>
                  <a href="#!" className="medium">
                    <p>(066) 484-39-22 - {t('sales-department')}</p>
                  </a>
                  <a href="#!" className="medium">
                    <p>(063) 747-33-48 - {t('sales-department')}</p>
                  </a>
                  <a href="#!" className="medium">
                    <p>
                      {t('dnieper')} <br /> {t('location-in-drawer')}
                    </p>
                  </a>
                  <p className="text-small">
                    {t('monday-friday')} 9:00-19:00 <br />{' '}
                    {t('saturday-sunday')}: 9:00-16:00
                  </p>
                </div>
              </li>
              <li style={{ transitionDelay: '1700ms' }}>
                <p className="text-large my-1">{t('follow-us')}</p>
                <div className="d-flex" style={{ gap: 8 }}>
                  <a href="#!" className="social">
                    <FaYoutube />
                  </a>
                  <a href="#!" className="social">
                    <FaFacebookF />
                  </a>
                  <a href="#!" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#!" className="social">
                    <FaInstagram />
                  </a>
                  <a href="#!" className="social">
                    <FaViber />
                  </a>
                  <a href="#!" className="social">
                    <FaTelegramPlane />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container d-flex items-center justify-between">
          <img src={logoLight} alt="logo" className="d-block mob:d-none" />
          <Button
            variant="contained"
            sx={{
              height: '42px',
              minWidth: '42px',
              gap: 1,
            }}
            onClick={() => openTab('categoryOpen')}
            disableElevation
          >
            <p
              className={`text-small fadeElement ${
                searchOpen ? 'd-none' : 'active'
              }`}
            >
              {t('CATALOG')}
            </p>
            <FaCubes />
          </Button>
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <div className={`menu categories ${categoryOpen ? 'visible' : ''}`}>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
                component="nav"
                aria-label="Categories"
              >
                {[
                  { name: 'pc-components', img: <HiOutlineChip size={24} /> },
                  { name: 'monitors', img: <FiMonitor size={24} /> },
                  { name: 'computers', img: <BiDesktop size={24} /> },
                  { name: 'laptops', img: <FaLaptop size={24} /> },
                  {
                    name: 'game-consoles',
                    img: <IoGameControllerOutline size={24} />,
                  },
                  {
                    name: 'accessories-for-laptops',
                    img: <IoSettingsOutline size={24} />,
                  },
                  { name: 'tablets', img: <FiTablet size={24} /> },
                  {
                    name: 'printers-and-mfps',
                    img: <BiPrinter size={24} />,
                  },
                  {
                    name: 'acoustic-speakers',
                    img: <FiSpeaker size={24} />,
                  },
                  {
                    name: 'network-hardware',
                    img: <MdOutlineRouter size={24} />,
                  },
                ].map(({ name, img }, idx) => (
                  <ListItem
                    button
                    divider
                    key={idx}
                    onClick={() => {
                      setActiveCategory(idx)
                      setCategoryTab((prevState) => !prevState)
                    }}
                    sx={{
                      background: activeCategory === idx ? '#F4F8FB' : '#fff',
                      color: activeCategory === idx ? '#01579B' : '#060F42',
                      fontWeight: 700,
                    }}
                  >
                    {img}
                    <ListItemText sx={{ ml: 0.5 }}>{t(name)}</ListItemText>
                    <FaChevronRight />
                  </ListItem>
                ))}
              </List>
              <div
                className={`flex-float fadeElement ${
                  categoryTab ? 'active' : 'd-none'
                }`}
              >
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'motherboards',
                    'processors',
                    'video-cards',
                    'ram',
                    'ssd-drives',
                    'processors',
                    'video-cards',
                    'ram',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['processors', 'ram', 'ssd-drives'].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['motherboards', 'processors', 'video-cards', 'ram'].map(
                    (category, idx) => (
                      <Link to={`/${category}`} key={idx} className="large">
                        {t(category)}
                      </Link>
                    )
                  )}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'processors',
                    'ssd-drives',
                    'video-cards',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['processors', 'ssd-drives'].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'motherboards',
                    'processors',
                    'video-cards',
                    'ram',
                    'ssd-drives',
                    'video-cards',
                    'ram',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'motherboards',
                    'video-cards',
                    'ram',
                    'processors',
                    'ram',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'video-cards',
                    'ram',
                    'ssd-drives',
                    'processors',
                    'video-cards',
                    'ram',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['processors', 'video-cards'].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['motherboards', 'processors'].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'video-cards',
                    'ram',
                    'ssd-drives',
                    'motherboards',
                    'processors',
                    'ram',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
              </div>
              <div
                className={`flex-float reverse fadeElement ${
                  !categoryTab ? 'active' : 'd-none'
                }`}
              >
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'motherboards',
                    'processors',
                    'video-cards',
                    'ram',
                    'ssd-drives',
                    'processors',
                    'video-cards',
                    'ram',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['processors', 'ram', 'ssd-drives'].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['motherboards', 'processors', 'video-cards', 'ram'].map(
                    (category, idx) => (
                      <Link to={`/${category}`} key={idx} className="large">
                        {t(category)}
                      </Link>
                    )
                  )}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'processors',
                    'ssd-drives',
                    'video-cards',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['processors', 'ssd-drives'].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'motherboards',
                    'processors',
                    'video-cards',
                    'ram',
                    'ssd-drives',
                    'video-cards',
                    'ram',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'motherboards',
                    'video-cards',
                    'ram',
                    'processors',
                    'ram',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'video-cards',
                    'ram',
                    'ssd-drives',
                    'processors',
                    'video-cards',
                    'ram',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['processors', 'video-cards'].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {['motherboards', 'processors'].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
                <div>
                  <h5>Lorem ipsum dolor</h5>
                  {[
                    'video-cards',
                    'ram',
                    'ssd-drives',
                    'motherboards',
                    'processors',
                    'ram',
                    'ssd-drives',
                  ].map((category, idx) => (
                    <Link to={`/${category}`} key={idx} className="large">
                      {t(category)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Box>
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <div
              className={`full-screen menu ${categoryOpen ? 'visible' : ''}`}
            >
              <Box
                sx={{
                  color: '#060F42',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '16px',
                  paddingRight: 0.5,
                }}
                className="d-flex items-center justify-between"
              >
                <h4 className="text-large">{t('catalog')}</h4>
                <IconButton onClick={() => setCategoryOpen(false)}>
                  <FaTimes color="#E93232" size={20} />
                </IconButton>
              </Box>
              <Divider />
              <Box
                sx={{
                  width: '100%',
                }}
              >
                {[
                  { name: 'pc-components', img: <HiOutlineChip size={24} /> },
                  { name: 'monitors', img: <FiMonitor size={24} /> },
                  { name: 'computers', img: <BiDesktop size={24} /> },
                  { name: 'laptops', img: <FaLaptop size={24} /> },
                  {
                    name: 'game-consoles',
                    img: <IoGameControllerOutline size={24} />,
                  },
                  {
                    name: 'accessories-for-laptops',
                    img: <IoSettingsOutline size={24} />,
                  },
                  { name: 'tablets', img: <FiTablet size={24} /> },
                  {
                    name: 'printers-and-mfps',
                    img: <BiPrinter size={24} />,
                  },
                  {
                    name: 'acoustic-speakers',
                    img: <FiSpeaker size={24} />,
                  },
                  {
                    name: 'network-hardware',
                    img: <MdOutlineRouter size={24} />,
                  },
                ].map(({ name, img }, idx) => (
                  <AccordionBox
                    key={idx}
                    sx={{
                      background: activeCategory === idx ? '#F4F8FB' : '#fff',
                      color: activeCategory === idx ? '#01579B' : '#060F42',
                      fontWeight: 700,
                    }}
                    title={name}
                    links={['stock', 'credit', 'payment_n_delivery']}
                    more={name}
                    icon={img}
                    neutral
                    arrowLink
                  />
                ))}
              </Box>
            </div>
          </Box>
          <Box
            className={`d-flex items-center tablet:fadeElement searchbox ${
              searchOpen ? 'active' : ''
            }`}
            sx={{
              flex: { xs: searchOpen ? 1 : 0, md: 1 },
              opacity: { md: 1 },
              height: '100%',
              borderRadius: 1,
              background: { xs: '#fff', md: 'transparent' },
            }}
          >
            <input
              type="text"
              className="inputField"
              placeholder={t('search')}
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                flex: 1,
              }}
            />
            <Button
              variant={searchOpen ? '' : 'contained'}
              type="button"
              sx={{
                height: '42px',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                backgroundColor: { xs: '#fff', md: '#01579b' },
                color: { xs: '#01579b', md: '#fff' },
              }}
              aria-label="search"
              disableElevation
            >
              <FiSearch size={20} />
            </Button>
          </Box>
          <Box className="d-flex tablet:d-none">
            <Box
              sx={{
                flexGrow: 0,
                mr: 1,
                position: 'relative',
                zIndex: 1,
                display: { xs: 'none', lg: 'flex' },
              }}
              className="items-center"
            >
              <Button
                onClick={() => openTab('openContactMenu')}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{ gap: 1 }}
              >
                050 065 87 96
                <FaChevronDown />
              </Button>
              <div className={`menu ${openContactMenu ? 'visible' : ''}`}>
                <a href="tel:+70671112485" className="mb-1">
                  <p className="d-flex items-center gap-1 text-bold">
                    <FiPhoneCall size={24} />
                    (067) 11-12-485
                  </p>
                </a>
                <a href="tel:+70664843922" className="mb-1">
                  <p className="d-flex items-center gap-1 text-bold">
                    <FiPhoneCall size={24} />
                    (066) 484-39-22
                  </p>
                </a>
                <a href="tel:+70637473348" className="mb-1">
                  <p className="d-flex items-center gap-1 text-bold">
                    <FiPhoneCall size={24} />
                    (063) 747-33-48
                  </p>
                </a>
                <Divider sx={{ mt: '24px', mb: '24px' }}>{t('or')}</Divider>
                <p className="text-large mb-1">{t('call-me-back')}</p>
                <form>
                  <input
                    type="text"
                    className="inputField w-full mb-5/8"
                    placeholder={t('your-name')}
                    id="callmebackName"
                  />
                  <input
                    type="tel"
                    className="inputField w-full mb-1"
                    placeholder={t('your-phone-number')}
                    id="callmebackPhone"
                  />
                  <Button
                    variant="contained"
                    sx={{ width: '100%', padding: '13px' }}
                    disableElevation
                  >
                    <p className="text-small">{t('CATALOG')}</p>
                  </Button>
                </form>
              </div>
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ borderColor: '#000' }}
              flexItem
            />
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ ml: '1rem' }}
            >
              <Badge badgeContent={22} color="warning">
                <FaBalanceScaleRight />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ ml: '1rem' }}
            >
              <Badge badgeContent={22} color="warning">
                <FiHeart />
              </Badge>
            </IconButton>
          </Box>
          <Box className="d-flex">
            <IconButton
              sx={{
                display: { xs: searchOpen ? 'none' : 'flex', md: 'none' },
              }}
              className={`icon-button fadeElement ${
                searchOpen ? 'd-none' : 'active'
              }`}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => setSearchOpen(true)}
            >
              <FiSearch size={28} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={22} color="success">
                <FiShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
