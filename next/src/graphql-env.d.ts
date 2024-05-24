/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: {
    'Boolean': unknown;
    'GoMutation': { kind: 'OBJECT'; name: 'GoMutation'; fields: { 'postPostSayHello': { name: 'postPostSayHello'; type: { kind: 'OBJECT'; name: 'GoMyOutput'; ofType: null; } }; }; };
    'GoMyInputInput': { kind: 'INPUT_OBJECT'; name: 'GoMyInputInput'; isOneOf: false; inputFields: [{ name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'GoMyOutput': { kind: 'OBJECT'; name: 'GoMyOutput'; fields: { 'message': { name: 'message'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'GoQuery': { kind: 'OBJECT'; name: 'GoQuery'; fields: { 'string': { name: 'string'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'go': { name: 'go'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'GoMutation'; ofType: null; }; } }; }; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'go': { name: 'go'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'GoQuery'; ofType: null; }; } }; }; };
    'String': unknown;
  };
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}