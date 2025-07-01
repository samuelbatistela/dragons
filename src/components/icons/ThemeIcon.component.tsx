import React, { FC, useMemo } from 'react';
import { useTheme } from 'styled-components';

const ThemeIcon: FC = () => {
  const {
    theme,
    color: { black, white },
  } = useTheme();

  const iconColor = useMemo(
    () => (theme === 'dark' ? white : black),
    [theme, black, white],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g transform="translate(-879 -150)">
        <g transform="translate(881.174 150)">
          <path
            d="M208.814,173.057a7.878,7.878,0,0,1-6.159-12.8,7.88,7.88,0,1,0,6.4,12.787C208.977,173.048,208.9,173.057,208.814,173.057Z"
            transform="translate(-195.016 -160.258)"
            fill={iconColor}
          />
        </g>
        <rect
          width="18"
          height="18"
          transform="translate(879 150)"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default ThemeIcon;
