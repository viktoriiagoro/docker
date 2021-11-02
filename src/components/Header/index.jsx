import './index.scss'
import { CaretDownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import MaskGroup from '../../img/MaskGroup.png'
import colocol from '../../img/colocol.png'
import profile from '../../img/profile.png'
import mastercard from '../../img/mastercard.png'
import verification from '../../img/verification.png'
import settings from '../../img/settings.png'
import signoftheaccount from '../../img/signoftheaccount.png'
import { Menu, Dropdown } from 'antd';

const MENU = [
  {
    img: profile,
    path: '/profile',
    texData: 'Личные данные и адреса',
  },
  {
    img: profile,
    path: '/profile',
    texData: 'Контактные данные',
  },
  {
    img: mastercard,
    path: '/mastercard',
    texData: 'Банковские карты и счета',
  },
  {
    img: verification,
    path: '/verification',
    texData: 'Пароли и безопасность',
  },
  {
    img: settings,
    path: '/settings',
    texData: 'Настройка уведомлений',
  },
  {
    img: signoftheaccount,
    path: '/signoftheaccount',
    texData: 'Выйти из аккаунта',
  },
]

const menu = (
    <Menu className='dropwawn-menu'>
      <Menu.Item key="0">
        <button className='button-2'>
            <span className='btn-2'>Подтвердить личность</span>
        </button>
      </Menu.Item>
      {MENU.map(item => (
        <Menu.Item key={item.path}>
          <div className='user'>
            <img className='img-profile' src={item.img} alt={item.path} />
            <div className='description-info-user'>{item.texData}</div>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  const Header = () => {
    return (
            <Layout.Header className='header'>
                <div className='title_name'>Мой дашборд</div>
                <div className='column-right'>
                    <div className='conteiner-first-header'>
                        <img className='img-mask' src={MaskGroup} alt='Mask' />
                    </div>
                    <div className='column-text'>
                        <div className='column-text-right'>Silver</div>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <div className='link-maill-right'>
                                <div className='link-maill'>dmitrij_belyaev_89@mail.ru</div>
                                <div><CaretDownOutlined /></div>
                            </div>  
                            </a>
                        </Dropdown>
                    </div>
                    <div className='conteiner-first-header'>
                        <div className='dots'></div>
                        <img className='img-colocol' src={colocol} alt='colocol' />
                    </div>
                </div>
            </Layout.Header>
    )
}
export default Header