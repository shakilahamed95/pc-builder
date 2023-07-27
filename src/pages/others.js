import RootLayout from "@/layout/RootLayout";

export default function OtherPage() {
  return <div> OtherPage</div>;
}

OtherPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};