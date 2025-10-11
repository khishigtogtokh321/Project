import React from "react";
import PropTypes from "prop-types";
import placeholderLogo from "../assets/ashidLogo.png";

function isImageSource(logo) {
  return (
    typeof logo === "string" &&
    (logo.startsWith("/") ||
      logo.startsWith("http") ||
      logo.endsWith(".png") ||
      logo.endsWith(".jpg") ||
      logo.endsWith(".jpeg") ||
      logo.endsWith(".svg"))
  );
}

export default function SearchCard({
  name,
  type,
  location,
  logo,
  onSelect,
}) {
  const renderLogo = () => {
    if (React.isValidElement(logo)) {
      return (
        <div className="item-logo item-logo--node" aria-hidden="true">
          {logo}
        </div>
      );
    }

    if (isImageSource(logo)) {
      return (
        <div className="item-logo item-logo--image" aria-hidden="true">
          <img
            src={logo}
            alt=""
            className="item-logo__img"
            loading="lazy"
          />
        </div>
      );
    }

    const fallbackContent =
      typeof logo === "string" && logo.trim().length > 0 ? logo : "🏥";

    return (
      <div className="item-logo item-logo--emoji" aria-hidden="true">
        {fallbackContent}
      </div>
    );
  };

  return (
    <div className="dropdown-item" onMouseDown={onSelect} role="option">
      {renderLogo()}
      <div className="item-text">
        <div className="item-title">{name}</div>
        <div className="item-sub">
          {type} - {location}
        </div>
      </div>
    </div>
  );
}

SearchCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onSelect: PropTypes.func,
};

SearchCard.defaultProps = {
  logo: placeholderLogo,
  onSelect: undefined,
};
