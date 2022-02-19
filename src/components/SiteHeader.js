import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../images/logo-lf-custom.svg'

export default function SiteHeader() {
    return (
        <div className='site-header d-flex flex-row justify-content-start m-1 mt-3'>
            <Link to='/' className='logo'>
                <Logo />
                <p className='mt-1 mb-1 text-center'>Customizador de motocicletas</p>
            </Link>

            {/* <div className='menu'>
                <Link to="/">LF Custom</Link>
                <Link to="/">LF Custom</Link>
            </div> */}
        </div>
    )
}