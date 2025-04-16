import Image from "next/image";
import Header from "./_components/Header"; // Assuming you have a Header component in the same directory
import Banner from "./_components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}
