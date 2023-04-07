// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useGetUsersQuery } from "../api/userApi";

// function UserList() {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.users);
//   const usersStatus = useSelector((state) => state.users.status);
//   const error = useSelector((state) => state.users.error);

//   const { data, isFetching } = useGetUsersQuery();

//   useEffect(() => {
//     if (usersStatus === "idle") {
//       dispatch(useGetUsersQuery);
//     }
//   }, [usersStatus, dispatch]);

//   let content;

//   if (usersStatus === "loading") {
//     content = <div>Loading...</div>;
//   } else if (usersStatus === "succeeded") {
//     content = data.map((user) => (
//       <div key={user.id}>
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     ));
//   } else if (usersStatus === "failed") {
//     content = <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Users</h1>
//       {content}
//     </div>
//   );
// }

// export default UserList;
import { useGetUsersQuery } from '../api/usersApi';

const UserList = () => {
  const { data = [], error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;