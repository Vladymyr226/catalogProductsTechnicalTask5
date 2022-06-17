import {
  TypeActionBeers,
  TypeActionUser,
  TypesBeers,
  User,
} from "../../types/globals";

export const CreateActionSetBeer = function (
  beers: Array<TypesBeers>
): TypeActionBeers {
  return {
    type: "ACTION_SET_BEER",
    payload: beers,
  };
};

//Прокидываем значение юзера в наш стор, для того, чтобы обновить значения.
export const CreateActionSetUser = function (user: User): TypeActionUser {
  return {
    type: "ACTION_SET_USER",
    payload: user,
  };
};
