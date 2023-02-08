import '../styles/globals.css'

const Server = {
  b2c: "http://localhost:1202",
  cdn: "http://localhost:1201",
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} config={{ server: Server }} />
}

export default MyApp
