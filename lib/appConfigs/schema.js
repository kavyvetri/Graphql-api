"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gql = String.raw;
exports.typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Person {\n    _id: ID!\n    uid: ID!\n    updatedAt: DateTime!\n    isInfected: Boolean!\n      @cypher(\n        statement: \"\"\"\n        RETURN apoc.label.exists(this, 'InfectedPerson')\n        \"\"\"\n      )\n    isInQuarantine: Boolean!\n      @cypher(\n        statement: \"\"\"\n        RETURN apoc.label.exists(this, 'QuarantinedPerson')\n        \"\"\"\n      )\n    connectsTo: [Person] @relation(name: \"CONNECTS_TO\", direction: \"OUT\")\n    # test(input: LogContactInput): String!\n    #   @cypher(\n    #     statement: \"\"\"\n    #     WITH $input.yyyy + '-' + $input.mm + '-' + $input.dd AS dateFormat\n    #     WITH date(dateFormat) AS logDate, dateFormat\n    #     RETURN dateFormat\n    #     \"\"\"\n    #   )\n  }\n\n  type Contact {\n    id: ID!\n    date: Date!\n  }\n\n  input LogContactInput {\n    fromUid: ID!\n    toUid: ID!\n    yyyy: String!\n    mm: String!\n    dd: String!\n  }\n\n  input UpdatePersonInput {\n    uid: ID!\n    isInfected: Boolean!\n  }\n\n  type Mutation {\n    setIsInfected(input: UpdatePersonInput): Person\n      @cypher(\n        statement: \"\"\"\n        MATCH (p:Person {uid: $input.uid})\n\n        RETURN p\n        \"\"\"\n      )\n    LogContact(input: LogContactInput): Contact\n      @cypher(\n        statement: \"\"\"\n        WITH $input.yyyy + '-' + $input.mm + '-' + $input.dd AS dateFormat\n        WITH date(dateFormat) AS logDate, dateFormat\n        WITH $input.fromUid + '_' + dateFormat AS fromDayId, dateFormat, logDate\n        WITH $input.toUid + '_' + dateFormat AS toDayId, fromDayId, logDate, dateFormat\n        MERGE (fromDay:PersonDay { id: fromDayId })\n        MERGE (from:Person {uid: $input.fromUid})\n        MERGE (fromDay)<-[:ON_DAY]-(from)\n        WITH fromDay, toDayId, logDate, dateFormat\n        MERGE (toDay:PersonDay { id: toDayId })\n        MERGE (to:Person {uid: $input.toUid})\n        MERGE (toDay)<-[:ON_DAY]-(to)\n        WITH dateFormat + '_' + $input.fromUid + '_' + $input.toUid AS contactId, fromDay, toDay, logDate\n        MERGE (fromDay)-[:HAD_CONTACT]->(c:Contact {id: contactId, date: logDate })<-[:HAD_CONTACT]-(toDay)\n        RETURN c\n        \"\"\"\n      )\n  }\n"], ["\n  type Person {\n    _id: ID!\n    uid: ID!\n    updatedAt: DateTime!\n    isInfected: Boolean!\n      @cypher(\n        statement: \"\"\"\n        RETURN apoc.label.exists(this, 'InfectedPerson')\n        \"\"\"\n      )\n    isInQuarantine: Boolean!\n      @cypher(\n        statement: \"\"\"\n        RETURN apoc.label.exists(this, 'QuarantinedPerson')\n        \"\"\"\n      )\n    connectsTo: [Person] @relation(name: \"CONNECTS_TO\", direction: \"OUT\")\n    # test(input: LogContactInput): String!\n    #   @cypher(\n    #     statement: \"\"\"\n    #     WITH $input.yyyy + '-' + $input.mm + '-' + $input.dd AS dateFormat\n    #     WITH date(dateFormat) AS logDate, dateFormat\n    #     RETURN dateFormat\n    #     \"\"\"\n    #   )\n  }\n\n  type Contact {\n    id: ID!\n    date: Date!\n  }\n\n  input LogContactInput {\n    fromUid: ID!\n    toUid: ID!\n    yyyy: String!\n    mm: String!\n    dd: String!\n  }\n\n  input UpdatePersonInput {\n    uid: ID!\n    isInfected: Boolean!\n  }\n\n  type Mutation {\n    setIsInfected(input: UpdatePersonInput): Person\n      @cypher(\n        statement: \"\"\"\n        MATCH (p:Person {uid: $input.uid})\n\n        RETURN p\n        \"\"\"\n      )\n    LogContact(input: LogContactInput): Contact\n      @cypher(\n        statement: \"\"\"\n        WITH $input.yyyy + '-' + $input.mm + '-' + $input.dd AS dateFormat\n        WITH date(dateFormat) AS logDate, dateFormat\n        WITH $input.fromUid + '_' + dateFormat AS fromDayId, dateFormat, logDate\n        WITH $input.toUid + '_' + dateFormat AS toDayId, fromDayId, logDate, dateFormat\n        MERGE (fromDay:PersonDay { id: fromDayId })\n        MERGE (from:Person {uid: $input.fromUid})\n        MERGE (fromDay)<-[:ON_DAY]-(from)\n        WITH fromDay, toDayId, logDate, dateFormat\n        MERGE (toDay:PersonDay { id: toDayId })\n        MERGE (to:Person {uid: $input.toUid})\n        MERGE (toDay)<-[:ON_DAY]-(to)\n        WITH dateFormat + '_' + $input.fromUid + '_' + $input.toUid AS contactId, fromDay, toDay, logDate\n        MERGE (fromDay)-[:HAD_CONTACT]->(c:Contact {id: contactId, date: logDate })<-[:HAD_CONTACT]-(toDay)\n        RETURN c\n        \"\"\"\n      )\n  }\n"])));
exports.resolvers = {
// root entry point to GraphQL service
};
var templateObject_1;