import { useState } from "react";

export default function EvidenceForm({ onSubmit }) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button
        onClick={() => {
          onSubmit({
            title,
            description: desc,
            createdBy: "faculty"
          });
        }}
      >
        Submit
      </button>
    </div>
  );
}