import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbWrapper, CrumbLink, Separator } from "./Breadcrumbs.styled";

function Breadcrumbs({ crumbs }) {
  return (
    <BreadcrumbWrapper aria-label="breadcrumb">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <React.Fragment key={crumb.path}>
            {!isLast ? (
              <>
                <CrumbLink to={crumb.path}>{crumb.name}</CrumbLink>
                <Separator>/</Separator>
              </>
            ) : (
              <span aria-current="page" className="current-crumb">
                {crumb.name}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </BreadcrumbWrapper>
  );
}

export default Breadcrumbs;
