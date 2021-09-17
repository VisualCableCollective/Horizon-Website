import Lottie from 'lottie-react';
import { MainLayout } from '../components/layouts/MainLayout';
import NotFoundAnimationData from '../assets/lotties/404.json';

export default function Custom404() {

  return (
    <MainLayout>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center">
          <Lottie className="max-w-xl" loop autoplay animationData={NotFoundAnimationData} />
          <div>
            <h1 className="text-3xl text-center font-semibold mt-16">Sorry, we couldn&apos;t find what you are looking for</h1>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}