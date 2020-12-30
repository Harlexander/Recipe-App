import React from 'react'

const Instruction = ({Instruction}) => {
    return (
        <div>
             <ol className="font-weight-normal list-unstyled">
            {Instruction.map((item, index) => (
            <li key={index} className="m-2 border-bottom row p-2"><span className="col-8">Step {index+1} : {item.instruction}</span></li>
            )) }
            </ol> 
        </div>
    )
}

export default Instruction
