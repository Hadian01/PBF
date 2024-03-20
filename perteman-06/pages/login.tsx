import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../redux/auth/authSlice';
import "bootstrap/dist/css/bootstrap.min.css";
import parse from 'html-react-parser';

interface RootState {
  auth: {
    isLogin: boolean;
  };
}

export default function LoginCheck() {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  function handleAuth(type: string) {
    if (type === 'logout' || type === 'login') {
      dispatch(setLogin({ isLogin: type === 'login' ? true : false }));
    }
  }
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-3">
            <div className="card-header">Status Login</div>
            <div className="card-body">
              {isLogin ? (
                // Jika berhasil login (isLogin = true)
                <>
                  <div className="alert alert-success">Yay, berhasil login!!!</div>
                  <button className="btn btn-md btn-danger" onClick={() => handleAuth('logout')}>Log out</button>
                </>
              ) : (
                // Jika telah logout (isLogin = false)
                <>
                  {parse('<div class="alert alert-dark">Anda telah logout!</div>')}
                  <button className="btn btn-md btn-primary" onClick={() => handleAuth('login')}>Log in</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
