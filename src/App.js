
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import Layout from './components/Layout/Layout';
import Login from './containers/Users/Login/Login';
import Register from './containers/Users/Register/Register';
import Posts from './containers/Forum/Posts/Posts';
import AddNewPost from './containers/Forum/AddNewPost/AddNewPost';
import SinglePost from './containers/Forum/Posts/SinglePost/SinglePost';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Container>
          <Layout>
            <Redirect from='/' to='/posts'/>
            <Route exact path='/posts/' component={Posts}/>
            <Route exact path='/posts/:id' component={SinglePost}/>
            <Route exact path='/addNewPost' component={AddNewPost}/>
            <Route exact path='/user/login' component={Login} />
            <Route exact path='/user/register/' component={Register} />
          </Layout>
        </Container>
      </Switch>
    </div>
  );
}

export default App;
