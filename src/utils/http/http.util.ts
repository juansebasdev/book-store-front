import axiosApi from "config/axios.config";
import { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

export interface IHttpUtil extends AxiosRequestConfig {
  method: AxiosRequestConfig["method"];
  url: string;
  headers?: RawAxiosRequestHeaders;
}

export interface IHttpUtilOptions {
  alertOnFailed?: boolean;
  alertType?: "toast" | "alert";
}

class HttpUtil {

  public send = async (_params: IHttpUtil, _options?: IHttpUtilOptions) => {
    let response: any = {};
    // console.info(axiosApi.getUri())
    try {
      response = await axiosApi.request(_params);
    } catch (e: any) {
      if (e.response) {
        response = e.response;
      } else {
        response = {};
      }
    }

    // if (response.status !== 200) {
    //   if (_options?.alertOnFailed) {
    //     let errorMessage = "";

    //     if (response?.data?.message) {
    //       errorMessage = response.data.message;
    //     }
    //     if (_options.alertType === "alert") {
    //       Swal.fire({
    //         text: errorMessage,
    //         icon: "error",
    //         timer: 2000,
    //         showCancelButton: false,
    //         showConfirmButton: false,
    //       });
    //     } else {
    //       toast.error(errorMessage);
    //     }
    //   }
    // }

    return response;
  };
}

const HTTPUtil = new HttpUtil();

export default HTTPUtil;
