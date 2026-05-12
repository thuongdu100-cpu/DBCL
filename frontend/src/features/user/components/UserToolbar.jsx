export default function UserToolbar({ search, setSearch, onCreate }) {
  return (
    <div className="user-toolbar">

      <input
        className="user-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Tìm username, email..."
      />

      <div className="toolbar-actions">
        <button className="action-btn create" onClick={onCreate}>
          + Tạo User
        </button>
      </div>

    </div>
  );
}