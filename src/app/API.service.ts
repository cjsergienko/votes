/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateRoomQuestion: OnCreateRoomQuestionSubscription;
  onUpdateRoomQuestion: OnUpdateRoomQuestionSubscription;
  onDeleteRoomQuestion: OnDeleteRoomQuestionSubscription;
  onCreateRoomUser: OnCreateRoomUserSubscription;
  onUpdateRoomUser: OnUpdateRoomUserSubscription;
  onDeleteRoomUser: OnDeleteRoomUserSubscription;
  onCreateRoom: OnCreateRoomSubscription;
  onUpdateRoom: OnUpdateRoomSubscription;
  onDeleteRoom: OnDeleteRoomSubscription;
  onCreateQuestion: OnCreateQuestionSubscription;
  onUpdateQuestion: OnUpdateQuestionSubscription;
  onDeleteQuestion: OnDeleteQuestionSubscription;
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateVote: OnCreateVoteSubscription;
  onUpdateVote: OnUpdateVoteSubscription;
  onDeleteVote: OnDeleteVoteSubscription;
};

export type CreateRoomQuestionInput = {
  id?: string | null;
  roomId?: string | null;
  text?: string | null;
};

export type ModelRoomQuestionConditionInput = {
  roomId?: ModelIDInput | null;
  text?: ModelStringInput | null;
  and?: Array<ModelRoomQuestionConditionInput | null> | null;
  or?: Array<ModelRoomQuestionConditionInput | null> | null;
  not?: ModelRoomQuestionConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type RoomQuestion = {
  __typename: "RoomQuestion";
  id: string;
  roomId?: string | null;
  text?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomQuestionInput = {
  id: string;
  roomId?: string | null;
  text?: string | null;
};

export type DeleteRoomQuestionInput = {
  id: string;
};

export type CreateRoomUserInput = {
  id?: string | null;
  userId?: string | null;
  roomId?: string | null;
};

export type ModelRoomUserConditionInput = {
  userId?: ModelIDInput | null;
  roomId?: ModelIDInput | null;
  and?: Array<ModelRoomUserConditionInput | null> | null;
  or?: Array<ModelRoomUserConditionInput | null> | null;
  not?: ModelRoomUserConditionInput | null;
};

export type RoomUser = {
  __typename: "RoomUser";
  id: string;
  userId?: string | null;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomUserInput = {
  id: string;
  userId?: string | null;
  roomId?: string | null;
};

export type DeleteRoomUserInput = {
  id: string;
};

export type CreateRoomInput = {
  id?: string | null;
};

export type ModelRoomConditionInput = {
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
};

export type Room = {
  __typename: "Room";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomInput = {
  id: string;
};

export type DeleteRoomInput = {
  id: string;
};

export type CreateQuestionInput = {
  id?: string | null;
  text: string;
  roomId?: string | null;
};

export type ModelQuestionConditionInput = {
  text?: ModelStringInput | null;
  roomId?: ModelIDInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type Question = {
  __typename: "Question";
  id: string;
  text: string;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionInput = {
  id: string;
  text?: string | null;
  roomId?: string | null;
};

export type DeleteQuestionInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateVoteInput = {
  id?: string | null;
  userId: string;
  roomId?: string | null;
  questionId?: string | null;
};

export type ModelVoteConditionInput = {
  userId?: ModelIDInput | null;
  roomId?: ModelIDInput | null;
  questionId?: ModelIDInput | null;
  and?: Array<ModelVoteConditionInput | null> | null;
  or?: Array<ModelVoteConditionInput | null> | null;
  not?: ModelVoteConditionInput | null;
};

export type Vote = {
  __typename: "Vote";
  id: string;
  userId: string;
  roomId?: string | null;
  questionId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVoteInput = {
  id: string;
  userId?: string | null;
  roomId?: string | null;
  questionId?: string | null;
};

export type DeleteVoteInput = {
  id: string;
};

export type ModelRoomQuestionFilterInput = {
  id?: ModelIDInput | null;
  roomId?: ModelIDInput | null;
  text?: ModelStringInput | null;
  and?: Array<ModelRoomQuestionFilterInput | null> | null;
  or?: Array<ModelRoomQuestionFilterInput | null> | null;
  not?: ModelRoomQuestionFilterInput | null;
};

export type ModelRoomQuestionConnection = {
  __typename: "ModelRoomQuestionConnection";
  items: Array<RoomQuestion | null>;
  nextToken?: string | null;
};

export type ModelRoomUserFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  roomId?: ModelIDInput | null;
  and?: Array<ModelRoomUserFilterInput | null> | null;
  or?: Array<ModelRoomUserFilterInput | null> | null;
  not?: ModelRoomUserFilterInput | null;
};

export type ModelRoomUserConnection = {
  __typename: "ModelRoomUserConnection";
  items: Array<RoomUser | null>;
  nextToken?: string | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection";
  items: Array<Room | null>;
  nextToken?: string | null;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  text?: ModelStringInput | null;
  roomId?: ModelIDInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection";
  items: Array<Question | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  roomId?: ModelIDInput | null;
  questionId?: ModelIDInput | null;
  and?: Array<ModelVoteFilterInput | null> | null;
  or?: Array<ModelVoteFilterInput | null> | null;
  not?: ModelVoteFilterInput | null;
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection";
  items: Array<Vote | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionRoomQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  roomId?: ModelSubscriptionIDInput | null;
  text?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRoomQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionRoomQuestionFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionRoomUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionIDInput | null;
  roomId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionRoomUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionRoomUserFilterInput | null> | null;
};

export type ModelSubscriptionRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionRoomFilterInput | null> | null;
  or?: Array<ModelSubscriptionRoomFilterInput | null> | null;
};

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  text?: ModelSubscriptionStringInput | null;
  roomId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
  or?: Array<ModelSubscriptionQuestionFilterInput | null> | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionVoteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionIDInput | null;
  roomId?: ModelSubscriptionIDInput | null;
  questionId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionVoteFilterInput | null> | null;
  or?: Array<ModelSubscriptionVoteFilterInput | null> | null;
};

export type CreateRoomQuestionMutation = {
  __typename: "RoomQuestion";
  id: string;
  roomId?: string | null;
  text?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomQuestionMutation = {
  __typename: "RoomQuestion";
  id: string;
  roomId?: string | null;
  text?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomQuestionMutation = {
  __typename: "RoomQuestion";
  id: string;
  roomId?: string | null;
  text?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomUserMutation = {
  __typename: "RoomUser";
  id: string;
  userId?: string | null;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomUserMutation = {
  __typename: "RoomUser";
  id: string;
  userId?: string | null;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomUserMutation = {
  __typename: "RoomUser";
  id: string;
  userId?: string | null;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  text: string;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  text: string;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  text: string;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateVoteMutation = {
  __typename: "Vote";
  id: string;
  userId: string;
  roomId?: string | null;
  questionId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVoteMutation = {
  __typename: "Vote";
  id: string;
  userId: string;
  roomId?: string | null;
  questionId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVoteMutation = {
  __typename: "Vote";
  id: string;
  userId: string;
  roomId?: string | null;
  questionId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetRoomQuestionQuery = {
  __typename: "RoomQuestion";
  id: string;
  roomId?: string | null;
  text?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomQuestionsQuery = {
  __typename: "ModelRoomQuestionConnection";
  items: Array<{
    __typename: "RoomQuestion";
    id: string;
    roomId?: string | null;
    text?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRoomUserQuery = {
  __typename: "RoomUser";
  id: string;
  userId?: string | null;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomUsersQuery = {
  __typename: "ModelRoomUserConnection";
  items: Array<{
    __typename: "RoomUser";
    id: string;
    userId?: string | null;
    roomId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuestionQuery = {
  __typename: "Question";
  id: string;
  text: string;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    text: string;
    roomId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetVoteQuery = {
  __typename: "Vote";
  id: string;
  userId: string;
  roomId?: string | null;
  questionId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListVotesQuery = {
  __typename: "ModelVoteConnection";
  items: Array<{
    __typename: "Vote";
    id: string;
    userId: string;
    roomId?: string | null;
    questionId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateRoomQuestionSubscription = {
  __typename: "RoomQuestion";
  id: string;
  roomId?: string | null;
  text?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomQuestionSubscription = {
  __typename: "RoomQuestion";
  id: string;
  roomId?: string | null;
  text?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomQuestionSubscription = {
  __typename: "RoomQuestion";
  id: string;
  roomId?: string | null;
  text?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomUserSubscription = {
  __typename: "RoomUser";
  id: string;
  userId?: string | null;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomUserSubscription = {
  __typename: "RoomUser";
  id: string;
  userId?: string | null;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomUserSubscription = {
  __typename: "RoomUser";
  id: string;
  userId?: string | null;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  text: string;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  text: string;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  text: string;
  roomId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateVoteSubscription = {
  __typename: "Vote";
  id: string;
  userId: string;
  roomId?: string | null;
  questionId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVoteSubscription = {
  __typename: "Vote";
  id: string;
  userId: string;
  roomId?: string | null;
  questionId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVoteSubscription = {
  __typename: "Vote";
  id: string;
  userId: string;
  roomId?: string | null;
  questionId?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRoomQuestion(
    input: CreateRoomQuestionInput,
    condition?: ModelRoomQuestionConditionInput
  ): Promise<CreateRoomQuestionMutation> {
    const statement = `mutation CreateRoomQuestion($input: CreateRoomQuestionInput!, $condition: ModelRoomQuestionConditionInput) {
        createRoomQuestion(input: $input, condition: $condition) {
          __typename
          id
          roomId
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomQuestionMutation>response.data.createRoomQuestion;
  }
  async UpdateRoomQuestion(
    input: UpdateRoomQuestionInput,
    condition?: ModelRoomQuestionConditionInput
  ): Promise<UpdateRoomQuestionMutation> {
    const statement = `mutation UpdateRoomQuestion($input: UpdateRoomQuestionInput!, $condition: ModelRoomQuestionConditionInput) {
        updateRoomQuestion(input: $input, condition: $condition) {
          __typename
          id
          roomId
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomQuestionMutation>response.data.updateRoomQuestion;
  }
  async DeleteRoomQuestion(
    input: DeleteRoomQuestionInput,
    condition?: ModelRoomQuestionConditionInput
  ): Promise<DeleteRoomQuestionMutation> {
    const statement = `mutation DeleteRoomQuestion($input: DeleteRoomQuestionInput!, $condition: ModelRoomQuestionConditionInput) {
        deleteRoomQuestion(input: $input, condition: $condition) {
          __typename
          id
          roomId
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomQuestionMutation>response.data.deleteRoomQuestion;
  }
  async CreateRoomUser(
    input: CreateRoomUserInput,
    condition?: ModelRoomUserConditionInput
  ): Promise<CreateRoomUserMutation> {
    const statement = `mutation CreateRoomUser($input: CreateRoomUserInput!, $condition: ModelRoomUserConditionInput) {
        createRoomUser(input: $input, condition: $condition) {
          __typename
          id
          userId
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomUserMutation>response.data.createRoomUser;
  }
  async UpdateRoomUser(
    input: UpdateRoomUserInput,
    condition?: ModelRoomUserConditionInput
  ): Promise<UpdateRoomUserMutation> {
    const statement = `mutation UpdateRoomUser($input: UpdateRoomUserInput!, $condition: ModelRoomUserConditionInput) {
        updateRoomUser(input: $input, condition: $condition) {
          __typename
          id
          userId
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomUserMutation>response.data.updateRoomUser;
  }
  async DeleteRoomUser(
    input: DeleteRoomUserInput,
    condition?: ModelRoomUserConditionInput
  ): Promise<DeleteRoomUserMutation> {
    const statement = `mutation DeleteRoomUser($input: DeleteRoomUserInput!, $condition: ModelRoomUserConditionInput) {
        deleteRoomUser(input: $input, condition: $condition) {
          __typename
          id
          userId
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomUserMutation>response.data.deleteRoomUser;
  }
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateQuestion(
    input: CreateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<CreateQuestionMutation> {
    const statement = `mutation CreateQuestion($input: CreateQuestionInput!, $condition: ModelQuestionConditionInput) {
        createQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuestionMutation>response.data.createQuestion;
  }
  async UpdateQuestion(
    input: UpdateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<UpdateQuestionMutation> {
    const statement = `mutation UpdateQuestion($input: UpdateQuestionInput!, $condition: ModelQuestionConditionInput) {
        updateQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuestionMutation>response.data.updateQuestion;
  }
  async DeleteQuestion(
    input: DeleteQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<DeleteQuestionMutation> {
    const statement = `mutation DeleteQuestion($input: DeleteQuestionInput!, $condition: ModelQuestionConditionInput) {
        deleteQuestion(input: $input, condition: $condition) {
          __typename
          id
          text
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuestionMutation>response.data.deleteQuestion;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateVote(
    input: CreateVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<CreateVoteMutation> {
    const statement = `mutation CreateVote($input: CreateVoteInput!, $condition: ModelVoteConditionInput) {
        createVote(input: $input, condition: $condition) {
          __typename
          id
          userId
          roomId
          questionId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVoteMutation>response.data.createVote;
  }
  async UpdateVote(
    input: UpdateVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<UpdateVoteMutation> {
    const statement = `mutation UpdateVote($input: UpdateVoteInput!, $condition: ModelVoteConditionInput) {
        updateVote(input: $input, condition: $condition) {
          __typename
          id
          userId
          roomId
          questionId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVoteMutation>response.data.updateVote;
  }
  async DeleteVote(
    input: DeleteVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<DeleteVoteMutation> {
    const statement = `mutation DeleteVote($input: DeleteVoteInput!, $condition: ModelVoteConditionInput) {
        deleteVote(input: $input, condition: $condition) {
          __typename
          id
          userId
          roomId
          questionId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVoteMutation>response.data.deleteVote;
  }
  async GetRoomQuestion(id: string): Promise<GetRoomQuestionQuery> {
    const statement = `query GetRoomQuestion($id: ID!) {
        getRoomQuestion(id: $id) {
          __typename
          id
          roomId
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuestionQuery>response.data.getRoomQuestion;
  }
  async ListRoomQuestions(
    filter?: ModelRoomQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomQuestionsQuery> {
    const statement = `query ListRoomQuestions($filter: ModelRoomQuestionFilterInput, $limit: Int, $nextToken: String) {
        listRoomQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomId
            text
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomQuestionsQuery>response.data.listRoomQuestions;
  }
  async GetRoomUser(id: string): Promise<GetRoomUserQuery> {
    const statement = `query GetRoomUser($id: ID!) {
        getRoomUser(id: $id) {
          __typename
          id
          userId
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomUserQuery>response.data.getRoomUser;
  }
  async ListRoomUsers(
    filter?: ModelRoomUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomUsersQuery> {
    const statement = `query ListRoomUsers($filter: ModelRoomUserFilterInput, $limit: Int, $nextToken: String) {
        listRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userId
            roomId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomUsersQuery>response.data.listRoomUsers;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {
        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async GetQuestion(id: string): Promise<GetQuestionQuery> {
    const statement = `query GetQuestion($id: ID!) {
        getQuestion(id: $id) {
          __typename
          id
          text
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuestionQuery>response.data.getQuestion;
  }
  async ListQuestions(
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuestionsQuery> {
    const statement = `query ListQuestions($filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String) {
        listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            text
            roomId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuestionsQuery>response.data.listQuestions;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetVote(id: string): Promise<GetVoteQuery> {
    const statement = `query GetVote($id: ID!) {
        getVote(id: $id) {
          __typename
          id
          userId
          roomId
          questionId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVoteQuery>response.data.getVote;
  }
  async ListVotes(
    filter?: ModelVoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVotesQuery> {
    const statement = `query ListVotes($filter: ModelVoteFilterInput, $limit: Int, $nextToken: String) {
        listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userId
            roomId
            questionId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVotesQuery>response.data.listVotes;
  }
  OnCreateRoomQuestionListener(
    filter?: ModelSubscriptionRoomQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoomQuestion">>
  > {
    const statement = `subscription OnCreateRoomQuestion($filter: ModelSubscriptionRoomQuestionFilterInput) {
        onCreateRoomQuestion(filter: $filter) {
          __typename
          id
          roomId
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateRoomQuestion">
      >
    >;
  }

  OnUpdateRoomQuestionListener(
    filter?: ModelSubscriptionRoomQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoomQuestion">>
  > {
    const statement = `subscription OnUpdateRoomQuestion($filter: ModelSubscriptionRoomQuestionFilterInput) {
        onUpdateRoomQuestion(filter: $filter) {
          __typename
          id
          roomId
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateRoomQuestion">
      >
    >;
  }

  OnDeleteRoomQuestionListener(
    filter?: ModelSubscriptionRoomQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoomQuestion">>
  > {
    const statement = `subscription OnDeleteRoomQuestion($filter: ModelSubscriptionRoomQuestionFilterInput) {
        onDeleteRoomQuestion(filter: $filter) {
          __typename
          id
          roomId
          text
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteRoomQuestion">
      >
    >;
  }

  OnCreateRoomUserListener(
    filter?: ModelSubscriptionRoomUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoomUser">>
  > {
    const statement = `subscription OnCreateRoomUser($filter: ModelSubscriptionRoomUserFilterInput) {
        onCreateRoomUser(filter: $filter) {
          __typename
          id
          userId
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoomUser">>
    >;
  }

  OnUpdateRoomUserListener(
    filter?: ModelSubscriptionRoomUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoomUser">>
  > {
    const statement = `subscription OnUpdateRoomUser($filter: ModelSubscriptionRoomUserFilterInput) {
        onUpdateRoomUser(filter: $filter) {
          __typename
          id
          userId
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoomUser">>
    >;
  }

  OnDeleteRoomUserListener(
    filter?: ModelSubscriptionRoomUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoomUser">>
  > {
    const statement = `subscription OnDeleteRoomUser($filter: ModelSubscriptionRoomUserFilterInput) {
        onDeleteRoomUser(filter: $filter) {
          __typename
          id
          userId
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoomUser">>
    >;
  }

  OnCreateRoomListener(
    filter?: ModelSubscriptionRoomFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
  > {
    const statement = `subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
        onCreateRoom(filter: $filter) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
    >;
  }

  OnUpdateRoomListener(
    filter?: ModelSubscriptionRoomFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
  > {
    const statement = `subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
        onUpdateRoom(filter: $filter) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
    >;
  }

  OnDeleteRoomListener(
    filter?: ModelSubscriptionRoomFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
  > {
    const statement = `subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
        onDeleteRoom(filter: $filter) {
          __typename
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
    >;
  }

  OnCreateQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
  > {
    const statement = `subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onCreateQuestion(filter: $filter) {
          __typename
          id
          text
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
    >;
  }

  OnUpdateQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
  > {
    const statement = `subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onUpdateQuestion(filter: $filter) {
          __typename
          id
          text
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
    >;
  }

  OnDeleteQuestionListener(
    filter?: ModelSubscriptionQuestionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
  > {
    const statement = `subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
        onDeleteQuestion(filter: $filter) {
          __typename
          id
          text
          roomId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
    >;
  }

  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
        onCreateUser(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
        onUpdateUser(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
        onDeleteUser(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }

  OnCreateVoteListener(
    filter?: ModelSubscriptionVoteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVote">>
  > {
    const statement = `subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
        onCreateVote(filter: $filter) {
          __typename
          id
          userId
          roomId
          questionId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVote">>
    >;
  }

  OnUpdateVoteListener(
    filter?: ModelSubscriptionVoteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVote">>
  > {
    const statement = `subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
        onUpdateVote(filter: $filter) {
          __typename
          id
          userId
          roomId
          questionId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVote">>
    >;
  }

  OnDeleteVoteListener(
    filter?: ModelSubscriptionVoteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVote">>
  > {
    const statement = `subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
        onDeleteVote(filter: $filter) {
          __typename
          id
          userId
          roomId
          questionId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVote">>
    >;
  }
}
