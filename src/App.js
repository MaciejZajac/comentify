import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './helpers/Toggle/useDarkMode';
import { lightTheme, darkTheme } from './constants/theme';
import { GlobalStyles } from './global';
import Layout from './components/HOC/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import SignIn from './components/Auth/SignIn';
import ForgotPassword from './components/Auth/ForgotPassword';

function App() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Layout theme={theme} toggleTheme={toggleTheme}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Redirect from='/your-article' to='/' />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signin' component={SignIn} />
                    <Route
                        exact
                        path='/forgot-password'
                        component={ForgotPassword}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
