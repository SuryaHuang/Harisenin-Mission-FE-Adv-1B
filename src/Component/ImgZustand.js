import { create } from "zustand";
import imgLandscape1 from "../images/Landscape/Type=1.png";
import imgLandscape2 from "../images/Landscape/Type=2.png";
import imgLandscape3 from "../images/Landscape/Type=3.png";
import imgLandscape4 from "../images/Landscape/Type=4.png";
import imgLandscape5 from "../images/Landscape/Type=5.png";
import imgLandscape6 from "../images/Landscape/Type=6.png";
import imgLandscape7 from "../images/Landscape/Type=7.png";
import imgLandscape8 from "../images/Landscape/Type=8.png";
import imgLandscape9 from "../images/Landscape/Type=9.png";
import imgLandscape10 from "../images/Landscape/Type=10.png";
import imgLandscape11 from "../images/Landscape/Type=11.png";
import imgLandscape12 from "../images/Landscape/Type=12.png";
import imgPortrait1 from "../images/Potrait/Number=1.png";
import imgPortrait2 from "../images/Potrait/Number=2.png";
import imgPortrait3 from "../images/Potrait/Number=3.png";
import imgPortrait4 from "../images/Potrait/Number=4.png";
import imgPortrait5 from "../images/Potrait/Number=5.png";
import imgPortrait6 from "../images/Potrait/Number=6.png";
import imgPortrait7 from "../images/Potrait/Number=7.png";
import imgPortrait8 from "../images/Potrait/Number=8.png";
import imgPortrait9 from "../images/Potrait/Number=9.png";
import imgPortrait10 from "../images/Potrait/Number=10.png";
import imgPortrait11 from "../images/Potrait/Number=11.png";
import imgPortrait12 from "../images/Potrait/Number=12.png";

// landscape zustand
export const WatchedLandscape1 = create((set) => ({
  imgSrc1: imgLandscape1,
  imgAlt1: "imgLandscape1",
  imgTitle1: "My Perfect Stranger",
  imgRating1: "4.5",
  setImage: (src, alt, title, rating) =>
    set({ imgSrc1: src, imgAlt1: alt, imgTitle1: title, imgRating1: rating }),
}));

export const WatchedLandscape2 = create((set) => ({
  imgSrc2: imgLandscape2,
  imgAlt2: "imgLandscape2",
  imgTitle2: "Shazam! Fury of the Gods",
  imgRating2: "4.3",
  setImage: (src, alt, title, rating) =>
    set({ imgSrc2: src, imgAlt2: alt, imgTitle1: title, imgRating1: rating }),
}));

export const WatchedLandscape3 = create((set) => ({
  imgSrc3: imgLandscape3,
  imgAlt3: "imgLandscape3",
  imgTitle3: "Avatar: The Way of Water",
  imgRating3: "4.7",
  setImage: (src, alt, title, rating) =>
    set({ imgSrc3: src, imgAlt3: alt, imgTitle3: title, imgRating3: rating }),
}));

export const WatchedLandscape4 = create((set) => ({
  imgSrc4: imgLandscape4,
  imgAlt4: "imgLandscape4",
  imgTitle4: "Fast X",
  imgRating4: "4.2",
  setImage: (src, alt, title, rating) =>
    set({ imgSrc4: src, imgAlt4: alt, imgTitle4: title, imgRating4: rating }),
}));

export const WatchedLandscape5 = create((set) => ({
  imgSrc5: imgLandscape5,
  imgAlt5: "imgLandscape5",
  imgTitle5: "Blue Lock",
  imgRating5: "4.8",
  setImage: (src, alt, title, rating) =>
    set({ imgSrc5: src, imgAlt5: alt, imgTitle5: title, imgRating5: rating }),
}));

export const WatchedLandscape6 = create((set) => ({
  imgSrc6: imgLandscape6,
  imgAlt6: "imgLandscape6",
  imgTitle6: "The Little Mermaid",
  imgRating6: "4.7  ",
  setImage: (src, alt, title, rating) =>
    set({ imgSrc6: src, imgAlt6: alt, imgTitle6: title, imgRating6: rating }),
}));

export const WatchedLandscape7 = create((set) => ({
  imgSrc7: imgLandscape7,
  imgAlt7: "imgLandscape7",
  imgTitle7: "The Tommorow War",
  imgRating7: "4.6  ",
  setImage: (src, alt, title, rating) =>
    set({ imgSrc7: src, imgAlt7: alt, imgTitle7: title, imgRating7: rating }),
}));

