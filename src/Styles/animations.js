import { keyframes } from "styled-components";

export const bounce = keyframes`
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-25px);
    }
    60% {
      transform: translateY(-15px);
    }
  `;

export const typeIn = keyframes`
    0% {
      width: 0ch;
    }
    100% {
      width: 30ch;
    }
`;

export const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const pop = keyframes`
  0% {
    transform: translateY(0px);
  }
  15% {
    transform: translateY(-8px);
  }
  30% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`;
