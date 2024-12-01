"use client";

import { usePathname } from "next/navigation";

import React from "react";

export const Footer = () => {
  const pathName = usePathname();

  return (
      <footer
          className="w-full flex items-center justify-center py-3"
          style={{ marginTop: 24 }}
      >
        <p>
                <span className="text-default-600">
                  © 2024 Kanstantsin Markau & Hanna Markava
                </span>
        </p>
      </footer>

    // <footer id="footer" className="footer footer-5">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-xs-12 col-sm-12 col-md-12 text--center">
    //                 <div className="footer--copyright">
    //                     <span>&copy; 2017 Appy, crafted With <i className="fa fa-heart"></i> by</span>
    //                     <a href="http://themeforest.net/user/zytheme/portfolio?ref=zytheme">zytheme.com</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </footer>
  );
};
