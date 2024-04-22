export const Auth = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-4 d-flex flex-column">
          <h1>Welcome to weeks</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <button>Sign Up</button>
          <button>Sign In with Google</button>
          <button>Sign Out</button>
        </div>
      </div>
    </div>
  );
};
