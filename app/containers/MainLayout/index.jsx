import React, { useEffect, memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'containers/HomePage';
import FavouritesPage from 'containers/FavouritesPage';
import { fetchFavourites } from 'hooks/useFavourites';

import { Layout, MainContent } from './MainContent';
import { GlobalStyle } from '../../global-styles';

export default memo(function MainLayout() {
  useEffect(() => {
    fetchFavourites();
  }, []);
  return (
    <Layout>
      <Header />
      <MainContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/favourites" component={FavouritesPage} />
        </Switch>
      </MainContent>
      <Footer />
      <GlobalStyle />
    </Layout>
  )
})
