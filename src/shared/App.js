
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../pages/Main";
import PostWrite from "../pages/PostWrite";
import PostEdit from "../components/PostEdit";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UserProfile from "../pages/UserProfile";
import { history } from "../redux/configureStore";
import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <GlobalStyles />
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/write" component={PostWrite} />
          <Route exact path="/edit" component={PostEdit} />
          <Route exact path="/profile" component={UserProfile} />
          <Footer />
        </ConnectedRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
