export const tourItemCollectionQuery = `
  {
    tourItemCollection {
      items {
        date
        place 
        city 
        soldOut
        country
        ticketLink
        videoLink
        sys {
          id
        }
      }
    }
  }
`;

export const trackCollectionQuery = `
{
   trackCollection {
      items {
         sys {
            id
         }
        date
        title
        description
        link {
          url
        }
        cover {
          url
        }
      }
   }
}
`;

export const newsItemCollectionQuery = `
{
   newsItemCollection {
      items {
         sys {
            id
         }
        title
        cover {
          url
        }
      }
   }
}
`;