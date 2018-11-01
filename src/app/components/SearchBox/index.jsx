import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Ref,
  Form,
  Button,
} from 'semantic-ui-react';
import {
  Images,
} from '../../../Themes';
import { PAGE_TYPES } from '../../appConstants';

import styles from './SearchBox.module.scss';

const SEARCHBOX = {
  input: {
    action: {
      icon: 'search',
      className: styles.searchBtn,
    },
    iconPosition: 'right',
    placeholder: 'Search restaurants...',
  },
};
const BACK_RESULTS_TEXT = 'Back to results';

class SearchBoxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: false,
      searchValue: '',
    };
    this._handleSearchRestaurant = this._handleSearchRestaurant.bind(this);
  }

  componentDidMount() {
    this.setState({
      initial: true,
    });
  }

  _handleChangeValue(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  _handleClearValue() {
    const { doClear } = this.props;
    this.setState({
      searchValue: '',
    });
    doClear();
  }

  _handleSearchRestaurant() {
    const { doSearch } = this.props;
    const { searchValue } = this.state;
    if (!!searchValue) {
      doSearch({
        q: searchValue,
      });
    }
  }

  render() {
    const {
      searching,
      showBg,
      pageType,
      doBack,
    } = this.props;
    const {
      initial,
      searchValue,
    } = this.state;

    if (!initial) {
      return null;
    }

    return (
      <div className={[styles.wrapper, showBg ? styles.wrapperBgShow : styles.wrapperBgHide].join(' ')}>
        <div className={styles.formContainer}>
          <Form className={styles.form} onSubmit={this._handleSearchRestaurant}>
            <Input
              fluid
              className={styles.input}
              action={SEARCHBOX.input.action}
              placeholder={SEARCHBOX.input.placeholder}
              value={searchValue}
              onChange={(e) => this._handleChangeValue(e)}
            />
          </Form>
          {
            !!searchValue ? (
              <Button
                className={styles.searchBtn}
                icon="delete"
                onClick={() => this._handleClearValue()}
                loading={searching}
              />
            ) : null
          }
        </div>
        {
          pageType === PAGE_TYPES.detail ? (
            <div className={styles.backResults} onClick={() => doBack()}>
              <span className={styles.text}>{BACK_RESULTS_TEXT}</span>
            </div>
          ) : null
        }
      </div>
    );
  }
}

SearchBoxComponent.propTypes = {
  searching: PropTypes.bool,
  showBg: PropTypes.bool,
  doSearch: PropTypes.func,
  doClear: PropTypes.func,
};

SearchBoxComponent.defaultProps = {
  searching: false,
  showBg: false,
};

export default SearchBoxComponent;
