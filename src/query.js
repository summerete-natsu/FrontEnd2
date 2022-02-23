import gql from 'graphql-tag';

const updateartical = gql`
mutation updateTestTable($input: UpdateTestTableInput!) {
    updateTestTable(input: $input) {
        artical
        id
        sort
    }
  }
`;

const queryArtical = gql`
query listTestTables {
    getTestTable(id: "Hello, world!", sort: "Hello, world!") {
      id
      artical
    }
  }
`;


export { updateartical, queryArtical }