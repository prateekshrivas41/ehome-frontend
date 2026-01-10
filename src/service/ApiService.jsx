const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;
// const apiBaseUrl = "http://localhost:3000"

const postData = async (url, body) => {
  const apiUrl = `${apiBaseUrl}/${url}`;

  // const token = 'your-access-token';
  const bodyData = JSON.stringify(body);
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
        // 'Authorization': `Bearer`,
      },
      body: bodyData,
    });
    console.log("Response:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
};

const getData = async (url) => {
  const apiUrl = `${apiBaseUrl}/${url}`;
  const token = "your-access-token";
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
};

export { postData, getData };
