export default function AssignmentDetail({ data }) {
  if (!data) return null;

  return (
    <div className="assign-detail">

      <h3>{data.name}</h3>

      <div className="box">
        <p><b>Loại:</b> {data.type}</p>
        <p><b>Trạng thái:</b> {data.status}</p>
        <p><b>Người phụ trách:</b> {data.assignee || "Chưa gán"}</p>
      </div>

      <div className="assign-actions">

        {/* USER */}
        <select>
          <option>Select user</option>
          <option>Admin</option>
          <option>Lecturer A</option>
          <option>QA Officer</option>
        </select>

        {/* ROLE DBCL */}
        <select>
          <option>Select role</option>
          <option>Owner</option>
          <option>Reviewer</option>
          <option>Approver</option>
        </select>

        <button>Assign</button>

      </div>

    </div>
  );
}