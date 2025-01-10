import React from "react";

import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div>
      <footer className="bg-light py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2025 Website Name. All Rights Reserved.</p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li className="mx-3">
              <a href="#" className="text-decoration-none">
                Privacy Policy
              </a>
            </li>
            <li className="mx-3">
              <a href="#" className="text-decoration-none">
                Terms of Service
              </a>
            </li>
            <li className="mx-3">
              <a href="#" className="text-decoration-none">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
