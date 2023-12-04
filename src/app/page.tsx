import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductList from "@/components/productList";

export default function Home() {
  return (
    <main className="">
      <link rel="stylesheet" href="https://use.typekit.net/igm8ala.css"></link>
      <link rel="icon" href="/favicon.png" />
      <Header />
      <div className="mt-14 md:mt-20"></div>
      {/* Content here */}
      <ProductList />
      <Footer />
    </main>
  );
}
