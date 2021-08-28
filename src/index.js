import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { SpeechProvider } from '@speechly/react-client'
// dev-pu8wyk-g.us.auth0.com
// 7vHgXJ01aWGyMVLWdZUwQSUapigdjfKu
ReactDOM.render(
  <SpeechProvider appId="815a8a5c-1ef3-4d00-916d-1948c9dd0a0a" language="en-US">
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
  </SpeechProvider>,

  document.getElementById('root')
)
