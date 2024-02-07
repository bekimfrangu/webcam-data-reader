import WebcamComponent from './components/WebcamComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <h1 className="font-bold text-white">Welcome to My Driver License App</h1>
          <WebcamComponent />
      </main>
  );
}
