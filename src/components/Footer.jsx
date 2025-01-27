const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* About Us Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                We are committed to providing the best services to help you achieve your goals. Your satisfaction is our priority.
              </p>
            </div>
  
            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>SEO Optimization</li>
                <li>Consultancy</li>
              </ul>
            </div>
  
            {/* Contact Us Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: mustafa.rahman.official@gmail.com</li>
                <li>Phone: +8801840643946</li>
                <li>Address: mirsarai,Chattogram.</li>
              </ul>
            </div>
  
            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.62h3.129V8.413c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.462.099 2.794.143v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.62h-3.125V24h6.126c.729 0 1.322-.593 1.322-1.324V1.325C24 .593 23.406 0 22.675 0z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 4.557a9.84 9.84 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.862 9.862 0 0 1-3.127 1.196 4.917 4.917 0 0 0-8.384 4.482 13.938 13.938 0 0 1-10.124-5.14 4.917 4.917 0 0 0 1.523 6.573A4.903 4.903 0 0 1 .96 9.51v.062a4.916 4.916 0 0 0 3.946 4.812 4.931 4.931 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417 9.868 9.868 0 0 1-6.102 2.104c-.395 0-.785-.023-1.17-.068a13.945 13.945 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646a10.01 10.01 0 0 0 2.457-2.548l-.047-.02z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.33 3.608 1.305.974.974 1.243 2.242 1.305 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.33 2.633-1.305 3.608-.974.974-2.242 1.243-3.608 1.305-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.33-3.608-1.305-.974-.974-1.243-2.242-1.305-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.33-2.633 1.305-3.608C4.517 2.493 5.785 2.224 7.151 2.163 8.416 2.105 8.796 2.095 12 2.095zm0-2.163C8.735 0 8.332 0 7.053.05 5.779.099 4.525.36 3.578 1.307c-.947.947-1.208 2.201-1.258 3.475C2.26 6.666 2.25 7.07 2.25 10.5s.01 3.835.05 5.112c.05 1.274.311 2.528 1.258 3.475.947.947 2.201 1.208 3.475 1.258C8.333 20 8.737 20 12 20s3.665.011 4.942-.039c1.274-.05 2.528-.311 3.475-1.258.947-.947 1.208-2.201 1.258-3.475.05-1.274.039-1.679.039-4.938s.011-3.665-.039-4.942c-.05-1.274-.311-2.528-1.258-3.475C19.194.36 17.94.099 16.666.05 15.387 0 14.985 0 12 0z"
                    />
                    <circle cx="12" cy="12" r="3.495" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-6 pt-4">
            <p className="text-center text-sm text-gray-400">
              &copy; 2025 . All rights reserved by Mustafa Rahman.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  