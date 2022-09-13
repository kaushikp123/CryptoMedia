import React from 'react'
import millify from 'millify';
import { Typography , Row , Col , Statistic } from 'antd';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Fade from 'react-reveal/Fade';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Slide from 'react-reveal/Slide';

const { Title } = Typography;

const HomePage = () => {

  const { data,isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  
  if(isFetching)return <Loader />;
 

  return (
    <>
      <Fade top cascade><Title level={2} className="heading">Global Crypto Stats</Title></Fade>
      <Fade right cascade><Row>
        <Col span={12}><Statistic title = "Total Cryptocurrencies" value={globalStats.total} /></Col>{/*it will have 24 spaces this means this will take half the page*/}
        <Col span={12}><Statistic title = "Total Excahnges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title = "Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title = "Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title = "Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row></Fade>
      <Slide right><div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">show more</Link></Title>
      </div></Slide>
      <Cryptocurrencies simplified />
      <Slide right><div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to="/news">show more</Link></Title>
      </div></Slide>
      <News simplified />
    </>
  )
}

export default HomePage