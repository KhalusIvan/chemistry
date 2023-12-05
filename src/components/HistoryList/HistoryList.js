/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import TableList from "./TableList";

function HistoryList({ isOpen, handleClose }) {
  return (
    <Dialog
      fullWidth
      open={isOpen}
      maxWidth="md"
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4">Історія опитувань</Typography>
      </DialogTitle>
      <DialogContent>
        <TableList handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default HistoryList;
