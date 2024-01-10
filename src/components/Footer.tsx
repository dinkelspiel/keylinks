import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-[0.7fr,1fr] px-4 lg:px-[165px] py-[20px] border-b border-b-accent">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="font-medium text-accent">Headquarter</div>
            <div className="text-sm">Borgarfjordsgatan 6C, 164 55 Kista</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-medium text-accent">Email</div>
            <a className="text-sm" href="mailto:keylinkuf@gmail.com">
              keylinkuf@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-medium text-accent">Telephone</div>
            <div className="text-sm">+46 73 333 76 48</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
          <div className="flex flex-col gap-8">
            <div className="font-medium text-accent">Products</div>
            <div className="flex flex-col gap-3">
              <div className="text-sm">KeyClips</div>
              <div className="text-sm">KeyRings</div>
              <div className="text-sm">KeyHub</div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="font-medium text-accent">Useful Links</div>
            <div className="flex flex-col gap-3">
              <div className="text-sm">About</div>
              <div className="text-sm">Contact</div>
              <div className="text-sm">FAQ</div>
              <div className="text-sm">Terms & Conditions</div>
              <div className="text-sm">Privacy Policy</div>
              <div className="text-sm">Cookie Policy</div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="font-medium text-accent">Customer Service</div>
            <div className="flex flex-col gap-3">
              <div className="text-sm">Track Order</div>
              <div className="text-sm">Returns & Exchanges</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-2">
        © <b>KeyLinks</b> 2023-{new Date().getFullYear()} - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
