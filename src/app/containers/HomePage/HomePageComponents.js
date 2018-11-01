import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  List,
  Pagination,
  Icon,
  Dimmer,
  Dropdown,
} from 'semantic-ui-react';
import styles from './HomePage.module.scss';

const RESTAURANT_KEY_PREFIX = 'restaurant-';
const DIRECTION_TEXT = 'Directions';

const SlideContainer = ({
  children,
  show,
}) => {
  return (
    <div className={show ? styles.slideWrapperShow : styles.slideWrapperHide}>
      {children}
    </div>
  );
};

SlideContainer.propTypes = {
  show: PropTypes.bool,
};

const RestaurantItem = ({
  restaurant,
  onClickFunc,
}) => {
  const address = [
    restaurant.location.address,
    restaurant.location.locality,
    restaurant.location.city,
  ].join(', ');
  return (
    <List.Item
      onClick={() => {
        onClickFunc(restaurant.R.res_id);
      }}
    >
      <div className={styles.listItem}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h3>{restaurant.name}</h3>
          </div>
          <div className={styles.details}>
            <span>{restaurant.cuisines}</span>
            <span>{`${address}`}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={restaurant.thumb} />
        </div>
      </div>
    </List.Item>
  );
};

RestaurantItem.propTypes = {
  restaurant: PropTypes.object,
};

const RestaurantList = ({
  restaurants,
  onItemClickFunc,
}) => {
  return (
    <List className={styles.list}>
      {
        restaurants.map((item) => (
          <RestaurantItem
            key={`${RESTAURANT_KEY_PREFIX}${item.restaurant.id}`}
            restaurant={item.restaurant}
            onClickFunc={onItemClickFunc}
          />
        ))
      }
    </List>
  );
};

RestaurantList.propTypes = {
  restaurants: PropTypes.oneOfType([
    ImmutablePropTypes.list,
    PropTypes.array,
  ]),
};

RestaurantList.defaultProps = {
  restaurants: [],
};

const PaginationComponent = ({
  activePage,
  totalPages,
  pageChange,
}) => {
  if (totalPages === 0) {
    return null;
  }
  return (
    <Pagination
      className={styles.pagination}
      activePage={activePage}
      ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
      firstItem={{ content: <Icon name='angle double left' />, icon: true }}
      lastItem={{ content: <Icon name='angle double right' />, icon: true }}
      prevItem={null}
      nextItem={null}
      totalPages={totalPages}
      onPageChange={(e, data) => pageChange(data)}
    />
  );
};

const SortByComponent = ({
  show,
  value,
  options,
  soryByChange,
}) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.sortBy}>
      <Dropdown
        clearable
        options={options}
        selection
        value={value}
        onChange={(e, data) => soryByChange(data)}
      />
    </div>
  );
};

const RestaurantDetail = ({
  restaurant,
  onDirect,
}) => {
  const address = [
    restaurant.location.address,
    restaurant.location.locality,
    restaurant.location.city,
  ].join(', ');
  return (
    <div className={styles.detail}>
      <div className={styles.imgContent}><img className={styles.img} src={restaurant.featured_image} /></div>
      <div className={styles.header}>
        <div className={styles.directionWrapper} onClick={() => onDirect(restaurant.id, restaurant.location.latitude, restaurant.location.longitude)}>
          <div className={styles.directionDes}>
            <Icon name="location arrow" className={styles.direction} />
          </div>
          <label className={styles.text}>{DIRECTION_TEXT}</label>
        </div>
        <h1 className={styles.title}>{restaurant.name}</h1>
        <span className={styles.cuisines}>{restaurant.cuisines}</span>
      </div>
      <div className={styles.address}>
        <Icon name="map marker alternate" className={styles.icon} />
        <span className={styles.text}>{`${address}`}</span>
      </div>
    </div>
  );
};

export {
  SlideContainer,
  RestaurantList,
  PaginationComponent,
  SortByComponent,
  RestaurantDetail,
};