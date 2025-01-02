import React, { useState } from 'react'

export default function Userinput() {
    const [] = useState()
    return (
        <div id='user-input'>
            <div className='input-group'>
                <div>
                    <label>initial investment</label>
                    <input type="number" name="" id="" />
                </div>
                <div>
                    <label>annual investment</label>
                    <input type="number" name="" id="" />
                </div>

            </div>
            <div className='input-group'>
                <div>
                    <label>expected return</label>
                    <input type="number" name="" id="" />
                </div>
                <div>
                    <label>duration</label>
                    <input type="number" name="" id="" />
                </div>

            </div>

        </div>
    )
}
