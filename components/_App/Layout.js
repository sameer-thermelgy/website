import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1500);
    }, [])

    return(
        <React.Fragment>
            <Head>
                <title>Zoko - React IT Solutions & Digital Services Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Zoko - React IT Solutions & Digital Services Template" />
                <meta name="og:title" property="og:title" content="Zoko - React IT Solutions & Digital Services Template"></meta>
                <meta name="twitter:card" content="Zoko - React IT Solutions & Digital Services Template"></meta>
                <link rel="canonical" href="https://zoko-react.hibootstrap.com/"></link>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;