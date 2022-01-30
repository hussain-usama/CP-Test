import React from 'react'

function PageHeader(props){
    return(
        <h2 className="profile-heading headingText py-3 text-center">{props?.title} </h2>
    )
}
export default PageHeader