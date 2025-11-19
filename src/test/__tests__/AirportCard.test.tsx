import { render, screen } from "@testing-library/react";
import AirportCard from "../../components/AirportCard";

describe("AirportCard", () => {
  const mockProps = {
    id: "123",
    name: "John F. Kennedy International Airport",
    city: "New York",
    country: "USA",
    iata: "JFK",
    airplaneIcon: "/airplane.svg",
    bgRightImage: "/bg.jpg",
  };

  it("renderiza el nombre del aeropuerto", () => {
    render(<AirportCard {...mockProps} />);
    expect(
      screen.getByText("John F. Kennedy International Airport")
    ).toBeInTheDocument();
  });

  it("renderiza la ciudad y país", () => {
    render(<AirportCard {...mockProps} />);
    expect(screen.getByText("New York, USA")).toBeInTheDocument();
  });

  it("renderiza el código IATA en mayúsculas", () => {
    render(<AirportCard {...mockProps} />);
    expect(screen.getByText("JFK")).toBeInTheDocument();
  });

  it("incluye el enlace correcto", () => {
    render(<AirportCard {...mockProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/airports/123");
  });
});
