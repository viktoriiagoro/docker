import './index.scss'
import { UnorderedListOutlined, PieChartOutlined } from '@ant-design/icons';
import list from '../../img/list.png'
import chart from '../../img/chart.png'
import gistogramm from '../../img/gistogramm.png'
import { Row, Col } from 'antd';
import {Progress} from 'antd';

const Basic =() => {
    return (
        <div className='basic'>
            <Row gutter={30} className='basic-row'>
            <Col span={14}>
                <div className='bag-left'>
                    <div className='left-card-bag'>
                        <div className='my-bag'>МОЙ ПОРТФЕЛЬ</div>
                        <div className='icon-right'>
                            <div className='img-icon'>
                                <img className='img-list-2' src={list} alt='list' />
                            </div>
                            <div className='img-icon-1'>
                                <img className='img-chart' src={chart} alt='chart' />
                            </div>
                        </div>
                    </div>
                    <div className='img-gistogramm-1'>
                        <Progress strokeWidth={12}
                              strokeColor={{
                                '100%': '#E8F2FA;',
                                '0%': '#CFE1EF',
                              }}
                         type="circle" percent={50} format={() => <div className='card-text-left'>У вас пока нет операций </div>} width={200} />
                    </div>
                </div>
            </Col>
            <Col span={10}>
                <div className='bag-right'>
                    <div className='card-right-info'>
                        <div className='text-right-left'>СОБЫТИЯ</div>
                        <div className='text-right-right'>Все события</div>
                    </div>
                    <div className='info-button'>
                        <div className='info-dots'>
                            <div className='info-dots-blue'></div>
                            <div className='info-dots-white'></div>
                            <div className='info-dots-white'></div>
                            <div className='info-dots-white'></div>
                        </div>
                        <div>
                            <button className='button-right-card'>
                                <div className='data'>16 июня в 10:00 </div>
                            </button>
                        </div>
                    </div>
                </div>
            </Col>
            </Row>
        </div>
        )
    }
    export default Basic