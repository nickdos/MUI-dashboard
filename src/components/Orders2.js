import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "UUID", width: 150 },
  {
    field: "scientificName",
    headerName: "Scientific Name",
    width: 150
    // editable: true
  },
  {
    field: "vernacularName",
    headerName: "Vernacular Name",
    width: 150
    // editable: true
  },
  {
    field: "dataResourceUid",
    headerName: "DataResource",
    // type: "number",
    width: 110
    // editable: true
  },
  {
    field: "stateProvince",
    headerName: "State/Territory",
    // type: "number",
    width: 110
    // editable: true
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
];

export default function Orders2({ results }) {
  const rows2 = results.occurrences;
  // const keys_to_keep = [
  //   "uuid",
  //   "scientificName",
  //   "vernacularName",
  //   "dataResourceUid",
  //   "stateProvince"
  // ];
  // function objfilter(data, keys_to_keep) {
  //   return Object.fromEntries(
  //     Object.entries(data).filter((a) => keys_to_keep.includes(a[0]))
  //   );
  // }
  // const rows3 = objfilter(rows2, keys_to_keep);
  const rows3 = rows2?.map(({ uuid: id, ...rest }) => ({
    id,
    ...rest
  }));
  const total = new Intl.NumberFormat("en-US").format(results.totalRecords);
  //console.log(rows3);
  //console.log(rows2);
  return (
    <>
      <h2>
        Search for{" "}
        <span dangerouslySetInnerHTML={{ __html: results.queryTitle }}></span>{" "}
        returned {total} results
      </h2>
      <Box sx={{ height: 660, width: "100%" }}>
        <DataGrid
          rows={rows3}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </>
  );
}
