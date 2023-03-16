import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function MembersList({ memberdata }) {
  return (
    <>
      <tr>
        <td>{memberdata.id}</td>
        <td>{memberdata.name}</td>
        <td>{memberdata.email}</td>
        <td>{memberdata.contact}</td>
        <td>
          <Link
            className="btn btn-info btn-sm me-1"
            to={`/portal/memberview/${memberdata.id}`}
          >
            <FontAwesomeIcon icon={faEye} color="#810CA8" />
          </Link>
        </td>
      </tr>
    </>
  );
}

export default MembersList;
