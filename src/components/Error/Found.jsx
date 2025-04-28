import React from "react";
import "./Found.scss";
import { Link, useNavigate } from "react-router-dom";

function Found() {
  const navigate = useNavigate();

  return (
    <div className="eror1">
      <div className="eror2">
        <h1>404</h1>
        <h6>кажется, такой страницы нет</h6>
        <div className="buttons">
          <button onClick={() => navigate(-1)}>Назад</button>
          <Link to={"/"}>
            <button>На главную</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Found;
