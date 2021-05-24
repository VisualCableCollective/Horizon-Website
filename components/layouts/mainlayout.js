// Components
import Navbar from '../navbar';

export default function MainLayout({ children = null }) {
  return <div>
    <Navbar />
    {children}
  </div>;
}