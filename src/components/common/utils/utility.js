import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const removeLocalStorageItem = (key) => {
  return localStorage.removeItem(key);
};

export const setLocalStorageItem = (key, data) => {
  return localStorage.setItem(key, data);
};

export const getLocalStorageItem = (key) => {
  return localStorage.getItem(key);
};

export const notification = (message, type) => {
  toast(message, {
    type,
    transition: Zoom,
    position: "top-right",
    autoClose: 5000,
    // hideProgressBar: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  return true;
};

export const replaceIpfsUrl = (data) => {
  if (data) {
    return data.replace("ipfs://", "https://ipfs.io/ipfs/");
  } else {
    return data;
  }
};

export const sliceLongString = (data, length = 5) => {
  if (!data) return;
  data = data.toString();
  if (data.length > 7) {
    return data.slice(0, length) + "..." + data.slice(length * -1);
  } else {
    return data;
  }
};

export const sliceLongString1 = (data, length = 15) => {
  if (!data) return;
  data = data.toString();
  if (data.length > 20) {
    return data.slice(0, length) + "...";
  } else {
    return data;
  }
};

export const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};
