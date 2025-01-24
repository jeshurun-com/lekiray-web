import React from "react";
import { FaTelegramPlane,
         FaInstagram,
         FaFacebook,
         FaWhatsapp
        } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col justify-center p-5 items-center mt-3 bg-black">
            <div className="flex gap-5 p-4">
                <a href=""><FaTelegramPlane className="text-xl pointer text-white"/></a>
                <a href=""><FaInstagram className="text-xl pointer text-white"/></a>
                <a href=""><FaFacebook className="text-xl text-white"/></a>
                <a href=""><FaWhatsapp className="text-xl text-white"/></a>
            </div>
            <div className="flex gap-4 text-white">
                <span className="underline"><a href="">Privacy policy</a></span>
                <span>|</span>
                <span className="underline"><a href="">Terms of service</a></span>
            </div>
            <div className="text-white p-4">
                <span>© 2025 Lekiray. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;