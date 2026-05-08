import { useState } from "react";
import { mockStandards } from "../data/mockData";
import TableBlock from "../components/TableBlock";
import "../styles/standard.css";

export default function StandardPage() {
  const [stack, setStack] = useState([]);
  const [data, setData] = useState(mockStandards);

  const push = (item) => setStack((p) => [...p, item]);
  const reset = () => setStack([]);
  const backTo = (index) =>
    setStack((p) => p.slice(0, index));

  const currentStandard = stack[0];

  // ================= CRUD =================
  const create = (item) =>
    setData((prev) => [item, ...prev]);

  const update = (item) =>
    setData((prev) =>
      prev.map((x) => (x.id === item.id ? item : x))
    );

  const remove = (id) =>
    setData((prev) =>
      prev.filter((x) => x.id !== id)
    );

  return (
    <div className="standard-stack">

      {/* ================= HEADER ================= */}
      <div className="stack-header">
        <span onClick={reset} className="breadcrumb-root">
          Bộ tiêu chuẩn
        </span>

        {stack.map((s, i) => (
          <span key={i} className="breadcrumb-item">
            {" / "}
            <span onClick={() => backTo(i + 1)}>
              {s.name}
            </span>
          </span>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="stack-content">

        {/* LEVEL 0 */}
        {stack.length === 0 && (
          <TableBlock
            title="Standards"
            data={data}
            onSelect={push}
            onCreate={create}
            onUpdate={update}
            onDelete={remove}
            renderMeta={(s) => s.year}
            showFields={{ name: true, description: true, year: true }}
          />
        )}
        
        {/* LEVEL 1 */}
        {stack.length === 1 && (
          <TableBlock
            title="Criteria"
            data={currentStandard?.criteria || []}
            onSelect={push}
            renderMeta={(c) => c.code || "-"}
            showFields={{ name: true, description: true, year: false }}
          />
        )}

        {/* LEVEL 2 */}
        {stack.length === 2 && (
          <TableBlock
            title="Indicators"
            data={stack[1]?.indicators || []}
            onSelect={push}
            renderMeta={(i) => i.value || "-"}
            showFields={{ name: true, description: true, year: false }}
          />
        )}

      </div>
    </div>
  );
}