import { useNavigate } from "react-router-dom";

import EvidenceForm from "../components/EvidenceForm";

export default function SubmitEvidencePage() {

  const navigate = useNavigate();

  /* ======================================================
     SUBMIT
  ====================================================== */

  const handleSubmit = (formData) => {

    console.log("SUBMIT EVIDENCE:", formData);

    /*
      Future:
      - upload file
      - call API
      - create workflow
      - notify reviewer
    */

    navigate("/evidence");
  };

  /* ======================================================
     RENDER
  ====================================================== */

  return (

    <section className="evidence-page">

      {/* HEADER */}
      <div className="evidence-page-header">

        <div>

          <h2>
            Nộp minh chứng
          </h2>

          <p>
            Tạo và tải lên minh chứng phục vụ kiểm định chất lượng
          </p>

        </div>

      </div>

      {/* FORM */}
      <div className="evidence-submit-wrapper">

        <EvidenceForm
          onSubmit={handleSubmit}
        />

      </div>

    </section>
  );
}