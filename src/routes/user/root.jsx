import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../component/footer";
import Header from "../../component/Header.jsx/Header";

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <Header />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
