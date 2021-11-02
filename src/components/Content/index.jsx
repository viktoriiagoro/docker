import './index.scss'
import {UserAddOutlined, ArrowRightOutlined, WalletOutlined, PlusCircleOutlined, MinusCircleOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import pencil from '../../img/pencil.png'
import wallet from '../../img/wallet.png'
import figure from '../../img/figure.png'
import arrow from '../../img/arrow.png'
import arrowup from '../../img/arrowup.png'
import arrowdown from '../../img/arrowdown.png'
import { Row, Col } from 'antd';

const Content =() => {
    return (
            <div className='content'>
                <Row gutter={30}>
                <Col span={6}>
                    <div className='content-block-left'>
                        <div className='content-profile-left'>
                            <div className='profile-name'>ПРОФИЛЬ</div>
                            <div className='profile-photo'>
                                {/* <div className='icon-pencil'><EditOutlined /></div> */}
                                <img className='img-pensil' src={pencil} alt='pensil' />
                            </div>
                        </div>
                        <div className='content-profile'>
                            <div className='content-profile-image'>
                                <div className='icon-profile'><UserAddOutlined /></div>
                            </div>
                            <div className='info-user-name'>
                                <div className='id-user'>id 1592399358</div>
                                <div className='user-name'>Дмитрий Беляев</div>
                            </div>
                        </div>
                        <div className='name-had'>
                            <div className='name-teacher'>Мой куратор:</div>
                            <div className='user-teacher'>Сергей Петров</div>
                        </div>
                        <div className='had-button'>
                            <button className='button-1'>
                                <span className='btn'>Подтвердить личность</span>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col span={18}>
                    <div className='content-block-right'>
                        <div className='content-profile-right'>
                            <div className='info-right-finance'>ФИНАНСЫ</div>
                            <div className='info-right-content'>Мои операции</div>
                            <div className='profile-photo'>
                                <img className='img-arrow' src={arrow} alt='arrow' />
                                {/* <div className='icon-pencil'><ArrowRightOutlined /></div> */}
                            </div>
                        </div>
                        <div className='content-profile-right-card' >
                            <div className='content-profile-right-card-left'>
                                <div className='profile-expence'>
                                    <div className='content-profile-wallet'>
                                        <img className='img-wallet' src={wallet} alt='wallet' />
                                    </div>
                                    <img className='img-figure' src={figure} alt='wallet' width='87px' height='28px'/>
                                </div>
                                <div className='wallet-text-info'>Пополните баланс вашего кошелька удобным для вас способом </div>
                                <div className='button-right-wallet'>
                                    <div className='button-left-right'>
                                        <button className='button-left'>
                                            <div className='button-icon-plus'><PlusCircleOutlined /></div>
                                            <div className='button-text-info'>Пополнение </div>
                                        </button>
                                        <button className='button-right'>
                                            <div className='button-icon-minus'><MinusCircleOutlined /></div>
                                            <div className='button-text-conclusion'>Вывод </div>
                                        </button>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div className='content-profile-right-card-right'>
                                <div className='icon-right-card'>
                                    <img src={arrowup} alt='arrowup' />
                                    <img className='wallet-2' src={wallet} alt='wallet' />
                                    <img src={arrowdown} alt='arrowdown' />
                                </div>
                                <div className='text-right-card'>У вас пока нет операций</div>
                            </div>
                        </div>
                    </div>
                </Col>
                </Row>
            </div>
        
        
       


    )
}
export default Content