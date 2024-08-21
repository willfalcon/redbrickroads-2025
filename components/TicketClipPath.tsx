export default function TicketClipPath() {
  return (
    <svg className="clip-path-svg" style={{ position: 'absolute', width: 0, height: 0 }}>
      <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
        <path d="M-0.002,-0.048 m0.948,0.393 c-0.088,-0.174,-0.264,-0.301,-0.453,-0.322 c-0.154,-0.024,-0.255,0.05,-0.337,0.152 s-0.126,0.231,-0.144,0.362 c-0.009,0.069,-0.011,0.142,0.017,0.206 c0.036,0.08,0.116,0.131,0.197,0.163 c0.218,0.085,0.485,0.052,0.654,-0.111 c0.053,-0.051,0.096,-0.115,0.112,-0.188 c0.019,-0.088,-0.005,-0.181,-0.046,-0.262"></path>
      </clipPath>
    </svg>
  );
}