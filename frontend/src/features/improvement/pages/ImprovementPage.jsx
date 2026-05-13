import { useState } from "react";

import useImprovement from "../hooks/useImprovement";

import ImprovementBoard from "../components/ImprovementBoard";
import ImprovementFilter from "../components/ImprovementFilter";
import ImprovementDetailDrawer from "../components/ImprovementDetailDrawer";

import "../styles/improvement.css";

export default function ImprovementPage() {

  const { grouped } = useImprovement();

  const [filters, setFilters] = useState({
    keyword: "",
    priority: "all",
    owner: "all",
  });

  const [selectedItem, setSelectedItem] =
    useState(null);

  return (

    <div className="im-page">

      <div className="im-page-header">

        <div>

          <h2>
            Cải tiến chất lượng
          </h2>

          <p>
            Quản lý tiến độ cải tiến
            theo từng tiêu chí và vấn đề
          </p>

        </div>

      </div>

      <ImprovementFilter
        filters={filters}
        setFilters={setFilters}
      />

      <ImprovementBoard
        grouped={grouped}
        filters={filters}
        onSelect={setSelectedItem}
      />

      <ImprovementDetailDrawer
        open={!!selectedItem}
        item={selectedItem}
        onClose={() =>
          setSelectedItem(null)
        }
      />

    </div>
  );
}