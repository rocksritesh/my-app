function Header({ headerInfo, cname, children }) {
  return (
    <div>
      {/* welcome to my world | {props.email} | {props.phone} */}
      welcome to my world | {headerInfo.school} | {cname}
      {children}
    </div>
  );
}
export default Header;
