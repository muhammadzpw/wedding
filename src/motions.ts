export const fadeLeftVariant = {
  hidden: {
    opacity: 0,
    x: "50%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
    },
  },
};

export const fadeUpVariant = {
  hidden: {
    opacity: 0,
    y: "50%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
    },
  },
};

export const fadeUpVariantWithChilds = {
  ...fadeUpVariant,
  visible: {
    ...fadeUpVariant.visible,
    transition: {
      delayChildren: 1,
      opacity: { duration: 0.2 },
      staggerChildren: 0.2,
    },
  },
};
