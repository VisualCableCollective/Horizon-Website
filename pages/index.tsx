import { HorizonAPIClient, HorizonAPIClientConfig, Environment, Team } from 'horizon-api-client';
import { MainLayout } from '../components/layouts/MainLayout';
import { PreviewStyle, ProductPreviewItem } from '../components/store/products/ProductPreviewItem';
import { GetStaticProps, InferGetStaticPropsType  } from 'next';


export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  let vccTeam = new Team(JSON.parse(props.vccTeamData));

  return (
    <MainLayout>
      <div className="news-wrapper h-96 rounded bg-center bg-cover w-full" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80")' }}>
        <div className="flex justify-center items-center bg-black bg-opacity-40 h-full rounded">
          <div className="max-w-screen-md shadow">
            <h1 className="text-4xl font-bold text-center mb-2">Welcome to the Horizon App Store!</h1>
            <p className="text-center">The Horizon storefront is currently under heavy development. You can find the latest information about our development progress on our website and on our Discord server.</p>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold mb-4 mt-6">Products by The VisualCable Collective</h1>
      <div className="products-row flex flex-wrap gap-4">
        {vccTeam.products && vccTeam.products.map((product) => {
          product.creator = vccTeam;
          return <ProductPreviewItem key={product.id} style={PreviewStyle.Store} product={product} />;
        })}
      </div>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new HorizonAPIClient(new HorizonAPIClientConfig(0, '', Environment.LocalDevelopment));

  const vccTeamData = await (await client.getTeam(1, true)).data;

  // the whole parsing is shitty but the Date type in the Team model seems to cause issues
  const parsedData = JSON.stringify(vccTeamData);

  return {
    props: {
      vccTeamData: parsedData,
    },
    revalidate: 1, // data never older than 10 seconds
  };
};
