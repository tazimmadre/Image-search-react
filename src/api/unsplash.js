import axios from "axios";

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization:'Client-ID Eho-t8xCz9T9beOqTIzG7cIIDFfFlga4OVJu9QKZppY'
  }
});