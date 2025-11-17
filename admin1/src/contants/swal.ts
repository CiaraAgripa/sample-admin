import Swal from "sweetalert2";

export const showSwalLoader = (message: string = "") => {
  Swal.fire({
    text: message,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

export const showSwalSuccess = (message: string, confirmText: string = "OK") => {
  return Swal.fire({
    icon: "success",
    text: message,
    confirmButtonText: confirmText,
  });
};

export const showSwalError = (message: string, confirmText: string = "OK") => {
  return Swal.fire({
    icon: "error",
    text: message,
    confirmButtonText: confirmText,
  });
};

export const showSwalInfo = (message: string, confirmText: string = "OK") => {
  return Swal.fire({
    icon: "info",
    text: message,
    confirmButtonText: confirmText,
  });
};

export const showSwalWarning = (message: string, confirmText: string = "OK") => {
  return Swal.fire({
    icon: "warning",
    text: message,
    confirmButtonText: confirmText,
  });
};

export const showSwalConfirm = (message: string, yesText: string = "Yes", noText: string = "No") => {
  return Swal.fire({
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: yesText,
    cancelButtonText: noText,
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
};
