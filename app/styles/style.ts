export const customDropDownStyle = {
  // Border
  control: (provided: any, state: any) => ({
    ...provided,
    padding: "2px",
    borderRadius: "0.5rem",
    borderColor: state.isFocused ? "#87EA5C" : "#9AA1AD4D",
  }),

  placeholder: (provided: any) => ({
    ...provided,
    "@media (max-width: 768px)": {
      fontSize: "12px", // This sets the font size to 'xs' on screens smaller than 768px
    },
    // You can keep the default font size for larger screens here
    fontSize: "1rem",
  }),

  // Menu selector
  menu: (provided: any, state: any) => ({
    ...provided,
    marginTop: "0.5rem",
    backgroundColor: "#EDEEF0",
    borderRadius: "0.5rem",
    boxShadow: "#FF0000",
  }),
  menuList: (provided: any) => ({
    ...provided,
    maxHeight: "150px",

    "&::-webkit-scrollbar": {
      width: "6px",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#c9cacc",
      borderRadius: "4px",
    },
  }),
  // Options
  option: (provided: any, state: any) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    color: state.isSelected ? "#333333" : "inherit",
    backgroundColor: state.isSelected ? "" : state.isFocused ? "" : "",
    "&:hover": {
      backgroundColor: "#F5F7F8",
    },
  }),
};
