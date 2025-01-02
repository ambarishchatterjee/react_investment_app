import React, { useState } from 'react'
import { calculateInvestmentResults } from '../util/investment'

export default function Userinput({inputs, onInputChange}) {
     
    return (
        <div id='user-input'>
            <div className='input-group'>
                <p>
                    <label>initial investment</label>
                    <input type="number" name="" id="" value={inputs.initialInvestment} onChange={(e)=>onInputChange('initialInvestment', e.target.value)} />
                </p>
                <p>
                    <label>annual investment</label>
                    <input type="number" name="" id="" value={inputs.annualInvestment} onChange={(e)=>onInputChange('annualInvestment', e.target.value)} />
                </p>

            </div>
            <div className='input-group'>
                <p>
                    <label>expected return</label>
                    <input type="number" name="" id="" value={inputs.expectedReturn} onChange={(e)=>onInputChange('expectedReturn', e.target.value)} />
                </p>
                <p>
                    <label>duration</label>
                    <input type="number" name="" id="" value={inputs.duration} onChange={(e)=>onInputChange('duration', e.target.value)} />
                </p>

            </div>

        </div>
    )
}
