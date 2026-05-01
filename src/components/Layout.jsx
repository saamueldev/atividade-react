import { Container } from "react-bootstrap";
import AppNavbar from "./AppNavbar";

function Layout({ children }) {
  return (
    <>
      <AppNavbar />

      <Container className="py-4">
        {children}
      </Container>
    </>
  );
}

export default Layout;