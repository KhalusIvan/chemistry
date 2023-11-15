import { TableRowBox, TableRowWrapper } from "./styledComponents";

function RowNumeration() {
  return (
    <TableRowWrapper>
      {Array.from({ length: 18 }, (_, index) => {
        return (
          <TableRowBox key={index} column={index + 1}>
            {index + 1}
          </TableRowBox>
        );
      })}
    </TableRowWrapper>
  );
}

export default RowNumeration;
