import { NavLink } from 'react-router-dom';

import СartIcon from '../../shared/components/icons/СartIcon';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <NavLink to={'/'} className={styles.link}>
            Shops
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to={'/shopping-cart'} className={styles.iconLink}>
            <СartIcon className={styles.icon} /> | 0
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
