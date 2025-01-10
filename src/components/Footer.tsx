const Footer = () => {
  return (
    <footer className="bg-retro-primary border-t-4 border-retro-secondary shadow-pixel">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-base font-retro mb-4 text-retro-text">
              About GameShop
            </h3>
            <p className="text-retro-text/80 text-sm">
              Your ultimate retro gaming destination. Level up your collection!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-retro mb-4 text-retro-text">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-retro-text hover:text-retro-accent"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-retro-text hover:text-retro-accent"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-retro-text hover:text-retro-accent"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-retro-text hover:text-retro-accent"
                >
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base font-retro mb-4 text-retro-text">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-retro-text hover:text-retro-accent"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-retro-text hover:text-retro-accent"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-retro-text hover:text-retro-accent"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-retro-text hover:text-retro-accent"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-retro mb-4 text-retro-text">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-retro-text">
                <span className="font-semibold">Email:</span>{" "}
                support@gameshop.com
              </li>
              <li className="text-sm text-retro-text">
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </li>
              <li className="text-sm text-retro-text">
                <span className="font-semibold">Hours:</span> Mon-Fri: 9AM - 6PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-4 border-retro-secondary mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-retro-text text-xs">
              © {new Date().getFullYear()} GameShop. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-retro-text hover:text-retro-accent"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-retro-text hover:text-retro-accent"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-retro-text hover:text-retro-accent"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-retro-text hover:text-retro-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
