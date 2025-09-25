import logo from "../assets/images/logo.jpeg";

const PreloaderPage = () => {
  return (
    <>
      <div className="preloader" id="preloader">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default PreloaderPage;
