import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const StyledImpressumLink = styled.div`
margin-top: 30px;
margin-bottom: 30px;
font-size: 0.7em;
text-align: center;
color: grey;
`

export default () => {
    return (
        <StyledImpressumLink>
            <Link to="/impressum">Impressum</Link>
        </StyledImpressumLink>
        )
}