
import { Link, useLocation } from "react-router-dom";

export default function StandardBreadcrumb() {

  const { pathname } = useLocation();

  const paths = pathname
    .split("/")
    .filter(Boolean);

  const standardId = paths[1];
  const criteriaId = paths[2];
  const indicatorId = paths[3];

  return (

    <div className="stack-header">

      {/* ROOT */}
      <Link
        to="/standard"
        className="breadcrumb-root"
      >
        Bộ tiêu chuẩn
      </Link>

      {/* STANDARD */}
      {standardId && (
        <>
          <span className="breadcrumb-separator">
            /
          </span>

          <Link
            to={`/standard/${standardId}`}
            className="breadcrumb-item"
          >
            {standardId}
          </Link>
        </>
      )}

      {/* CRITERIA */}
      {criteriaId && (
        <>
          <span className="breadcrumb-separator">
            /
          </span>

          <Link
            to={`/standard/${standardId}/${criteriaId}`}
            className="breadcrumb-item"
          >
            {criteriaId}
          </Link>
        </>
      )}

      {/* INDICATOR */}
      {indicatorId && (
        <>
          <span className="breadcrumb-separator">
            /
          </span>

          <span className="breadcrumb-item active">
            {indicatorId}
          </span>
        </>
      )}

    </div>
  );
}

