import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-xl
        bg-white/70 backdrop-blur-xl
        border border-gray-200
        text-gray-900 font-medium
        shadow-sm
        hover:shadow-md
        transition
        flex items-center justify-center
      "
    >
      ↑
    </button>
  );
}
