import React from "react"
import GoTop from "./GoTop"

import CookieConsent from "react-cookie-consent";

const Layout = ({ children }) => {
    return (
        <>
            {children}
            <GoTop />

            <CookieConsent
                location="bottom"
                buttonText="Sure!"
                cookieName="retonGatsby"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </>
    )
}
export default Layout
