/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkSizes = "LARGE" | "MEDIUM" | "SMALL" | "%future added value";
export type AuctionResultSorts = "DATE_DESC" | "ESTIMATE_AND_DATE_DESC" | "PRICE_AND_DATE_DESC" | "%future added value";
export type ArtistAuctionResultsQueryVariables = {
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
    sort?: AuctionResultSorts | null;
    artistID: string;
    organizations?: ReadonlyArray<string | null> | null;
    sizes?: ReadonlyArray<ArtworkSizes | null> | null;
};
export type ArtistAuctionResultsQueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"ArtistAuctionResults_artist">;
    } | null;
};
export type ArtistAuctionResultsQuery = {
    readonly response: ArtistAuctionResultsQueryResponse;
    readonly variables: ArtistAuctionResultsQueryVariables;
};



/*
query ArtistAuctionResultsQuery(
  $first: Int
  $last: Int
  $after: String
  $before: String
  $sort: AuctionResultSorts
  $artistID: String!
  $organizations: [String]
  $sizes: [ArtworkSizes]
) {
  artist(id: $artistID) {
    ...ArtistAuctionResults_artist_2jyALL
    id
  }
}

fragment ArtistAuctionResultItem_auctionResult on AuctionResult {
  title
  dimension_text: dimensionText
  organization
  images {
    thumbnail {
      url
    }
  }
  mediumText
  categoryText
  description
  date_text: dateText
  sale_date_text: saleDateText
  price_realized: priceRealized {
    display
    cents_usd: centsUSD
  }
  estimate {
    display
  }
}

fragment ArtistAuctionResults_artist_2jyALL on Artist {
  slug
  ...AuctionResultHeader_artist
  auctionResultsConnection(first: $first, after: $after, before: $before, last: $last, sort: $sort, organizations: $organizations, sizes: $sizes) {
    ...AuctionResultsCount_results
    pageInfo {
      hasNextPage
      endCursor
    }
    pageCursors {
      ...Pagination_pageCursors
    }
    totalCount
    edges {
      node {
        title
        dimension_text: dimensionText
        images {
          thumbnail {
            url
          }
        }
        description
        date_text: dateText
        ...ArtistAuctionResultItem_auctionResult
        id
      }
    }
  }
}

fragment AuctionResultHeader_artist on Artist {
  name
}

fragment AuctionResultsCount_results on AuctionResultConnection {
  totalCount
}

fragment Pagination_pageCursors on PageCursors {
  around {
    cursor
    page
    isCurrent
  }
  first {
    cursor
    page
    isCurrent
  }
  last {
    cursor
    page
    isCurrent
  }
  previous {
    cursor
    page
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sort",
    "type": "AuctionResultSorts",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "organizations",
    "type": "[String]",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sizes",
    "type": "[ArtworkSizes]",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last"
  },
  {
    "kind": "Variable",
    "name": "organizations",
    "variableName": "organizations"
  },
  {
    "kind": "Variable",
    "name": "sizes",
    "variableName": "sizes"
  },
  {
    "kind": "Variable",
    "name": "sort",
    "variableName": "sort"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "page",
  "args": null,
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  (v4/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "isCurrent",
    "args": null,
    "storageKey": null
  }
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "display",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArtistAuctionResultsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ArtistAuctionResults_artist",
            "args": (v2/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtistAuctionResultsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "slug",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "auctionResultsConnection",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "AuctionResultConnection",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "totalCount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageCursors",
                "storageKey": null,
                "args": null,
                "concreteType": "PageCursors",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "around",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "plural": true,
                    "selections": (v5/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "first",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "plural": false,
                    "selections": (v5/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "last",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "plural": false,
                    "selections": (v5/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "previous",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "AuctionResultEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AuctionResult",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "dimension_text",
                        "name": "dimensionText",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "images",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AuctionLotImages",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "thumbnail",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "url",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "date_text",
                        "name": "dateText",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "organization",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "mediumText",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "categoryText",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "sale_date_text",
                        "name": "saleDateText",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "price_realized",
                        "name": "priceRealized",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AuctionResultPriceRealized",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": "cents_usd",
                            "name": "centsUSD",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "estimate",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AuctionLotEstimate",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/)
                        ]
                      },
                      (v7/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v7/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ArtistAuctionResultsQuery",
    "id": null,
    "text": "query ArtistAuctionResultsQuery(\n  $first: Int\n  $last: Int\n  $after: String\n  $before: String\n  $sort: AuctionResultSorts\n  $artistID: String!\n  $organizations: [String]\n  $sizes: [ArtworkSizes]\n) {\n  artist(id: $artistID) {\n    ...ArtistAuctionResults_artist_2jyALL\n    id\n  }\n}\n\nfragment ArtistAuctionResultItem_auctionResult on AuctionResult {\n  title\n  dimension_text: dimensionText\n  organization\n  images {\n    thumbnail {\n      url\n    }\n  }\n  mediumText\n  categoryText\n  description\n  date_text: dateText\n  sale_date_text: saleDateText\n  price_realized: priceRealized {\n    display\n    cents_usd: centsUSD\n  }\n  estimate {\n    display\n  }\n}\n\nfragment ArtistAuctionResults_artist_2jyALL on Artist {\n  slug\n  ...AuctionResultHeader_artist\n  auctionResultsConnection(first: $first, after: $after, before: $before, last: $last, sort: $sort, organizations: $organizations, sizes: $sizes) {\n    ...AuctionResultsCount_results\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    pageCursors {\n      ...Pagination_pageCursors\n    }\n    totalCount\n    edges {\n      node {\n        title\n        dimension_text: dimensionText\n        images {\n          thumbnail {\n            url\n          }\n        }\n        description\n        date_text: dateText\n        ...ArtistAuctionResultItem_auctionResult\n        id\n      }\n    }\n  }\n}\n\nfragment AuctionResultHeader_artist on Artist {\n  name\n}\n\nfragment AuctionResultsCount_results on AuctionResultConnection {\n  totalCount\n}\n\nfragment Pagination_pageCursors on PageCursors {\n  around {\n    cursor\n    page\n    isCurrent\n  }\n  first {\n    cursor\n    page\n    isCurrent\n  }\n  last {\n    cursor\n    page\n    isCurrent\n  }\n  previous {\n    cursor\n    page\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '29f681a3099db794119e2abf5a72d2b0';
export default node;
