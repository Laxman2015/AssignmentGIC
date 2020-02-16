import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
export const columnDefs = del => [
  {
    headerName: "Sequence No.",
    valueGetter: function(params) {
      return params.node.rowIndex + 1;
    },
    width: 60
  },
  {
    headerName: "First Name",
    field: "firstName",
    sortable: true
  },
  {
    headerName: "Last Name",
    field: "lastName"
  },
  {
    headerName: "Email address",
    field: "email",
    suppressSizeToFit: true
  },
  {
    headerName: "Phone number",
    field: "phone",
    sortable: true
  },
  {
    headerName: "Gender",
    field: "gender",
    width: 150
  },
  {
    headerName: "Actions",
    cellRendererFramework: params => (
      <Fragment>
        <Link
          to={{
            pathname: `/employee/edit/${params.rowIndex}`,
            state: {
              rowData: params.data,
              id: params.rowIndex
            }
          }}
        >
          <EditIcon />
        </Link>
        {" / "}
        <DeleteForeverIcon onClick={() => del(params.rowIndex)} />
      </Fragment>
    ),
    width: 90
  }
];
