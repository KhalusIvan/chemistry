import { TableColumnBox, TableColumnWrapper } from "./styledComponents";

function ColumnNumeration() {
  return (
    <TableColumnWrapper>
      {Array.from({ length: 7 }, (_, index) => {
        return (
          <TableColumnBox key={index} row={index + 1}>
            {index + 1}
          </TableColumnBox>
        );
      })}
    </TableColumnWrapper>
  );
}

export default ColumnNumeration;
