import {
  Dimmer,
  Loader,
} from 'semantic-ui-react';

const LOADING_TEXT = 'Loading...';

const LoaderComponent = ({
  active
}) => (
  <Dimmer active={active} >
    <Loader>{LOADING_TEXT}</Loader>
  </Dimmer>
);

export default LoaderComponent;