import axios from "axios";

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    default:
      return res
        .status(405)
        .json({ error: `${req.method} Method not allowed` });
  }
};

const handleGetRequest = async (req, res) => {
  if (req.query.full_time) {
    req.query.full_time = true;
  } else {
    req.query.full_time = false;
  }
  try {
    const response = await axios({
      method: "GET",
      url: "https://jobs.github.com/positions.json",
      params: req.query,
    });
    const jobs = JSON.stringify(response.data, getCircularReplacer());
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Cannot retrieve jobs, Please try again later." });
  }
};
