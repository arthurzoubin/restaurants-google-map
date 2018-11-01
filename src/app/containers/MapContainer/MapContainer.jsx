import React from 'react';
import PropTypes from 'prop-types';
import {
  MapComponent,
  LoadingComponent,
} from './MapContainerComponents';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: false,
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    this.setState({
      initial: true,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    const {
      restaurants,
      map,
    } = this.props;
    const {
      height,
      initial
    } = this.state;

    if (!initial) {
      return null;
    }
    return (
      <div style={{ height: `${height}px` }}>
        <MapComponent
          restaurants={restaurants}
          map={map}
        />
      </div>
    );
  }
}

export default MapContainer;