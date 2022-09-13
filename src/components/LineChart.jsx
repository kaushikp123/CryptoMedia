import React from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Row , Col , Typography } from 'antd';
const { Title } = Typography;


function LineChart({ coinHistory, currentPrice, coinName}) {
    const coinPrice = [];
    const coinTimeStamp = [];
    for(let i=0;i<coinHistory?.data?.history?.length; i+=1){
        coinPrice.push(coinHistory?.data?.history[i].price);
        coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
    }
    const data = {
        labels: coinTimeStamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,    
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };
    
      const options = {
        scales: {
          yAxes: [
            {
              type: 'time',
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      };

    return (
    <>
        <Row className='chart-header'>
            <Title level={2} className='chart-title'>{coinName} price chart </Title>
            <Col className='price-container'>
                <Title level={5} className ='price-change'>{coinHistory?.data?.change}%</Title>
                <Title level={5} className ='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
            </Col>
        </Row>
        <Line data={data} options={options} />
    </>
  )
}

export default LineChart
