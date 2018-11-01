import DocumentMeta from 'react-helmet';
import style from './App.module.scss';

const log = debug('App.js');

const metaData = {
  defaultTitle: 'Restaurants Finder in Map',
  titleTemplate: '%s | Restaurants Finder',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
    {
      name: 'description',
      content: 'Restaurants Finder, a web site to find the restaurants in map',
    },
    {
      name: 'keywords',
      content: 'restaurants',
    },
  ],
};

const App = ({ children }) => {
  log('render');
  return (
    <div className={style.app}>
      <DocumentMeta {...metaData} />
      <main className={style.content}>
        {children}
      </main>
    </div>
  );
};

export default App;
