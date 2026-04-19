import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 32px;
  cursor: ${({ variant }) => (variant !== "tertiary" ? "pointer" : "auto")};
  font-size: ${({ variant }) => (variant === "tertiary" ? "14px" : "16px")};
  font-weight: ${({ variant }) => (variant === "tertiary" ? "600" : "")};
  padding: ${({ variant }) =>
    variant === "tertiary"
      ? "6px 20px"
      : variant !== "pricing-gradient" && variant !== "pricing-dark"
        ? "8px 24px"
        : "5px 10px"};

  width: ${({ variant }) =>
    variant === "pricing-gradient" || variant === "pricing-dark"
      ? "100%"
      : "fit-content"};

  height: ${({ variant }) =>
    variant === "pricing-gradient" || variant === "pricing-dark"
      ? "36px"
      : "auto"};

  color: ${({ variant }) =>
    variant === "secondary"
      ? "#3B82F6"
      : variant === "tertiary"
        ? "#3B82F6"
        : variant === "bordered-secondary"
          ? "#6B7280"
          : "#fff"};

  background: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "#3B82F6";
      case "secondary":
        return "#fff";
      case "tertiary":
        return "#3B82F60D";
      case "pricing-dark":
        return "black";
      case "pricing-gradient":
        return "linear-gradient(10deg, #3B82F6 0%, #1E3A5F 100%)";
      case "bordered-secondary":
        return "white";

      case "pricing-transparent":
        return "transparent";
      default:
        return "#3B82F6";
    }
  }};

  border: ${({ variant }) =>
    variant === "pricing-dark" 
      ? "2px solid rgba(255, 255, 255, 0.15)"
      : variant === "tertiary"
        ? "1px solid rgba(59, 130, 246, 0.3)"
        : variant === "bordered-secondary"
          ? "1px solid #0000001A"
          : "none"};

  box-shadow: ${({ variant }) => {
    switch (variant) {
      case "bordered-secondary":
        return "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
      case "pricing-gradient":
        return "2px 2px 5px rgba(59, 130, 246, 1)";
      default:
        return "none";
    }
  }};

  transition: all 0.25s ease;

  ${({ variant }) =>
    variant === "primary" &&
    `
      &:hover {
        background: #2563EB;
      }
    `};

  ${({ variant }) =>
    (variant === "secondary" || variant === "bordered-secondary") &&
    `
    &:hover {
      background: #dadada;
    }
  `}

  ${({ variant }) =>
    variant === "pricing-dark" &&
    `
      &:hover {
        background: #111827;
        border-color: rgba(255, 255, 255, 0.3);
      }
    `}

  ${({ variant }) =>
    variant === "pricing-gradient" &&
    `
      &:hover {
        background: linear-gradient(10deg, #2563EB 0%, #0F172A 100%);
        box-shadow: 3px 3px 10px rgba(59, 130, 246, 0.7);
      }
    `}
`;
const Button = ({
  className = "",
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <StyledButton className={className} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
