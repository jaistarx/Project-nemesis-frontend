import Axios from "axios";

export const ISignUp = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/signup", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const ILogIn = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/login", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const EditUser = (data) => {
  return new Promise((resolve, reject) => {
    const { id } = data;
    console.log(data)
    Axios.put(`/${id}`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const DeleteUser = (data) => {
  return new Promise((resolve, reject) => {
    const { id } = data;
    console.log(data)
    Axios.delete(`/${id}`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


export const AllUserDetails = (data) => {
  return new Promise((resolve, reject) => {
    Axios.get("/allusers")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


