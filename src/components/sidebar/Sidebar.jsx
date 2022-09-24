export function Sidebar(props) {
  const { catalogs } = props;
  return (
    <div
      style={{
        width: '240px',
        minWidth: '240px',
        height: 'calc(100vh - 48px)',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)',
      }}
    >
      Sidebar
    </div>
  );
};
