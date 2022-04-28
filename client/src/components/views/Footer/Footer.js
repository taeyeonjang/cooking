import React from 'react'
import { FaBug } from "react-icons/fa";

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
          <p>안녕!<FaBug /></p>

        </div>
    )
}

export default Footer
