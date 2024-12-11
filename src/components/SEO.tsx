import React from "react";
import { Helmet } from "react-helmet";

type SEOProps = {
    title?: string; // Opcjonalny tytuł strony
    description?: string; // Opcjonalny opis strony
  }

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const defaultTitle = "Psi Hotel w Kaniach"; // domyślny tytuł
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default SEO;
