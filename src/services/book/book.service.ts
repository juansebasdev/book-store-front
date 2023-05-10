import HTTPUtil from "utils/http/http.util";

class BookService {
  async getAll() {
    const response = await HTTPUtil.send(
      {
        url: "/book/",
        method: "GET",
      },
      {
        alertOnFailed: true,
      }
    );

    if (response?.status === 200) {
      return response;
    } else {
      return undefined;
    }
  }

  async getSingleBook(id: string) {
    const response = await HTTPUtil.send(
      {
        url: `/book/${id}`,
        method: "GET",
      },
      { alertOnFailed: true }
    );

    if (response?.status === 200) {
      return response;
    } else {
      return undefined;
    }
  }
}

export default BookService;
