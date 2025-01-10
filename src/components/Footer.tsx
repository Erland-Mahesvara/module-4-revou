const Footer = () => {
  return (
    <footer className="bg-vintage-coffee mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-vintage-cream">
              About ShopSmart
            </h3>
            <p className="font-body text-vintage-paper/80">
              Your one-stop destination for quality products at great prices.
              Shop smart, live better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-vintage-cream">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-body text-vintage-paper/80 hover:text-vintage-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
                >
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-vintage-cream">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-vintage-cream">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="font-body text-vintage-paper/80">
                <span className="font-bold text-vintage-cream">Email:</span>{" "}
                support@sevenpennies.com
              </li>
              <li className="font-body text-vintage-paper/80">
                <span className="font-bold text-vintage-cream">Phone:</span> +1
                (555) 123-4567
              </li>
              <li className="font-body text-vintage-paper/80">
                <span className="font-bold text-vintage-cream">Hours:</span>{" "}
                Mon-Fri: 9AM - 6PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-vintage-cream/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-vintage-paper/70 text-sm">
              © 2024 SevenPennies. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="font-body text-vintage-paper/80 hover:text-vintage-gold transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="font-body text-vintage-coffee/80 hover:text-vintage-gold transition-colors"
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
