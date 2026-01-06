import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
  const navigate = useNavigate();

  return {

    boshSahifa: () => navigate("/"),

    kompaniya: () => navigate("/o-kompanii"),
    dostavka: () => navigate("/dostavka"),
    vozvrat: () => navigate("/vozvrat"),
    garantiya: () => navigate("/garantii"),
    kontaktlar: () => navigate("/kontakty"),
    blog: () => navigate("/blog"),

    katalog: () => navigate("/katalog"),
    korzina: () => navigate("/korzina"),
    favorites: () => navigate("/favorites"),
  };
};
