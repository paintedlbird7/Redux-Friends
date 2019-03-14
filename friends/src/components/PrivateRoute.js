import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Requirements:
// 1. It has the same API as <Route />.
// 2. It renders a <Route /> and passes all the props through to it.
// 3. It checks if the user is authenticated, if they are, it renders
// the “component” prop. If not, it redirects the user to /login.
const PrivateRoute = ({ component: Component, errorStatusCode, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token') && errorStatusCode !== 403) {
          return <Component />;
        } else {
          // redirect
          console.log('redirecting!!!');
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const mapStateToProps = state => ({
  errorStatusCode: state.errorStatusCode
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);
