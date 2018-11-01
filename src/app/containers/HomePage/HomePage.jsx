import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HeaderComponent from 'app/components/Header';
import MapContainer from '../MapContainer';
import LoaderComponent from '../../components/Loading';
import SearchBoxComponent from '../../components/SearchBox';
import {
  SlideContainer,
  RestaurantList,
  PaginationComponent,
  SortByComponent,
  RestaurantDetail,
} from './HomePageComponents';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectNearbyRestaurants,
  makeSelectRestaurants,
  makeSelectSearchTotal,
  makeSelectSearching,
  makeSelectRestaurant,
  makeSelectFetchingDetail,
} from '../../selectors/homePage';
import {
  getNearby,
  getRestaurantsBySearch,
  getRestaurantDetail,
  clearRestaurantsBySearch,
} from '../../actions/homePage';
import {
  DEFAULT_LOCATION
} from '../../appConstants/locationConstants';
import { PAGE_TYPES } from '../../appConstants';
import styles from './HomePage.module.scss';

const SEARCH_START = 0;
const SEARCH_COUNT_PER_PAGE = 20;
const ACTIVE_PAGE = 1;
const SORY_BY_OPTIONS = [
  { key: 1, text: 'Cost', value: 'cost' },
  { key: 2, text: 'Rating', value: 'rating' },
  { key: 3, text: 'Distance', value: 'real_distance' },
];
const RESTAURANT_DETAIL_MAP_ZOOM = 16;

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initial: false,
      width: 0,
      height: 0,
      pageType: PAGE_TYPES.nearby,
      searchValue: '',
      searchSort: SORY_BY_OPTIONS[2].value,
      searchPage: 1,
      map: null,
    };
  }

  componentDidMount() {
    this.setState({
      initial: true,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    this._handleNearByRestaurants();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searching && !nextProps.searching) {
      this.setState({
        pageType: PAGE_TYPES.search
      });
    }
    if (this.props.fetchingDetail && !nextProps.fetchingDetail) {
      this.setState({
        pageType: PAGE_TYPES.detail
      });
    }
  }

  _handleNearByRestaurants() {
    const { getNearby } = this.props;
    getNearby({
      lat: DEFAULT_LOCATION.lat,
      lon: DEFAULT_LOCATION.lng,
    });
  }

  handleSearchRestaurants(payload) {
    const { getRestaurantsBySearch } = this.props;
    const {
      searchValue,
      searchPage,
      searchSort,
    } = this.state;
    const params = {
      lat: DEFAULT_LOCATION.lat,
      lon: DEFAULT_LOCATION.lng,
      start: (searchPage - 1) * SEARCH_COUNT_PER_PAGE,
      count: SEARCH_COUNT_PER_PAGE,
      sort: searchSort,
      q: searchValue,
      ...payload,
    };
    this.setState({
      searchValue: params.q,
      searchPage: (params.start / SEARCH_COUNT_PER_PAGE) + 1,
      searchSort: params.sort,
    });
    getRestaurantsBySearch(params);
  }

  handleClearSearchRestaurants() {
    const { clearRestaurantsBySearch } = this.props;
    this.setState({
      pageType: PAGE_TYPES.nearby,
      searchValue: '',
      searchSort: SORY_BY_OPTIONS[2].value,
      searchPage: ACTIVE_PAGE,
    });
    clearRestaurantsBySearch();
  }

  handlePageChange(data) {
    const { searchValue } = this.state;
    const page = data.activePage;
    const payload = {
      start: (page - 1) * SEARCH_COUNT_PER_PAGE,
    };
    this.handleSearchRestaurants(payload);
  }

  handleSortByChange(data) {
    const { searchValue } = this.state;
    const sortBy = data.value;
    const payload = {
      start: SEARCH_START,
      sort: sortBy,
    };
    this.handleSearchRestaurants(payload);
  }

  handleRestaurantItem(id) {
    const {
      getRestaurantDetail,
      clearRestaurantsBySearch,
    } = this.props;
    const payload = {
      res_id: id,
    };
    getRestaurantDetail(payload);
  }

  handleBackToSearch() {
    this.setState({
      pageType: PAGE_TYPES.search,
      map: null,
    });
  }

  handleDirections(id, lat, lng) {
    this.setState({
      map: {
        id,
        center: {
          lat: Number(lat),
          lng: Number(lng),
        },
        zoom: RESTAURANT_DETAIL_MAP_ZOOM,
      },
    });
  }

  _renderSearchList() {
    const {
      restaurants,
      searching,
      searchTotal,
    } = this.props;
    const {
      searchPage,
      searchSort,
    } = this.state;
    const totalPages = Math.ceil(searchTotal / SEARCH_COUNT_PER_PAGE);
    return (
      <div className={styles.listContainer}>
        <LoaderComponent
          active={searching && totalPages > 0}
        />
        <SortByComponent
          show={restaurants.length > 0}
          value={searchSort}
          options={SORY_BY_OPTIONS}
          soryByChange={(data) => this.handleSortByChange(data)}
        />
        <RestaurantList
          restaurants={restaurants}
          count={SEARCH_COUNT_PER_PAGE}
          onItemClickFunc={(id) => this.handleRestaurantItem(id)}
        />
        <PaginationComponent
          activePage={searchPage}
          totalPages={totalPages}
          pageChange={(data) => this.handlePageChange(data)}
        />
      </div>
    );
  }

  _renderDetail() {
    const { restaurant } = this.props;
    return (
      <RestaurantDetail
        restaurant={restaurant}
        onDirect={(id, lat, lng) => this.handleDirections(id, lat, lng)}
      />
    );
  }

  _renderPage() {
    const { pageType } = this.state;
    switch (pageType) {
      case PAGE_TYPES.search: {
        return this._renderSearchList();
        break;
      }
      case PAGE_TYPES.detail: {
        return this._renderDetail();
        break;
      }
      default: {
        return null;
      }
    }
  }

  render() {
    const {
      restaurants,
      nearbyRestaurants,
      searching,
      searchTotal,
      fetchingDetail,
      restaurant,
    } = this.props;
    const {
      initial,
      height,
      pageType,
      map,
    } = this.state;
    if (!initial) {
      return null;
    }

    const mapRestaurants = restaurants.length > 0 ? restaurants : nearbyRestaurants;

    return (
      <div>
        <SlideContainer
          show={pageType !== PAGE_TYPES.nearby}
        >
          <SearchBoxComponent
            pageType={pageType}
            searching={searching || fetchingDetail}
            showBg={pageType === PAGE_TYPES.search && restaurants.length > 0}
            doSearch={(payload) => this.handleSearchRestaurants(payload)}
            doClear={() => this.handleClearSearchRestaurants()}
            doBack={() => this.handleBackToSearch()}
          />
          {this._renderPage()}
        </SlideContainer>
        <MapContainer
          restaurants={mapRestaurants}
          map={map}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  loading: PropTypes.bool,
  restaurants: PropTypes.oneOfType([
    ImmutablePropTypes.list,
    PropTypes.array,
  ]),
  nearbyRestaurants: PropTypes.oneOfType([
    ImmutablePropTypes.list,
    PropTypes.array,
  ]),
  searching: PropTypes.bool,
  getNearby: PropTypes.func,
  getRestaurantsBySearch: PropTypes.func,
  clearRestaurantsBySearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  loading: makeSelectLoading(),
  restaurants: makeSelectRestaurants(),
  nearbyRestaurants: makeSelectNearbyRestaurants(),
  searchTotal: makeSelectSearchTotal(),
  searching: makeSelectSearching(),
  restaurant: makeSelectRestaurant(),
  fetchingDetail: makeSelectFetchingDetail(),
})

const mapDispatchToProps = dispatch => ({
  getNearby: (payload) => {
    dispatch(getNearby(payload))
  },
  getRestaurantsBySearch: (payload) => {
    dispatch(getRestaurantsBySearch(payload))
  },
  clearRestaurantsBySearch: () => dispatch(clearRestaurantsBySearch()),
  getRestaurantDetail: (payload) => dispatch(getRestaurantDetail(payload)),
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
