import { PERMISSION_GROUPS } from "../data/permissionsGroup";

export default function PermissionMatrix({ selected, onToggle }) {

  return (
    <div className="perm-matrix">

      {PERMISSION_GROUPS.map(group => (
        <div key={group.name} className="perm-group">

          <h4>{group.name}</h4>

          <div className="perm-list">

            {group.permissions.map(p => (
              <label key={p}>
                <input
                  type="checkbox"
                  checked={selected.includes(p)}
                  onChange={() => onToggle(p)}
                />
                {p}
              </label>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
}