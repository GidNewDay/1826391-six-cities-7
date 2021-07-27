//компонент «Login», страница авторизации
import React, {useRef} from 'react';
import Header from '../header/header';
import {Link, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selector';

function SignIn() {
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? <Redirect to={AppRoute.ROOT}/>
      :
      <div className="page page--gray page--login">
        <Header/>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action=""
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required=""/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required=""/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="/">
                  <span>Amsterdam</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
  );
}

export default SignIn;
