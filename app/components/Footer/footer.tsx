const Footer = () => {
    return (
      <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/BrianGustafBirahy">
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/brian-gustaf-476031378/">
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
          <a href="https://www.instagram.com/brian_gustaf?igsh=MWM0cGJvdHdjd2U4YQ==">
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a href="https://www.tiktok.com/@brian_gustaf?_t=ZS-8zigN7QdNE0&_r=1">
            <i className="ri-tiktok-fill ri-2x"></i>
          </a>
        </div>
      </div>
    );
  };
  
  export default Footer;
  