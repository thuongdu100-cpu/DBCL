import { Download, FileText } from "lucide-react";

export default function ReportsExportBar({ onExport }) {

  const handle = (type) => {
    onExport?.(type);
  };

  return (
    <>
      <button className="export-btn" onClick={() => handle("pdf")}>
        <Download size={16} />
        Xuất file PDF
      </button>

      <button className="export-btn" onClick={() => handle("excel")}>
        <FileText size={16} />
        Xuất file Excel
      </button>

      <button className="export-btn primary" onClick={() => handle("create")}>
        Tạo báo cáo
      </button>
    </>
  );
}