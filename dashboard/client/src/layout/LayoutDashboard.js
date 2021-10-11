import Sidebar from "./sideBar";
import AuthMiddleware from "./AuthMiddleware";
function LayoutDashboard({ title, children }) {
  return (
    <AuthMiddleware>
      <div>
        <Sidebar />
        <section className="dahboard-container">
          <div className="text">{title}</div>
          {children}
        </section>
        <div className="dash-footer">
          <p>Powered by COMPANY NAME ©</p>
        </div>
      </div>
    </AuthMiddleware>
  );
}

export default LayoutDashboard;
