import { FunctionComponent, useMemo } from "react";
import Header from "../header";
import { useTable, useSortBy } from "react-table";
import mock_data from "./mock_data.json";
import { COLUMNS } from "./columns";

interface LeaderboardProps {}

const Leaderboard: FunctionComponent<LeaderboardProps> = () => {
  const columns: any = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mock_data, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="bg-primary">
      <Header />
      <div className="d-flex bg-grid partial-seperator-left my-5"></div>
      <div className="d-flex just-cont-center">
        <table className="leaderboard-table" {...getTableBodyProps()}>
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps}>
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
