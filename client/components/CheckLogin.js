import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

function checkLogin() {
  const username = window.localStorage.getItem('username');
  if (!username) {
    navigate('/error')
  }
}

export default checkLogin

// function RequireAuth({ children }) {
//   let auth = useAuth();
//   let location = useLocation();

//   if (!auth.user) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// }