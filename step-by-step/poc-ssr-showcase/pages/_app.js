import '../styles/globals.css'

const Server = {
  b2c: "http://api.12shop.com:1202",
  cdn: "http://cdn.12shop.com:1201",
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} config={{ server: Server }} />
}

export default MyApp
