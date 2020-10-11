import React, { useEffect, useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, fetchUserDetails } from './actions';
import { ErrorBoundary } from './components/molecules';
import { Navbar } from './components/organisms';
import { UserList, UserDetails } from './components/templates';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.css';

function App() {
  const [input, setInput] = useState('enrique');
  const [user, setUser] = useState(null);
  const [chartData, setChartData] = useState([]);

  const usersList = useSelector((state) => state.usersList);
  const userDetails = useSelector((state) => state.userDetails);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleInput = (value) => {
    setInput(value);
  };

  const handleUser = (name) => {
    setUser(name);
  };

  const functionOrderChartData = () => {
    if (chartData.length === 19) {
      let orderChartData = [...chartData];
      orderChartData.sort((a, b) => b.followers - a.followers);
      let spliceArray = [...orderChartData];
      spliceArray.splice(10, 9);

      setChartData(spliceArray);
    }
  };

  useEffect(() => {
    dispatch(fetchUsers(input)); // eslint-disable-next-line
  }, [input]);

  useEffect(() => {
    dispatch(fetchUserDetails(user)); // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    if (usersList) {
      setChartData([]);

      usersList.items.map((user) => dispatch(fetchUserDetails(user.login)));
    }
    // eslint-disable-next-line
  }, [usersList]);

  useEffect(() => {
    if (userDetails) {
      setChartData(
        chartData.concat({
          login: userDetails.login,
          followers: userDetails.followers,
        })
      );

      functionOrderChartData();
    }
    // eslint-disable-next-line
  }, [userDetails]);

  const useAsyncError = () => {
    const [_, setError] = useState();

    return useCallback(
      (e) => {
        setError(() => {
          throw e;
        });
      },
      [setError]
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar action={handleInput} error={error} />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <UserList
                data={usersList}
                action={handleUser}
                chartData={chartData}
                handleError={useAsyncError}
              />
            )}
          />
          <Route
            exact
            path='/detail/:name'
            render={() => (
              <ErrorBoundary>
                <UserDetails data={userDetails} handleError={useAsyncError} />
              </ErrorBoundary>
            )}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
