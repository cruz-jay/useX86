export default function ErrorElement() {
  // You can pass the error as a prop or use useRouteError() hook in your actual implementation
  const error = { statusText: "Not Found", message: "Page not found" };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}>
      <h1>Oops!</h1>

      <p
        style={{
          fontSize: "1.2rem",
          margin: "0 0 1rem 0",
          color: "#666",
        }}>
        Something went wrong.
      </p>

      <p
        style={{
          fontSize: "0.9rem",
          color: "#999",
          fontStyle: "italic",
          margin: "0",
        }}>
        {error?.statusText || error?.message || "An unexpected error occurred"}
      </p>
    </div>
  );
}
