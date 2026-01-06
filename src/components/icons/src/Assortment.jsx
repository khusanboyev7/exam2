import * as React from "react";
const AssortmentIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <rect width={80} height={80} fill="#454545" rx={10} />
    <g fill="#fff" clipPath="url(#a)">
      <path d="M31.866 51.703h-9.138V40.406H16V63h22.594V40.406h-6.728v11.297Z" />
      <path d="M25.54 40.406h3.513v8.485h-3.512v-8.485Zm31.732 11.297h-9.138V40.406h-6.728V63H64V40.406h-6.728v11.297Z" />
      <path d="M50.947 40.406h3.512v8.485h-3.512v-8.485ZM57.272 15v11.297h-9.138V15h-6.728v22.594H64V15h-6.728Z" />
      <path d="M50.947 15h3.512v8.484h-3.512V15Zm-25.02 11.88V15.087c-5.568.694-9.89 5.456-9.89 11.209 0 6.229 5.067 11.297 11.297 11.297 2.608 0 5.013-.89 6.927-2.38l-8.334-8.335Z" />
      <path d="m30.729 27.703 5.521 5.522a11.241 11.241 0 0 0 2.293-5.522h-7.814Zm-1.99-2.812h9.804c-.637-5.107-4.696-9.167-9.803-9.804v9.804Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M16 15h48v48H16z" />
      </clipPath>
    </defs>
  </svg>
);
export default AssortmentIcon;
