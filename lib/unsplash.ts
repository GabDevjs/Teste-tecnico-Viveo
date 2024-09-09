import fetch from "node-fetch";

const token = process.env.UNSPLASH_ACCESS_KEY;

export const unsplash = {
  search: {
    async getPhotos({ query, perPage }: { query: string ; perPage: string }) {

      console.log('query', query);
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}`,
        {
          headers: {
            Authorization: `Client-ID ${token}`,
          },
        }
      );

      return response.json();
    },
  },
};
