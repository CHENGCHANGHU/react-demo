export function Content(props) {
  const { children } = props;
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      { children }
    </div>
  );
}
