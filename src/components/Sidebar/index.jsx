import './index.scss'
import { CaretRightOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import x100 from '../../img/x100.png'
import windows from '../../img/windows.png'
import basket from '../../img/basket.png'
import baggage from '../../img/baggage.png'
import info from '../../img/info.png'
import list from '../../img/list.png'
import canculator from '../../img/canculator.png'


const NAVIGATION = [
    {
        icon: windows,
        path: '/dashboard',
        isActive: true
    },
    {
        icon: basket,
        path: '/products',
        isActive: false
    },
    {
        icon: baggage,
        path: '/productive',
        isActive: false
    },
    {
        icon: info,
        path: '/info-products',
        isActive: false
    },
    {
        icon: list,
        path: '/list-products',
        isActive: false
    },
]

const Sidebar = () => {
    return (
        <Layout.Sider className='sidebar'>
            <div className='sidebare-wrapper'>
                <div>
                    <div className='sidebar-icon'>
                        <img src={x100} alt='x100' width='46px' height='30px' />
                    </div>
                    <div className='navigation-wrap'>
                        {NAVIGATION.map(item => (
                            <div className={'icon-sidebar' + (item.isActive ? ' active' : '')} key={item.path}>
                                <img src={item.icon} alt='Vector' width='22' height='22' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='container'>
                    <div className='container-end'>
                        <img className='container-end_image' src={canculator} alt='canculator' />
                    </div>
                </div>
            </div>
        </Layout.Sider>
    )
}

export default Sidebar