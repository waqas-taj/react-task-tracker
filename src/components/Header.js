import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <header className='header'>
      <h1>{title}</h1>
      { isHomePage && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker App'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
}

export default Header
