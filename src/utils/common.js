export const getFourDigitTime = (date) => {
  return new Date(date).toLocaleTimeString("en-In", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
};

export const getFullDate = (date) => {
  return new Date(date).toLocaleDateString("en-In", {
    day: "2-digit",
    month: "long",
    year: "2-digit",
  });
};
