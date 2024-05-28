import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-orange-500 text-white py-10  flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-8  space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        <div className="flex justify-center space-x-4">
          <a href="https://instagram.com" className="mx-2">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
              alt="Instagram"
              className="h-8 w-8"
            />
          </a>
          <a href="https://linkedin.com" className="mx-2">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
              className="h-8 w-8"
            />
          </a>
          <a href="https://facebook.com" className="mx-2">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png"
              alt="Facebook"
              className="h-8 w-8"
            />
          </a>
          <a href="https://whatsapp.com" className="mx-2">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
              alt="WhatsApp"
              className="h-8 w-8"
            />
          </a>
          <a href="https://tiktok.com" className="mx-2">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/tiktok.png"
              alt="TikTok"
              className="h-8 w-8"
            />
          </a>
        </div>
        <div className="text-center md:text-left">
          <p className="font-bold">Vereadora Marcela Trópia - Partido Novo</p>
          <p>Av. dos Andradas, 3100, Gabinete B308, Santa Efigênia, BH/MG</p>
          <p>Email: contato@marcelatropia.com.br</p>
          <p>Telefone: (31) 3555-1168 / (31) 99571-7177 (WhatsApp)</p>
          <div className="flex justify-center p-2">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/n.png"
              alt="Partido Novo"
              className="h-8 w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
