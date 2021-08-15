type FetchMethod = "GET" | "POST" | "PUT" | "DELETE";

class SpotifyClient {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  async client(pathName: string, method: FetchMethod) {
    const apiBase = "https://api.spotify.com/v1";
    return await fetch(`${apiBase}/${pathName}`, {
      method,
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((x) => console.log(e));
  }

  get(pathName: string) {
    return this.client(pathName, "GET");
  }

  post(pathName: string) {
    return this.client(pathName, "POST");
  }
}

export { SpotifyClient };
