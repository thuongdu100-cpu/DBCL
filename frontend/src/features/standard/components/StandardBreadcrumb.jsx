import { Link, useLocation } from "react-router-dom";

export default function StandardBreadcrumb() {

  const { pathname } = useLocation();

  const paths = pathname
    .split("/")
    .filter(Boolean);

  // /dbcl/standard/S1/C1/I1
  const standardId = paths[2];
  const criteriaId = paths[3];
  const indicatorId = paths[4];

  return (
    <div className="stack-header">

      {/* ROOT */}
      <Link
        to="/dbcl/standard"
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
            to={`/dbcl/standard/${standardId}`}
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
            to={`/dbcl/standard/${standardId}/${criteriaId}`}
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