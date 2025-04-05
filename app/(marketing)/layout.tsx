import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <main className="flex flex-col flex-1 items-center justify-center w-full px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
