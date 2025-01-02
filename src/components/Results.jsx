import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({outputs}) {
    //console.log(calculateInvestmentResults(outputs));
    const output = calculateInvestmentResults(outputs)

    const initialInvestment = output[0].valueEndOfYear - output[0].interest - output[0].annualInvestment
    
    return (
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                    </thead>
                    <tbody>
                        {output.map((data)=>{
                            const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment
                            const totalInvested = data.valueEndOfYear - totalInterest
                                return(
                                    <tr>
                                        <td>{data.year}</td>
                                        <td>{formatter.format(data.valueEndOfYear) }</td>
                                        <td>{formatter.format(data.interest) }</td>
                                        <td>{formatter.format(totalInterest)}</td>
                                        <td>{formatter.format(totalInvested)}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
            </table>
    )
}
