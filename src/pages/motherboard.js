import RootLayout from "@/layout/RootLayout";

export default function MotherboardPage() {
    return <div> Motherboard</div>;
  }

  MotherboardPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };