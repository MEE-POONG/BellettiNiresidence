import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayOut({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {/* <SiteHeader /> */}
      <NavigationBar />
      <main>
        {children}
        <Footer />
      </main>
    </>
  );
}