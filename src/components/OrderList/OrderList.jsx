import React, { Fragment } from "react";
import { OrderTableContainer, OrderStatusModal, InvoiceDisplay } from "../";

const OrderList = ({
  data,
  openModal,
  handleOpenModal,
  handleCloseModal,
  status,
  updateStatusAndHistoryState,
  updateStatus,
  handleChangePage,
  page,
  handleChangeRow,
  rows,
  handleOpenInvoiceModal,
  handleCloseInvoiceModal,
  openInvoiceModal,
  currentOrder,
  isLoading,
}) => {
  return (
    <Fragment>
      <OrderTableContainer
        data={data}
        handleOpenModal={handleOpenModal}
        handleChangePage={handleChangePage}
        page={page}
        handleChangeRow={handleChangeRow}
        rows={rows}
        handleOpenInvoiceModal={handleOpenInvoiceModal}
      />
      <OrderStatusModal
        currentOrder={currentOrder}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        status={status}
        updateStatusAndHistoryState={updateStatusAndHistoryState}
        updateStatus={updateStatus}
        isLoading={isLoading}
      />
      <InvoiceDisplay
        handleOpenInvoiceModal={handleOpenInvoiceModal}
        handleCloseInvoiceModal={handleCloseInvoiceModal}
        openInvoiceModal={openInvoiceModal}
        currentOrder={currentOrder}
      />
    </Fragment>
  );
};

export default OrderList;
