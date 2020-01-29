import React from 'react'
import loadingGif from '../images/icons/loading.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>ships data loading...</h4>
            <img src={ loadingGif } alt="" />
        </div>
    )
}
