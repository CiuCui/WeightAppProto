import {useState} from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { UserContext } from '../contexts/userContext';
import { v4 as uuidv4 } from 'uuid';



function MyApp({ Component, pageProps }) {

  let generatedId = uuidv4();
  const [user, setUser] = useState(generatedId)
 

  return (
    <UserContext.Provider value={user}>
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </UserContext.Provider>
  )
}

export default MyApp
