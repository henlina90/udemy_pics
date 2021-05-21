import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID TvhUB3IjtRztMGLW5H94BppXGT_EFwtIZGJEl1wY3iA",
  },
});
