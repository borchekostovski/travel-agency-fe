import gql from 'graphql-tag';

//all content types
export const allContentTypesQ = gql`
  query getContentTypes {
    types {
      data {
        id
        attributes {
          name
          thumbnail {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

//destinationt by title and number of people
export const destByTitle_NumPeopleQ = gql`
  query GetDestinationsWithFilters($title: String, $numPeople: Int) {
    destinations(
      filters: { title: { contains: $title }, numPeople: { gte: $numPeople } }
    ) {
      data {
        id
        attributes {
          title
          description
          price
          numPeople
          active
          type {
            data {
              attributes {
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          tag {
            data {
              id
              attributes {
                name
                thumbnail {
                  data {
                    attributes {
                      url
                      width
                      height
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

//destinationt by content type and title and number of people
export const destByType_Title_NumPeopleQ = gql`
  query GetDestinationsWithFilters(
    $title: String
    $numPeople: Int
    $typeId: ID
  ) {
    destinations(
      filters: {
        title: { contains: $title }
        numPeople: { gte: $numPeople }
        type: { id: { eq: $typeId } }
      }
    ) {
      data {
        id
        attributes {
          title
          description
          price
          numPeople
          active
          type {
            data {
              attributes {
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          tag {
            data {
              id
              attributes {
                name
                thumbnail {
                  data {
                    attributes {
                      url
                      width
                      height
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

//destinationt by id
export const destByIDQ = gql`
  query GetDestinationsByID($id: ID) {
    destinations(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          title
          description
          price
          numPeople
          active
          type {
            data {
              attributes {
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          tag {
            data {
              id
              attributes {
                name
                thumbnail {
                  data {
                    attributes {
                      url
                      width
                      height
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
