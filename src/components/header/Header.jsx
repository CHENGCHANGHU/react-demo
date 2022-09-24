import logo from 'src/logo.svg';

export function Header(props) {
  const { children } = props;
  return (
    <div
      className="header-box"
      style={{
        width: '100vw',
        height: '48px',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        columnGap: '8px',
        paddingLeft: '16px',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)'
      }}
    >
      <img
        src={ logo }
        alt="Logo"
        style={{
          width: '40px',
          height: '40px',
        }}
      />
      <div
        style={{
          fontWeight: '500',
          color: '#666',
        }}
      >
        { children }
      </div>
    </div>
  );
}