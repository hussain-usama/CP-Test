import React from 'react'
import {Spinner} from 'reactstrap'

function Loader(){
    return(
        <div className='text-center mt-5'>
            <Spinner>
                Loading...
            </Spinner>
        </div>
    )
}
export default Loader