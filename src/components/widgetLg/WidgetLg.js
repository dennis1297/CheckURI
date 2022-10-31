import React from 'react'
import './WidgetLg.css'

function WidgetLg() {
  const Button =({type})=>{
    return <button className={'widget_lg_button '+ type}>{type}</button>
  }
  
  return (
    <div className='widget_lg'>
      <h3 className="widget_lg_title">Latest Transaction</h3>
      <table className="widget_table">
        <tr className="widget_tr">
          <th className="widget_th">Customer</th>
          <th className="widget_th">Date</th>
          <th className="widget_th">Amount</th>
          <th className="widget_th">Status</th>
        </tr>
        <tr className="widget_tr">
          <td className="widget__user">
          <img src={require("../images/5.png")} alt="" className='widgetLg_img' />
          <span className="widget__name">Sranav</span>
          </td>
          <td className="widget_date">8-4-2022</td>
          <td className="widget_amount">$200</td>
          <td className="widget_date"><Button type="Approved"/></td>
        </tr>
        <tr className="widget_tr">
          <td className="widget__user">
          <img src={require("../images/5.png")} alt="" className='widgetLg_img' />
          <span className="widget__name">Sranav</span>
          </td>
          <td className="widget_date">8-4-2022</td>
          <td className="widget_amount">$200</td>
          <td className="widget_date"><Button type="Declined"/></td>
        </tr>
        <tr className="widget_tr">
          <td className="widget__user">
          <img src={require("../images/5.png")} alt="" className='widgetLg_img' />
          <span className="widget__name">Sranav</span>
          </td>
          <td className="widget_date">8-4-2022</td>
          <td className="widget_amount">$200</td>
          <td className="widget_date"><Button type="Pending"/></td>
        </tr>
        <tr className="widget_tr">
          <td className="widget__user">
          <img src={require("../images/5.png")} alt="" className='widgetLg_img' />
          <span className="widget__name">Sranav</span>
          </td>
          <td className="widget_date">8-4-2022</td>
          <td className="widget_amount">$200</td>
          <td className="widget_date"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg