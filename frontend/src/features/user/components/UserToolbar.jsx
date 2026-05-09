
export default function UserToolbar({
  search,
  setSearch,
  onCreate,
}) {
  return (
    <div className="user-toolbar">

      {/* SEARCH */}
      <input
        className="user-search"
        placeholder="Tìm theo tên, email..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {/* RIGHT */}
      <div className="user-toolbar-right">

        <button
          className="user-create-btn"
          onClick={onCreate}
        >
          + Tạo User
        </button>

      </div>

    </div>
  );
}