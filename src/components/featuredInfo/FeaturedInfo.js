import React from 'react'
import './FeaturedInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featured_item">
            <span className="featured_title">Revanue</span>
                <div className="featured_moneyContainer">
                    <span className="feactured_money">$2,415</span>
                    <span className="featured_money_rate">-11.4
                        <ArrowDownwardIcon className='featured_icon '/>
                    </span>
                </div>
                <span className="feature_sub">Compared to last month</span>
            
        </div>
        <div className="featured_item">
            <span className="featured_title">Revanue</span>
                <div className="featured_moneyContainer">
                    <span className="feactured_money">$2,415</span>
                    <span className="featured_money_rate">-11.4
                        <ArrowDownwardIcon className='featured_icon '/>
                    </span>
                </div>
                <span className="feature_sub">Compared to last month</span>
            
        </div>
        <div className="featured_item">
            <span className="featured_title">Revanue</span>
                <div className="featured_moneyContainer">
                    <span className="feactured_money">$2,415</span>
                    <span className="featured_money_rate">-11.4
                        <ArrowUpwardIcon className='featured_icon'/>
                    </span>
                </div>
                <span className="feature_sub">Compared to last month</span>
            
        </div>

    </div>
  )
}

export default FeaturedInfo