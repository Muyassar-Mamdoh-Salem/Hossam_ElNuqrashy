import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>حسام النقراشي | مصور فوتوغرافي محترف</title>
        <meta
          name="description"
          content="الموقع الرسمي لحسام النقراشي، مصور فوتوغرافي متخصص في تصوير حفلات الزفاف، البورتريه، المنتجات، وجلسات التصوير الاحترافية."
        />
        <meta name="keywords" content="حسام النقراشي, مصور فوتوغرافي, تصوير زفاف, تصوير بورتريه, فوتوغرافيا, تصوير منتجات" />
      </Helmet>
      <h1>أهلا بك في موقع حسام النقراشي</h1>
    </>
  );
};

export default Home;
  