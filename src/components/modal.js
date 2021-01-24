import react, { useContext, useState } from 'react'
import { Usercontext } from '../context/context'
import { Countries } from '../dropdown tags/select'
import { firestore } from './create-recipe component/firebase/firebase'

const Modal = ({id, head, body, bottom}) => {
    const value = useContext(Usercontext)
    
    return(
        <div  className="modal fade" tabindex="-1" id={id} aria-hidden="false">
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
             {head}
        </div>
        <div className="modal-body">
             {body}
        </div>
        <div className="modal-footer">
             {bottom}
        </div>
        </div>
    </div>
</div>
    )
}

export default Modal