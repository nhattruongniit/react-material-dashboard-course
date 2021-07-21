import { Route } from 'react-router-dom';

// views
import Login from 'views/login/Login';
import Register from 'views/register/Register';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
