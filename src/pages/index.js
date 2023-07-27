import RootLayout from "@/layout/RootLayout";

export default function Home() {
  return (
    <div>
    </div>
  );
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};