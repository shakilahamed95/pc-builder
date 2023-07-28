import Navbar from "@/components/navbar/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default RootLayout;
