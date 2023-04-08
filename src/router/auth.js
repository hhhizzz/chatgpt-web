import * as Msal from 'msal'

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_APP_ID,
    authority: 'https://login.microsoftonline.com/common',
  },
}

const loginRequest = {
  scopes: ['openId', 'profile', 'User.Read'],
}

const msalInstance = new Msal.UserAgentApplication(msalConfig)

function logout() {
  msalInstance.logout()
}

export { msalInstance, loginRequest, logout }
