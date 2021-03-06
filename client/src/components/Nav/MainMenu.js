import React from 'react'
import { logout } from '../../utils/AuthService'
import API from '../../utils/API'
import PlaidAccountLink from '../PlaidAccountLink'

// materialize navbar
class MainMenu extends React.Component {
  constructor (props) {
    super(props)
    console.log(`menu: `, props)
  }

  render () {
    const accounts = this.props.user.accounts || []
    const hasAccounts = (accounts.length > 0)
    const accountsClassName = hasAccounts ? '' : 'disabled'
    return (
      <div>
        {/* <!-- Main Menu (Desktop Dropdown) --> */}
        <ul id='desktop-main-menu' className='dropdown-content'>
          <li><a href='/accounts'><i className='large material-icons'>account_balance</i>Accounts</a></li>
          {/* if you get a jwt-auth error, navigate to the API.accountsSync function and comment out the function body until you login */}
          <li className='divider' />
          <li><a href='#!' onClick={() => API.accountsSync()}><i className='large material-icons'>sync</i>Sync Accounts</a></li>
          <li className='divider' />
          <PlaidAccountLink refresh={this.props.refresh}><i className='large material-icons'>insert_link</i>Link Account</PlaidAccountLink>
          <li className='divider' />
          <li><a href='#!' onClick={() => logout()}><i className='large material-icons'>keyboard_tab</i>Log Out</a></li>
          <li className='divider' />
        </ul>

        {/* <!-- Main Menu (Mobile Hamburger) --> */}
        <ul id='mobile-main-menu' className='side-nav'>
          <li><a disabled href='/accounts'><i className='large material-icons'>account_balance</i>Accounts</a></li>
          <li><div className='divider' /></li>
          <li><a href='#!' onClick={() => API.accountsSync()}><i className='large material-icons'>sync</i>Sync Accounts</a></li>
          <li><div className='divider' /></li>
          <PlaidAccountLink refresh={this.props.refresh}><i className='large material-icons'>insert_link</i>Link Account</PlaidAccountLink>
          <li className='divider' />
          <li><a href='#!' onClick={() => logout()}><i className='large material-icons'>keyboard_tab</i>Log Out</a></li>
        </ul>
      </div>
    )
  }
}

export default MainMenu
