import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";


function LoginScreen() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginstate = useSelector(state => state.loginUserReducer)
  const { error, loading } = loginstate

  const dispatch = useDispatch();

  useEffect(() => {

    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }

  }, []);

  function login() {
    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-body rounded">
          <h2 className="text-center m-3" style={{ fontSize: "32px" }}>
            Login Here
          </h2>

          {loading && (<Loading />)}
          {error && (<Error error='Invalid Credentials' />)}


          <div>
            <input
              required
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary mt-3 mb-3" onClick={login}>
              LOGIN
            </button> <br />
            <a style={{ color: 'black' }} className="mt-2" href="/register">New User?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
