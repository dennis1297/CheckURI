import React from 'react'
import Chart from '../../components/charts/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetsSm/WidgetSm'
import './Home.css'
function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart/>
        <div className="home_widgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home