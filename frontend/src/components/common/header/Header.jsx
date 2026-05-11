import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../../../auth/AuthContext";

export default function Header() {

  const [openUser, setOpenUser] = useState(false);

  const [openNoti, setOpenNoti] = useState(false);

  const userRef = useRef();

  const notiRef = useRef();

  const navigate = useNavigate();

  // AUTH
  const { user, logout } = useAuth();

  // CLOSE DROPDOWN WHEN CLICK OUTSIDE
  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        userRef.current &&
        !userRef.current.contains(e.target)
      ) {
        setOpenUser(false);
      }

      if (
        notiRef.current &&
        !notiRef.current.contains(e.target)
      ) {
        setOpenNoti(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  return (
    <header className="header">

      {/* LEFT */}
      <div className="header-title">
        Hệ thống đánh giá chất lượng 
      </div>

      {/* RIGHT */}
      <div className="header-right">

        {/* SEARCH */}
        <div className="search-box">

          <input
            placeholder="Tìm kiếm minh chứng, tiêu chí..."
          />

          <button>
            🔍
          </button>

        </div>

        {/* NOTIFICATION */}
        <div
          className="icon-wrapper"
          ref={notiRef}
        >

          <button
            onClick={() =>
              setOpenNoti(!openNoti)
            }
          >
            🔔
          </button>

          {openNoti && (
            <div className="dropdown">

              <div className="dropdown-item">
                📌 Có 3 thông báo mới
              </div>

              <div className="dropdown-item">
                ✔ Minh chứng cần duyệt
              </div>

              <div className="dropdown-item">
                ⚠ Quá hạn đánh giá
              </div>

            </div>
          )}

        </div>

        {/* USER */}
        <div
          className="user-wrapper"
          ref={userRef}
        >

          <button
            onClick={() =>
              setOpenUser(!openUser)
            }
          >
            👤 {user?.role || "guest"} ▼
          </button>

          {openUser && (
            <div className="dropdown">

              {/* PROFILE */}
              <div
                className="dropdown-item"
                onClick={() => {

                  setOpenUser(false);

                  navigate("/dbcl/profile");
                }}
              >
                Profile
              </div>

              {/* LOGOUT */}
              <div
                className="dropdown-item"
                onClick={() => {

                  logout();

                  navigate("/login");
                }}
              >
                Logout
              </div>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}