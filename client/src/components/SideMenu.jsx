import { NavLink } from "react-router-dom";

export default function SideMenu({ title = "Menu", items = [] }) {
  return (
    <aside style={{
      width: "260px",
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      paddingBottom: "8px",
      height: "fit-content",
      position: "sticky",
      top: "100px"
    }}>
      <div style={{
        padding: "14px 16px",
        borderBottom: "1px solid #e5e7eb",
        fontWeight: "700",
        fontSize: "17px",
        color: "#0c3566"
      }}>
        {title}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {items.map(([path, label]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => isActive ? "side-link active" : "side-link"}
            style={{
              padding: "12px 16px",
              textDecoration: "none",
              color: "#0c3566",
              borderBottom: "1px solid #f1f5f9",
              fontSize: "15px",
              transition: "0.3s"
            }}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
