// Components
import Navbar from '../navbar';
import Sidebar from '../sidebar';

export default function MainLayout({ children = null }) {
  return <div>
    <Navbar />
    <Sidebar />
    {children}
    <div style={{height: "200vh"}}>

    </div>
  </div>;
}