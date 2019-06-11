const API_BASE_URL = `http://localhost:3000`;

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
};

const login = (name, password) => {
  return fetch(`${API_BASE_URL}/auth/create`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, password })
  }).then(res => res.json());
};

const signup = student => {
  return fetch(`${API_BASE_URL}/students`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name: student.name,
      password: student.password,
      ucas_id: student.ucas_id,
      school_name: student.school_name,
      enrollment_year: student.enrollment_year,
      location: student.location
    })
  }).then(res => res.json());
}
const getCurrentStudent = token => {
  return fetch(`${API_BASE_URL}/auth/show`, {
    headers: { ...headers, Authorization: token }
  }).then(res => res.json());
};

const getUniversities = () => {
  return fetch(`${API_BASE_URL}/universities`)
    .then(resp => resp.json());
}

export default {
  login,
  getCurrentStudent,
  getUniversities,
  signup
};
