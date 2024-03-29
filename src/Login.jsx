import { Link } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
export const Login = () => {
  return (
    <div className="w-100 position-absolute top-50 start-50 translate-middle">
      {/* <h2>Please log in to view restricted content.</h2> */}
      <div className="align ">
        <div className="grid">
          <form
            action="https://httpbin.org/post"
            method="POST"
            className="form login"
          >
            <h1 className="text-center text-black"> Login Here</h1>
            <div className="form__field">
              <input
                autocomplete="username"
                id="login__username"
                type="text"
                name="username"
                className="form__input"
                placeholder="Username"
                required
              />
            </div>

            <div className="form__field">
              <input
                autocomplete="password"
                id="login__password"
                type="password"
                name="password"
                className="form__input"
                placeholder="Password"
                required
              />
            </div>

            <div className="bg-orange-600 rounded-md">
              <input type="submit" value="Login" />
            </div>
          </form>

          <p className="text--center my-2">
            <Link to="/" className="text-black no-underline ">
              Cancel
            </Link>{" "}
            ? <Link to="/signUp">Sign up now</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
