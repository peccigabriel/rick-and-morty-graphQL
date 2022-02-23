import React from "react";
import { ReactComponent as Left } from "../../assets/svg/arrowLeft.svg";
import { ReactComponent as Right } from "../../assets/svg/arrowRight.svg";

export const Pagination = ({ name, data, refetch, page, setPage }) => {
  const setPaginated = async (action) => {
    let paged = action === "next" ? page + 1 : page - 1;
    await refetch({
      name: name,
      page:
        action === "next"
          ? data?.characters?.info.next
          : data?.characters?.info.prev,
    });
    setPage(paged);
  };

  return (
    <div className="paginated">
      {data?.characters?.info.prev && (
        <Left className="arrow" onClick={() => setPaginated("prev")} />
      )}
      <span>{page}</span>
      {data?.characters?.info.next && (
        <Right className="arrow" onClick={() => setPaginated("next")} />
      )}
    </div>
  );
};
