import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto py-16 px-6">

        <h1 className="text-5xl font-bold">

          Welcome to Blog Platform

        </h1>

        <p className="mt-4 text-gray-600">

          Read amazing blogs and share your own stories.

        </p>

      </section>

    </MainLayout>
  );
}

export default Home;