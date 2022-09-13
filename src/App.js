import React from 'react';
import Fade from 'react-reveal/Fade';
import {Switch,Route,Link} from 'react-router-dom';
import { Layout ,Typography , Space} from 'antd';
import { Navigator,Exchanges,HomePage,Cryptocurrencies,CryptoDetails,News } from './components';
import './App.css'


const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navigator />
        </div>
        <div className='main'>
        <Layout>
            <div className='routes'>
                <Switch>{/*allows you have multiple routes*/}
                    <Route exact path='/'>
                        <HomePage />
                    </Route>

                    <Route exact path='/cryptocurrencies'>
                        <Cryptocurrencies />
                    </Route>

                    <Route exact path='/crypto/:coinId'>{/*it can be /crypto/1 or /2 it means its dynamic */}
                        <CryptoDetails />
                    </Route>

                    <Route exact path='/news'>
                        <News />
                    </Route>
                    
                </Switch>
            </div>
        </Layout>
        <div className='footer'>
            <Typography.Title level = {5}  style = {{color:'white' ,textAlign: 'center'}}>
                CryptoMedia <br/>
                All Rights Reservred
            </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/news'>News</Link>
            </Space>
            </div>
        </div> 
    </div>
  )
}

export default App;