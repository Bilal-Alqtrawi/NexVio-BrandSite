"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// كل الـ logos تم استخراجها كملفات SVG منفصلة من الصورة الأصلية
// المسار: public/companies-logo/{name}.svg
// النسخ الاحتياطية (PNG قبل التحويل لـ vector) موجودة في:
// public/companies-logo-png-fallback/{name}.png — استخدمها إذا أي svg طلع شكله مش مضبوط

const LogosImages = [
  { src: "/companies-logo/yamit-hanionim.svg", name: "Yamit Hanionim" },
  { src: "/companies-logo/cook-and-bake.svg", name: "Cook and Bake" },
  { src: "/companies-logo/yaakobi.svg", name: "Yaakobi" },
  { src: "/companies-logo/irobot.svg", name: "iRobot" },
  { src: "/companies-logo/metuka.svg", name: "Metuka" },
  { src: "/companies-logo/fried.svg", name: "Fried" },
  { src: "/companies-logo/icell.svg", name: "iCell" },
  { src: "/companies-logo/femina.svg", name: "Femina" },

  { src: "/companies-logo/central-park.svg", name: "Central Park" },
  { src: "/companies-logo/furla.svg", name: "Furla" },
  { src: "/companies-logo/kitan.svg", name: "Kitan" },
  { src: "/companies-logo/golf-group.svg", name: "Golf Group" },
  { src: "/companies-logo/steimatzky.svg", name: "Steimatzky" },
  { src: "/companies-logo/ape-electric.svg", name: "Ape Electric" },
  { src: "/companies-logo/israel-post.svg", name: "Israel Post" },
  { src: "/companies-logo/eskal-1.svg", name: "Eskal" },

  { src: "/companies-logo/technoso.svg", name: "Technoso" },
  { src: "/companies-logo/hoff.svg", name: "Hoff" },
  { src: "/companies-logo/mishkan-hatachlit.svg", name: "Mishkan HaTachlit" },
  { src: "/companies-logo/sami-ofer-stadium.svg", name: "Sami Ofer Stadium" },
  { src: "/companies-logo/bara.svg", name: "Bara" },
  { src: "/companies-logo/natasha-denona.svg", name: "Natasha Denona" },
  { src: "/companies-logo/cafe-co.svg", name: "Cafe + Co" },
  { src: "/companies-logo/april.svg", name: "April" },

  { src: "/companies-logo/bubbles.svg", name: "Bubbles" },
  { src: "/companies-logo/doral-energy.svg", name: "Doral Energy" },
  { src: "/companies-logo/ltech.svg", name: "L.Tech" },
  { src: "/companies-logo/play-game.svg", name: "Play Game" },
  { src: "/companies-logo/soho-plus.svg", name: "Soho+" },
  { src: "/companies-logo/my-baby.svg", name: "My Baby" },
  { src: "/companies-logo/cibus-sodexo.svg", name: "Cibus Sodexo" },
  { src: "/companies-logo/hstern.svg", name: "H.Stern" },
  { src: "/companies-logo/wine-and-more.svg", name: "Wine & More" },

  { src: "/companies-logo/eskal-2.svg", name: "Eskal" },
  { src: "/companies-logo/tel-aviv-yafo.svg", name: "Tel Aviv Yafo" },
  { src: "/companies-logo/kidistar.svg", name: "Kidistar" },
  { src: "/companies-logo/express-citywash.svg", name: "Express City Wash" },
  { src: "/companies-logo/tiba.svg", name: "Tiba" },
  { src: "/companies-logo/oz-bat-galim.svg", name: "Oz Bat Galim" },
  { src: "/companies-logo/mashkot-akfon.svg", name: "Mashkot Akfon" },
  { src: "/companies-logo/automatim.svg", name: "Automatim" },
];

export default function LogoCloud() {
  return (
    <section
      id="partners"
      className="relative w-full overflow-hidden pt-16 pb-24"
    >
      <motion.div
        className="flex items-center gap-8"
        animate={{ x: ["0%", "-120%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {[...LogosImages, ...LogosImages].map((logo, idx) => (
          <div
            key={idx}
            className="flex shrink-0 items-center justify-center rounded-xl bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:scale-105"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={150}
              height={75}
              quality={90}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
