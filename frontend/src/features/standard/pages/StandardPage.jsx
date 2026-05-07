import { useState } from "react";
import { mockStandards } from "../data/mockData";

import StandardList from "../components/StandardList";
import CriteriaList from "../components/CriteriaList";
import IndicatorList from "../components/IndicatorList";
import DetailPanel from "../components/DetailPanel";

import "../styles/standard.css";

export default function StandardPage() {
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [selectedCriteria, setSelectedCriteria] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const criteria = selectedStandard?.criteria || [];
  const indicators = selectedCriteria?.indicators || [];

  return (
    <div className="standard-layout">

      {/* LEFT - STANDARD */}
      <div className="col-list">
        <h3>Tiêu chuẩn</h3>

        <StandardList
          data={mockStandards}
          selected={selectedStandard}
          onSelect={(s) => {
            setSelectedStandard(s);
            setSelectedCriteria(null);
            setSelectedIndicator(null);
          }}
        />
      </div>

      {/* MIDDLE - DRILL DOWN CONTEXT */}
      <div className="col-workspace">

        {!selectedStandard && (
          <div className="empty">
            Chọn một tiêu chuẩn để bắt đầu
          </div>
        )}

        {selectedStandard && (
          <>
            <h3>Tiêu chí</h3>

            <CriteriaList
              data={criteria}
              selected={selectedCriteria}
              onSelect={(c) => {
                setSelectedCriteria(c);
                setSelectedIndicator(null);
              }}
            />

            {selectedCriteria && (
              <>
                <h3>Chỉ số đánh giá</h3>

                <IndicatorList
                  data={indicators}
                  selected={selectedIndicator}
                  onSelect={(i) => setSelectedIndicator(i)}
                />
              </>
            )}
          </>
        )}

      </div>

      {/* RIGHT - DETAIL */}
      <div className="col-detail">
        <DetailPanel
          standard={selectedStandard}
          criteria={selectedCriteria}
          indicator={selectedIndicator}
        />
      </div>

    </div>
  );
}