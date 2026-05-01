import { Button } from "react-bootstrap";

function CustomButton({ children, onClick, variant = "primary" }) {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
}

export default CustomButton;