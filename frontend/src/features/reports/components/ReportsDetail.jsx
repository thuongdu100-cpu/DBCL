export default function ReportsDetail({ item }) {
  if (!item) return null;

  return (
    <div className="panel">

      <h3>{item.title}</h3>

      <p><b>Mã:</b> {item.id}</p>
      <p><b>Loại:</b> {item.type}</p>
      <p><b>Ngày tạo:</b> {item.createdAt}</p>

    </div>
  );
}