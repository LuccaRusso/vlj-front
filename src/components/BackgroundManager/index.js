import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const backgrounds = {
  "/bovinos": "/src/assets/bovinoBackground.png",
  "/aves": "/src/assets/aveBackground.png",
  // Adicione outras rotas conforme necessário
};

function BackgroundManager() {
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgrounds[location.pathname] || ""})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [location]);

  return null; // Esse componente não renderiza nada
}

export default BackgroundManager;
