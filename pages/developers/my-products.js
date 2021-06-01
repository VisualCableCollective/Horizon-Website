import MainLayout from '../../components/layouts/mainlayout';

export default function MyProducts({isUserAuthenticated}) {
  return (
    <MainLayout isUserAuthenticated={isUserAuthenticated}>
      <h1>My products</h1>
    </MainLayout>
  )
}