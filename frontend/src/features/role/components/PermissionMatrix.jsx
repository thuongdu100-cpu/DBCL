import { PERMISSION_GROUPS } from "../data/permissionsGroup";

export default function PermissionMatrix({ selected = [], onToggle }) {

  return (
    <div className="role-perm-matrix">

      {PERMISSION_GROUPS.map(group => (

        <div key={group.name} className="role-perm-group">

          <h4 className="role-perm-title">
            {group.name}
          </h4>

          <div className="role-perm-list">

            {group.permissions.map(p => (

              <label key={p} className="role-perm-item">

                <input
                  type="checkbox"
                  checked={selected.includes(p)}
                  onChange={() => onToggle(p)}
                />

                <span className="role-perm-text">
                  {p}
                </span>

              </label>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}