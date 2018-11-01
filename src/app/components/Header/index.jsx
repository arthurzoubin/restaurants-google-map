import React from 'react';
import {
  Header,
  Input,
} from 'semantic-ui-react';
import {
  Images,
} from '../../../Themes';
import SearchBox from '../SearchBox';

import styles from './Header.module.scss';

const HeaderComponent = () => {
  return (
    <Header className={styles.wrapper}>
      <img className={styles.logo} src={Images.app.logo} />
      <SearchBox />
    </Header>
  );
};

export default HeaderComponent;
