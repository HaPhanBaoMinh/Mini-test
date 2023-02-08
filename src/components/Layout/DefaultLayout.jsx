import React from 'react'
import Category from './Category'
import Footer from './Footer'
import Header from './Header'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Category />
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout