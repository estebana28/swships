import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
`

export default function Title({title}) {
    return (
        <TitleWrapper>
            <h4>{title}</h4>
            <div></div>
        </TitleWrapper>
    )
}
