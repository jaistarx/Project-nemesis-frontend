import Axios from "axios";

export const Login = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/login", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const SignUp = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/signup", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        // reject(err.response.data);
      });
      console.log(data)
  });
};

export const Details = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/details", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const Request = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/request", data)
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        reject(err.response.data);
      });
  });
};

export const MyRequest = (data) => {
  return new Promise((resolve, reject) => {
    const { username } = data;
    Axios.get(`/request/notresolved/${username}`)
      .then((res) => {
        // console.log(res.data)
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const MyUpdate = (data) => {
  return new Promise((resolve, reject) => {
    // const { username } = data;
    Axios.post("/update", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const requestNotFullfilled = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/donor/not_fullfilled", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
export const showWilling = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/donor/willing", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const cancelWilling = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/donor/not_willing", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const solvedRequest = (data) => {
  return new Promise((resolve, reject) => {
    const { username } = data;
    Axios.get(`request/resolved/${username}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
export const MyDonationapi = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/donor/past_donations", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
export const unSolvedRequest = (data) => {
  return new Promise((resolve, reject) => {
    const { username } = data;
    Axios.get(`request/notresolved/${username}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
export const cancelRequest = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post(`request/delete_request`, data)
      .then((res) => {
        resolve(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const donorDetails = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post(`request/donors_details`, data)
      .then((res) => {
        resolve(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
export const selectDonor = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post(`request/select`, data)
      .then((res) => {
        resolve(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
export const deselectDonor = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post(`request/deselect`, data)
      .then((res) => {
        resolve(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const upcomingdonation = (data) => {
  return new Promise((resolve, reject) => {
    Axios.post("/donor/upcomming_donations", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};