export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 30,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none",
      }}>
      <div
        style={{
          fontFamily: "'Antonio', sans-serif",
          flex: "1 1 0%",
          height: 30,
          fontSize: 25,
          fontWeight: "700",
          lineHeight: "30px",
          color: "#ffb3b3",
          letterSpacing: -2,
        }}>
        <div style={{ marginBottom: "10px" }}>Fine Grained Consulting</div>
        <div style={{ marginBottom: "10px" }}>This is a sample</div>
        <div style={{ marginBottom: "10px" }}>Demo</div>
        <div style={{ marginBottom: "10px" }}>for React three-fiber</div>
        <div style={{ marginBottom: "10px" }}>And</div>
        <div style={{ marginBottom: "10px" }}>Rapier</div>
      </div>

      <div
        style={{
          fontFamily: "'Antonio', sans-serif",
          height: 100,
          width: "100%",
          fontSize: 25,
          fontWeight: "700",
          color: "#ffb3b3",
          letterSpacing: -2,
        }}>
        <p style={{ display: "flex", justifyContent: "end", fontSize: 50, lineHeight: "1em", color: "#ff6666", margin: 0, letterSpacing: 1 }}>
          Sample Animation with physics!!!
        </p>
      </div>
    </div>
  )
}

export function Overlay() {
  return (
    <div style={{ position: "absolute", bottom: 40, right: 40 }}>
      <p style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}></p>
    </div>
  )
}
