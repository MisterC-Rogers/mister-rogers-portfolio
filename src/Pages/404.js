import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
const NotFound = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="notFoundContainer">
        <div className="not-found">
          <h1>404</h1>
          <h2>Oops! That page cannot be found :(</h2>
          <p>
            Redirecting to <Link to="/">Homepage</Link>...
          </p>
        </div>
      </div>
      <style jsx>{`
        .notFoundContainer {
          width: 90%;
          margin: 4rem auto 0;
          display: grid;
          place-items: center;
          height: calc(90vh - 100px);
        }
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          transform: rotateZ(-1deg);
          text-align: center;
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </>
  );
};

export default NotFound;
