import EvidenceStatusBadge from "./EvidenceStatusBadge";

export default function EvidenceRepositoryTable({

  data = [],
  onView,

}) {

  return (

    <div className="evidence-table-wrapper">

      <table className="evidence-table">

        <thead>

          <tr>

            <th>Mã</th>

            <th>Tiêu đề</th>

            <th>Tiêu chuẩn</th>

            <th>Phòng ban</th>

            <th>Người tải lên</th>

            <th>Trạng thái</th>

            <th>Cập nhật</th>

            <th>Thao tác</th>

          </tr>

        </thead>

        <tbody>

          {data.length === 0 ? (

            <tr>

              <td
                colSpan="8"
                className="evidence-table-empty"
              >
                Không có dữ liệu minh chứng
              </td>

            </tr>

          ) : (

            data.map((item) => (

              <tr
                key={item.id}
                className="evidence-table-row"
              >

                {/* CODE */}
                <td>
                  {item.code}
                </td>

                {/* TITLE */}
                <td>

                  <div className="evidence-title-group">

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.criterion}
                    </span>

                  </div>

                </td>

                {/* STANDARD */}
                <td>
                  {item.standard}
                </td>

                {/* DEPARTMENT */}
                <td>
                  {item.department}
                </td>

                {/* UPLOADER */}
                <td>

                  <div className="evidence-user-group">

                    <strong>
                      {item.uploadedBy}
                    </strong>

                    <span>
                      {item.uploaderRole}
                    </span>

                  </div>

                </td>

                {/* STATUS */}
                <td>

                  <EvidenceStatusBadge
                    status={item.status}
                  />

                </td>

                {/* UPDATED */}
                <td>
                  {item.updatedAt}
                </td>

                {/* ACTION */}
                <td>

                  <button
                    className="evidence-view-btn"
                    onClick={() => onView?.(item)}
                  >
                    Chi tiết
                  </button>

                </td>

              </tr>
            ))

          )}

        </tbody>

      </table>

    </div>
  );
}