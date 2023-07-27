import Navbar from "@/components/navbar/navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default RootLayout;
