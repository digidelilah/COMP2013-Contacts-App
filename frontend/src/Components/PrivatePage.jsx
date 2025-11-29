import { Link } from "react-router-dom";

export default function PrivatePage() {
  return (
    <div>
      <h1>This is a Private Page</h1>
      <Link to="/">Back to home Page</Link>
    </div>
  );
}
