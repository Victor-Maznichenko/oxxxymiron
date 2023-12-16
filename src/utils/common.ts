import { BASE_URL } from "./constants"

export const request = async (query: string) => {
   try {
      const result = await fetch(BASE_URL, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
         },
         body: JSON.stringify({ query }),
      });
      const { data } = await result.json();

      return data;
   } catch (err) {
      console.log(err);
   }
};

export const dateParseYMD = (date: Date) => (
   date.toLocaleString("ru", {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
   })
);

export const calculateDelay = (index: number) => (index-1)/10 + 's';