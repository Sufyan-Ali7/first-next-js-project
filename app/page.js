import Image from "next/image";
import Header from "./_components/Header"; // Assuming you have a Header component in the same directory
import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import Order from "./_components/Order";
import Selling from "./_components/Selling";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Explore />
      <Order />
      <Selling />
    </>
  );
}
