import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div>
      <p>Page not Found</p>
      <Link to={'/'}>Home Page</Link>
    </div>
  );
}
