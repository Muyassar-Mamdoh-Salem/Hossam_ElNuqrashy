import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website showcasing my work and skills." />
        <meta name="keywords" content="portfolio, web developer, projects, React" />
      </Helmet>
      
      <Hero />
      <Gallery />
    </>
  );
};

export default Home;