export const WatchedLandscape8 = create((set) => ({
  imgSrc8: imgLandscape8,
  imgAlt8: "imgLandscape8",
  imgTitle8: "Rio",
  imgRating8: "4.6",
  setImage: (src, alt, title, rating) =>
    set({ imgSrc8: src, imgAlt8: alt, imgTitle8: title, imgRating8: rating }),
}));

export const WatchedLandscape9 = create((set) => ({
  imgSrc9: imgLandscape9,
  imgAlt9: "imgLandscape9",
  imgTitle9: "A Man Called Otto",
  imgRating9: "4.7",
  setImage: (src, alt, title, rating) =>
    set({ imgSrc9: src, imgAlt9: alt, imgTitle9: title, imgRating9: rating }),
}));

export const WatchedLandscape10 = create((set) => ({
  imgSrc10: imgLandscape10,
  imgAlt10: "imgLandscape10",
  imgTitle10: "Big Hero 6",
  imgRating10: "4.8",
  setImage: (src, alt, title, rating) =>
    set({
      imgSrc10: src,
      imgAlt10: alt,
      imgTitle10: title,
      imgRating10: rating,
    }),
}));

export const WatchedLandscape11 = create((set) => ({
  imgSrc11: imgLandscape11,
  imgAlt11: "imgLandscape11",
  imgTitle11: "Suzume no Tojimari",
  imgRating11: "4.7",
  setImage: (src, alt, title, rating) =>
    set({
      imgSrc11: src,
      imgAlt11: alt,
      imgTitle11: title,
      imgRating11: rating,
    }),
}));

export const WatchedLandscape12 = create((set) => ({
  imgSrc12: imgLandscape12,
  imgAlt12: "imgLandscape12",
  imgTitle12: "The Batman",
  imgRating12: "4.7",
  setImage: (src, alt, title, rating) =>
    set({
      imgSrc12: src,
      imgAlt12: alt,
      imgTitle12: title,
      imgRating12: rating,
    }),
}));

// portrait zustand
export const WatchedPortrait1 = create((set) => ({
  imgSrc1: imgPortrait1,
  imgAlt1: "imgPortrait1",
  setImage: (src, alt) => set({ imgSrc1: src, imgAlt1: alt }),
}));

export const WatchedPortrait2 = create((set) => ({
  imgSrc2: imgPortrait2,
  imgAlt2: "imgPortrait2",
  setImage: (src, alt) => set({ imgSrc2: src, imgAlt2: alt }),
}));

export const WatchedPortrait3 = create((set) => ({
  imgSrc3: imgPortrait3,
  imgAlt3: "imgPortrait3",
  setImage: (src, alt) => set({ imgSrc3: src, imgAlt3: alt }),
}));

export const WatchedPortrait4 = create((set) => ({
  imgSrc4: imgPortrait4,
  imgAlt4: "imgPortrait4",
  setImage: (src, alt) => set({ imgSrc4: src, imgAlt4: alt }),
}));

export const WatchedPortrait5 = create((set) => ({
  imgSrc5: imgPortrait5,
  imgAlt5: "imgPortrait5",
  setImage: (src, alt) => set({ imgSrc5: src, imgAlt5: alt }),
}));

export const WatchedPortrait6 = create((set) => ({
  imgSrc6: imgPortrait6,
  imgAlt6: "imgPortrait6",
  setImage: (src, alt) => set({ imgSrc6: src, imgAlt6: alt }),
}));

export const WatchedPortrait7 = create((set) => ({
  imgSrc7: imgPortrait7,
  imgAlt7: "imgPortrait7",
  setImage: (src, alt) => set({ imgSrc7: src, imgAlt7: alt }),
}));

export const WatchedPortrait8 = create((set) => ({
  imgSrc8: imgPortrait8,
  imgAlt8: "imgPortrait8",
  setImage: (src, alt) => set({ imgSrc8: src, imgAlt8: alt }),
}));

export const WatchedPortrait9 = create((set) => ({
  imgSrc9: imgPortrait9,
  imgAlt9: "imgPortrait9",
  setImage: (src, alt) => set({ imgSrc9: src, imgAlt9: alt }),
}));

export const WatchedPortrait10 = create((set) => ({
  imgSrc10: imgPortrait10,
  imgAlt10: "imgPortrait10",
  setImage: (src, alt) => set({ imgSrc10: src, imgAlt10: alt }),
}));

export const WatchedPortrait11 = create((set) => ({
  imgSrc11: imgPortrait11,
  imgAlt11: "imgPortrait11",
  setImage: (src, alt) => set({ imgSrc11: src, imgAlt11: alt }),
}));

export const WatchedPortrait12 = create((set) => ({
  imgSrc12: imgPortrait12,
  imgAlt12: "imgPortrait12",
  setImage: (src, alt) => set({ imgSrc12: src, imgAlt12: alt }),
}));
